variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-west-2"
}

variable "environment" {
  description = "Environment name"
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