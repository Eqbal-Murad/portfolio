# Eqbal Murad - Portfolio Website

A modern, responsive portfolio website showcasing DevOps and Platform Engineering expertise.

## 🚀 Live Website
[https://eqbalmurad.com](https://eqbalmurad.com)

## 🏗️ Architecture

- **Frontend**: React + TypeScript + Tailwind CSS
- **Hosting**: AWS S3 + CloudFront CDN
- **Domain**: Route53 with SSL/TLS (ACM)
- **Infrastructure**: Terraform (IaC)
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
portfolio/
├── src/                    # React application source
├── terraform/             # Infrastructure as Code
├── .github/workflows/     # CI/CD pipeline
├── public/               # Static assets
└── docs/                 # Documentation
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Infrastructure**: Terraform, AWS (S3, CloudFront, Route53, ACM)
- **CI/CD**: GitHub Actions

## 🚀 Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Eqbal-Murad/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

### Prerequisites
- AWS CLI configured
- Terraform installed
- Domain (eqbalmurad.com) in Route53

### Infrastructure Setup
```bash
cd terraform
terraform init
terraform apply
```

### GitHub Actions Setup
Add these secrets to your GitHub repository:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

The website automatically deploys when code is pushed to the `main` branch.

## 💰 Cost Optimization

- S3 static hosting (~$1-2/month)
- CloudFront CDN (~$1-5/month)
- Route53 hosted zone (~$0.50/month)
- ACM SSL certificate (Free)
- **Total estimated cost: ~$3-8/month**

## 📋 Features

- ✅ Responsive design optimized for all devices
- ✅ Fast loading with CloudFront CDN
- ✅ SSL/TLS encryption
- ✅ SEO optimized
- ✅ Automated deployments
- ✅ Cost-optimized AWS architecture

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.