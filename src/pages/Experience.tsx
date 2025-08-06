import { motion } from 'framer-motion';
import { Code, Cloud, Shield, Brain, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const projects = [
    {
      title: "AWS Cloud Native Integration Platform",
      type: "Platform Engineering & Pre-Sales",
      icon: <Cloud className="text-blue-400" size={24} />,
      description: "Led pre-sales efforts for AWS cloud native integration platform, developing conceptual architecture and comprehensive project planning for MVP and 6-month delivery.",
      technologies: ["AWS", "Integration Platform", "Solution Architecture", "Cost Estimation", "RFP Response"],
      achievements: [
        "Drafted detailed RFP responses for cloud native integration solutions",
        "Developed conceptual architecture and project plans",
        "Provided comprehensive cost estimation and resource planning"
      ]
    },
    {
      title: "Enterprise CI/CD Platform",
      type: "DevOps & Compliance",
      icon: <Code className="text-green-400" size={24} />,
      description: "Designed comprehensive CI/CD platform with PCI-DSS compliance, including migration strategy from legacy systems and detailed implementation roadmap.",
      technologies: ["CI/CD", "PCI-DSS", "Bamboo Migration", "Pipeline Architecture", "Compliance"],
      achievements: [
        "Designed solution architecture ensuring PCI-DSS compliance",
        "Planned migration of repositories and pipelines from Bamboo",
        "Delivered detailed project planning and resource allocation"
      ]
    },
    {
      title: "DevSecOps Maturity Assessment",
      type: "Assessment & Strategy",
      icon: <Shield className="text-red-400" size={24} />,
      description: "Conducted comprehensive DevOps maturity assessment using custom frameworks, including discovery workshops, surveys, and stakeholder interviews.",
      technologies: ["DevOps Maturity Model", "Assessment Framework", "Workshop Facilitation", "Strategic Planning"],
      achievements: [
        "Designed and executed multiple discovery workshops",
        "Delivered detailed maturity ratings and recommendations",
        "Provided executive summary with effort vs. priority matrix"
      ]
    },
    {
      title: "Authentication Modernization & Cloud Migration",
      type: "Technical Delivery Lead",
      icon: <Shield className="text-purple-400" size={24} />,
      description: "Led comprehensive authentication system modernization and AWS cloud migration for 50+ applications, focusing on security, resilience, and user experience.",
      technologies: ["Azure AD", "AWS API Gateway", "Lambda Authorizer", "CloudFormation", "VPC Links", "ALB"],
      achievements: [
        "Developed four high-level AWS design options with detailed architecture",
        "Implemented Azure AD integration with custom Lambda authorizers",
        "Successfully migrated 50+ applications to AWS cloud infrastructure"
      ]
    },
    {
      title: "Enterprise CI/CD Standardization",
      type: "Platform Architect",
      icon: <Code className="text-cyan-400" size={24} />,
      description: "Established uniform CI/CD experience for enterprise developers, facilitating migration to modern cloud-native engineering patterns with comprehensive automation.",
      technologies: ["Azure DevOps", "Terraform", "AWS EKS", "Helm", "Kubernetes", "Infrastructure Scanning"],
      achievements: [
        "Developed standardized developer onboarding for greenfield applications",
        "Implemented Kubernetes-based microservice deployments using AWS EKS",
        "Created comprehensive testing suites with automated rollback mechanisms"
      ]
    },
    {
      title: "Infrastructure & Application Modernization",
      type: "Platform Team Lead",
      icon: <Cloud className="text-orange-400" size={24} />,
      description: "Led organization-wide infrastructure modernization initiative, implementing scalable application patterns, security controls, and comprehensive observability solutions.",
      technologies: ["Terraform", "AWS CDK", "Terragrunt", "Checkov", "Open Policy Agent", "Checkmarx", "OpenSearch", "DataDog"],
      achievements: [
        "Implemented robust security controls across infrastructure and applications",
        "Designed multi-region DNS system and AWS networking strategy",
        "Architected observability solution with OpenSearch and DataDog integration"
      ]
    },
    {
      title: "Multi-Account AWS Landing Zone",
      type: "Cloud Engineering",
      icon: <Cloud className="text-indigo-400" size={24} />,
      description: "Established enterprise-grade AWS landing zones using Control Tower, implementing governance, compliance, and security best practices across multiple accounts.",
      technologies: ["AWS Control Tower", "Service Control Policies", "AWS SSO", "CloudFormation", "Data Lake"],
      achievements: [
        "Implemented Service Control Policies for account governance",
        "Designed efficient CI/CD pipelines for Data Lake solutions",
        "Enhanced security practices and regulatory compliance"
      ]
    },
    {
      title: "AI-Powered Automation Solutions",
      type: "AI/ML Integration",
      icon: <Brain className="text-pink-400" size={24} />,
      description: "Implemented AI-powered automation solutions using LangChain and vector databases for intelligent document processing and knowledge retrieval systems.",
      technologies: ["LangChain", "Vector Databases", "RAG Workflows", "Claude AI", "LLM Integration", "Agentic AI"],
      achievements: [
        "Developed RAG workflows for intelligent document processing",
        "Integrated LLMs into enterprise applications for enhanced user experiences",
        "Built agentic AI systems for automated code review and infrastructure optimization"
      ]
    }
  ];

  const coreCompetencies = [
    {
      category: "Cloud Architecture & Migration",
      items: [
        "Designing scalable AWS and Azure-based solutions",
        "Leading large-scale cloud migration projects with minimal downtime",
        "Implementing Infrastructure as Code using Terraform and CDK",
        "Designing Azure AKS Landing Zones for enterprise Kubernetes deployments",
        "Conducting cloud consulting pre-sales support and technical assessments",
        "Optimizing cloud costs and performance across multi-cloud environments"
      ]
    },
    {
      category: "DevOps & Platform Engineering",
      items: [
        "Building CI/CD pipelines and automation workflows",
        "Conducting comprehensive DevSecOps assessments and security evaluations",
        "Implementing observability and monitoring solutions",
        "Container orchestration with Kubernetes, ECS, and Azure AKS",
        "Serverless architecture design and implementation",
        "Security-first DevOps practices and compliance automation"
      ]
    },
    {
      category: "AI & Machine Learning",
      items: [
        "Designing and implementing RAG (Retrieval-Augmented Generation) workflows",
        "Building agentic AI systems with LangChain and LangGraph frameworks",
        "Integrating LLMs (Anthropic Claude, Amazon Q, Llama) into enterprise applications",
        "Developing vector database solutions for semantic search and knowledge retrieval",
        "Creating AI-powered automation tools for code generation and review",
        "Implementing conversational AI interfaces using modern LLM APIs"
      ]
    },
    {
      category: "Technical Leadership & Strategy",
      items: [
        "Leading cross-functional product teams in software development",
        "Providing consultative guidance from requirements to deployment",
        "Mentoring team members on best practices and emerging technologies",
        "Driving technical decision-making and architecture reviews",
        "Presenting technical solutions to executive stakeholders",
        "Managing client relationships and expectations"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Project <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technology-focused projects and solutions across cloud architecture, platform engineering, and AI integration
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="card p-6 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-4">
                {project.icon}
                <div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-blue-400">{project.type}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Achievements</h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-300">
                      <ChevronRight size={12} className="text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-xs leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Core Competencies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreCompetencies.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {comp.category}
                </h3>
                <ul className="space-y-2">
                  {comp.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-300">
                      <ChevronRight size={14} className="text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;