# HTTPS Deployment Guide

## Prerequisites

1. **AWS CLI** configured with appropriate credentials
2. **Terraform** (v1.6.0 or later)
3. **Node.js** (v18 or later)
4. **Domain** (eqbalmurad.com) configured in Route53

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Infrastructure Setup (One-time)

```bash
cd terraform
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars with your values

terraform init
terraform apply
```

**Note**: Certificate validation may take 5-10 minutes. CloudFront deployment takes 15-20 minutes.

## GitHub Actions Setup

1. Add these secrets to your GitHub repository:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`

2. Push to main branch - deployment happens automatically!

## Manual Deployment (if needed)

```bash
# Build the application
npm run build

# Deploy to S3
aws s3 sync dist/ s3://eqbalmurad.com-portfolio --delete

# Invalidate CloudFront cache
DISTRIBUTION_ID=$(aws cloudfront list-distributions --query "DistributionList.Items[?Aliases.Items[0]=='eqbalmurad.com'].Id" --output text)
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
```

## HTTPS Architecture

- **S3**: Static file hosting
- **CloudFront**: Global CDN with SSL termination
- **ACM**: Free SSL certificate (auto-renewal)
- **Route53**: DNS with alias records to CloudFront

## Cost

- S3 hosting: ~$1-2/month
- CloudFront: ~$1-5/month
- Route53: ~$0.50/month
- ACM Certificate: Free
- **Total: ~$3-8/month**

## Troubleshooting

### Certificate Issues
- Ensure Route53 hosted zone exists
- Check DNS propagation (can take up to 48 hours)
- Verify domain ownership

### CloudFront Issues
- Wait 15-20 minutes for distribution deployment
- Check origin configuration
- Verify S3 bucket policy allows CloudFront access

### Build Fails
- Check Node.js version (needs v18+)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall

## Security Features

- HTTPS enforcement (HTTP redirects to HTTPS)
- TLS 1.2+ minimum
- CloudFront security headers
- S3 bucket encryption
- Origin Access Control (OAC)