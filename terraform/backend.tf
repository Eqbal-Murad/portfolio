terraform {
  backend "s3" {
    bucket = "eqbalmurad.com-terraform-state"
    key    = "portfolio/terraform.tfstate"
    region = "ap-southeast-2"
  }
}