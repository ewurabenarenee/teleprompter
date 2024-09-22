# Teleprompter

This is an interactive tool designed to function as a teleprompter for reading and memorizing texts. It allows users to upload text files, navigate through sentences and customize the reading environment. The tool is useful for rehearsing speeches or reading long passages without losing track.

## Prerequisites

### For Local Development

To run the project locally, ensure you have the following installed on your machine:

- **Node.js**: For running the application and managing dependencies

### For Deployment

If you plan to deploy the application, you will also need the following

- **Terraform**: For deploying the infrastructure on AWS
- **AWS CLI**: For interacting with AWS services and managing the deployment

## How to Run Locally

To run Teleprompter locally on your machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ewurabenarenee/teleprompter.git
   cd teleprompter
   ```
2. **Install Dependencies**:
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```
3. **Start the Development Server**:
   Run the following command to start a local development server:
   ```bash
   npm run dev
   ```
   This command will start the application locally, and you can access it in your web browser.

## How to Deploy to AWS

This repository contains a Terraform configuration and a deployment script to automate the deployment of the Teleprompter on AWS. Here is how you can deploy the application:

1. **Set Up Terraform Variables**:
   Before running the deployment script, you need to configure the `terraform.tfvars` file located in the `infra/tf` directory. This file should include the following variables:
   - `aws_profile`: The name of your AWS CLI profile
   - `aws_region`: The AWS region where the resources will be deployed
   - `root_domain`: The root domain for your website
   - `subdomain` (optional): The subdomain for your website, (if applicable)
2. **Run the Deployment Script**:
   A deployment script (`deploy.sh`) is provided to automate the deployment process. This script will:
   - Install dependencies
   - Build the project
   - Apply the Terraform configuration
   - If there are changes, sync the built files with S3 and invalidate the CloudFront cache
   ```bash
   ./infra/deploy.sh
   ```

### Terraform Module Details

The Terraform setup uses the `s3-cloudfront-website` module, which configures an S3 bucket for static site hosting, a CloudFront distribution for content delivery, ACM for certificates and Route 53 DNS records. For more details on this module, visit the [s3-cloudfront-website GitHub repository](https://github.com/ewurabenarenee/s3-cloudfront-website).
