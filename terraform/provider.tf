terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
  
  allowed_account_ids = [var.aws_account_id]
  
  default_tags {
    tags = {
      Project     = "eqbal-murad-portfolio"
      Environment = var.environment
      ManagedBy   = "terraform"
      Owner       = "eqbal.murad"
    }
  }
}

# Provider for us-east-1 (required for ACM certificates used with CloudFront)
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
  
  allowed_account_ids = [var.aws_account_id]
  
  default_tags {
    tags = {
      Project     = "eqbal-murad-portfolio"
      Environment = var.environment
      ManagedBy   = "terraform"
      Owner       = "eqbal.murad"
    }
  }
}
