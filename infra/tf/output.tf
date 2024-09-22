output "cf_distro_id" {
  description = "ID of the CloudFront distribution"
  value       = module.s3_cloudfront_website.cf_distro_id
}

output "bucket_name" {
  description = "The name of the S3 bucket, which is also the FQDN"
  value       = module.s3_cloudfront_website.bucket_name
}

output "aws_profile" {
  value = var.aws_profile
}
