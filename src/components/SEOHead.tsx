import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Eqbal Murad - Principal Platform Engineer | Cloud & DevOps Solutions",
  description = "Eqbal Murad - Principal Platform Engineer with 18+ years expertise in cloud transformation, APRA-compliant architectures, and agentic AI solutions. Specializing in AWS, Azure, platform engineering, and technical leadership.",
  keywords = "Eqbal Murad, Principal Platform Engineer, AWS Solutions Architect, Azure Cloud Architect, DevOps Engineer, Platform Engineering, APRA Compliance, Agentic AI",
  canonical = "https://eqbalmurad.com",
  ogImage = "https://eqbalmurad.com/og-image.jpg"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;