#!/bin/bash

set -e

SCRIPT_DIR=$(dirname "$(realpath "$0")")
PROJECT_ROOT=$(realpath "$SCRIPT_DIR/..")

SHA_FILE="$PROJECT_ROOT/.last_deploy_sha"
DIST_DIR="$PROJECT_ROOT/dist"

cd "$PROJECT_ROOT"

npm install
npm run build

CURRENT_SHA=$(find "$DIST_DIR" -type f -exec sha256sum {} + | sort -k 2 | sha256sum | awk '{print $1}')

if [ -f "$SHA_FILE" ]; then
    PREVIOUS_SHA=$(cat "$SHA_FILE")
else
    PREVIOUS_SHA=""
fi

cd "$SCRIPT_DIR/tf"

terraform init
terraform apply -auto-approve

AWS_PROFILE=$(terraform output -raw aws_profile)

if [ -z "$AWS_PROFILE" ]; then
    exit 1
fi

export AWS_PROFILE

if [ "$CURRENT_SHA" != "$PREVIOUS_SHA" ]; then
    BUCKET_NAME=$(terraform output -raw bucket_name)
    aws s3 sync "$DIST_DIR/" "s3://$BUCKET_NAME/"
    
    DISTRIBUTION_ID=$(terraform output -raw cf_distro_id)
    aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*"
    
    echo "$CURRENT_SHA" > "$SHA_FILE"
else
    echo "No changes detected in the dist folder. Skipping S3 sync and CloudFront invalidation."
fi

echo "Deployment complete."
