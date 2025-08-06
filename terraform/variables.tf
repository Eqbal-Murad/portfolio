variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "ap-southeast-2"
}

variable "environment" {
  description = "production"
  type        = string
  default     = "production"
}

variable "domain_name" {
  description = "Domain name for the portfolio"
  type        = string
  default     = "eqbalmurad.com"
}

variable "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (set as environment variable to avoid querying)"
  type        = string
  default     = ""
}

variable "aws_account_id" {
  description = "AWS Account ID for deployment (set via TF_VAR_aws_account_id)"
  type        = string
  # No default - must be provided via environment variable
}