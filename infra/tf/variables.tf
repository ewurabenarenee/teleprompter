variable "aws_profile" {
  description = "AWS profile to use for authentication"
  type        = string
}

variable "aws_region" {
  description = "The AWS region to deploy regional resources"
  type        = string
}

variable "root_domain" {
  description = "Root domain name for the website"
  type        = string
}

variable "subdomain" {
  description = "Subdomain name for the website (if any)"
  type        = string
  default     = ""
}
