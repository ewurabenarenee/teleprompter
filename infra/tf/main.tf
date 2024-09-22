module "s3_cloudfront_website" {
  source = "github.com/ewurabenarenee/s3-cloudfront-website"

  root_domain = var.root_domain
  subdomain   = var.subdomain

  providers = {
    aws.ue1 = aws.ue1
  }
}
