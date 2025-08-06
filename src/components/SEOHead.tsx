import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Eqbal Murad - Senior Platform Engineering Architect | DevOps & Cloud Solutions",
  description = "Eqbal Murad - Senior Platform Engineering Architect & AWS Solutions Expert. Specializing in cloud architecture, DevOps, AI/ML integration, and technical leadership. Available for consulting.",
  keywords = "Eqbal Murad, Platform Engineering Architect, AWS Solutions Architect, DevOps Engineer, Cloud Migration Expert, DevSecOps Consultant",
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