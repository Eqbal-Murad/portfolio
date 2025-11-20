import { motion } from 'framer-motion';
import { Code, Cloud, Shield, Brain, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const projects = [
    {
      title: "APRA-Compliant Data Center Exit & Cloud Migration",
      type: "Principal Migration Architect",
      icon: <Cloud className="text-blue-400" size={24} />,
      description: "Led enterprise-scale migration of APRA-governed insurance applications from VMware to AWS under Migration Acceleration Program, ensuring full regulatory compliance.",
      technologies: ["AWS Control Tower", "CloudFormation", "Terraform", "AWS Migration Hub", "Application Migration Service", "Security Hub"],
      achievements: [
        "Architected secure AWS landing zones with full APRA regulatory compliance and governance frameworks",
        "Designed and executed zero-downtime migration strategy for business-critical workloads",
        "Delivered comprehensive security controls, operational playbooks, and disaster recovery procedures",
        "Achieved 100% data integrity with minimal business disruption across regulated environment"
      ]
    },
    {
      title: "Azure Kubernetes Landing Zone for Enterprise",
      type: "Azure Cloud Architect",
      icon: <Cloud className="text-cyan-400" size={24} />,
      description: "Designed and delivered production-grade, CAF-compliant AKS platform for enterprise application hosting with comprehensive security and governance.",
      technologies: ["Azure Kubernetes Service", "Terraform Cloud", "Azure DevOps", "Azure Policy", "Private Endpoints", "Azure Firewall"],
      achievements: [
        "Led design workshops and created comprehensive Cloud Adoption Framework (CAF) aligned architecture",
        "Delivered high-performance AKS landing zone with hub-spoke networking and Private Link",
        "Implemented Infrastructure as Code using Terraform Cloud with Azure DevOps integration",
        "Established governance policies, RBAC, and security controls meeting enterprise standards"
      ]
    },
    {
      title: "Platform Engineering RFP Leadership",
      type: "Principal Platform Engineering SME",
      icon: <Shield className="text-purple-400" size={24} />,
      description: "Drove platform engineering growth through technical pre-sales and solution architecture, leading multiple RFP initiatives across various sectors.",
      technologies: ["AWS", "Azure", "Terraform", "GitHub Actions", "Azure DevOps", "API Gateway", "EventBridge", "AKS"],
      achievements: [
        "Led technical response for enterprise platform engineering opportunities with high success rate",
        "Contributed to strategic offerings: Internal Developer Platform (IDP), DevSecOps Framework, AKS Accelerator",
        "Developed conceptual architectures, project plans, and cost models for FSI, government, and retail sectors",
        "Designed AWS cloud-native integration platform with API Gateway, EventBridge, Lambda, and Step Functions"
      ]
    },
    {
      title: "Authentication Modernization & Cloud Migration",
      type: "Engagement Lead / Technical Delivery Lead",
      icon: <Shield className="text-orange-400" size={24} />,
      description: "Led authentication uplift and 50+ application migration to AWS for global travel company, implementing hybrid authentication solution.",
      technologies: ["Azure AD", "AWS API Gateway", "Lambda", "CloudFormation", "Application Load Balancer", "VPC", "AWS Migration Services"],
      achievements: [
        "Conducted comprehensive discovery phase defining security and migration requirements",
        "Architected hybrid authentication solution with Azure AD, API Gateway, Lambda Authorizers, and Internal ALB",
        "Designed AWS landing zone expansion with enhanced security, networking, and governance",
        "Led parallel workstreams: application migration, file share migration, Active Directory integration"
      ]
    },
    {
      title: "Cloud-Native CI/CD Transformation",
      type: "Platform Architect / Technical Delivery Lead",
      icon: <Code className="text-green-400" size={24} />,
      description: "Standardized developer experience and CI/CD practices across enterprise airline applications with comprehensive automation and security.",
      technologies: ["AWS EKS", "Azure DevOps", "Terraform", "Helm", "Kubernetes", "Checkov", "Snyk", "SonarQube", "Datadog"],
      achievements: [
        "Established unified CI/CD framework for cloud-native microservices deployment",
        "Designed reusable application templates with embedded security, observability, and compliance controls",
        "Implemented comprehensive testing pyramid: unit, component, contract, smoke, integration, E2E",
        "Integrated automated security scanning: IaC (Checkov), dependency (Snyk), SAST (SonarQube)"
      ]
    },
    {
      title: "Infrastructure & Application Modernization",
      type: "Platform Architect / Technical Delivery Lead",
      icon: <Cloud className="text-indigo-400" size={24} />,
      description: "Core platform team member driving global infrastructure transformation, implementing security-first approach with comprehensive observability.",
      technologies: ["AWS CDK", "Terraform", "Terragrunt", "OpenSearch", "DataDog", "ECS", "Lambda", "Transit Gateway", "Route53"],
      achievements: [
        "Architected scalable, multi-region infrastructure platform using Terraform, AWS CDK, and Terragrunt",
        "Implemented security-first approach with Checkov, Open Policy Agent, and Checkmarx integration",
        "Designed multi-region networking with AWS Transit Gateway and intelligent DNS routing",
        "Delivered comprehensive observability stack with OpenSearch, DataDog ECS monitoring, and centralized logging"
      ]
    },
    {
      title: "Multi-Account AWS Landing Zone",
      type: "Cloud Platform Engineer",
      icon: <Cloud className="text-blue-400" size={24} />,
      description: "Established enterprise-grade AWS landing zones using Control Tower, implementing governance, compliance, and security best practices.",
      technologies: ["AWS Control Tower", "Service Control Policies", "AWS SSO", "CloudFormation", "Data Lake", "S3", "Glue", "Athena"],
      achievements: [
        "Deployed multi-account AWS landing zone with organizational SCPs for enhanced governance",
        "Implemented data lake architecture with appropriate security and access controls",
        "Designed and delivered CI/CD pipelines optimized for data engineering workflows",
        "Enhanced security posture with comprehensive compliance monitoring and remediation"
      ]
    },
    {
      title: "AI-Powered Automation Solutions",
      type: "AI/ML Integration & Innovation",
      icon: <Brain className="text-pink-400" size={24} />,
      description: "Implemented advanced agentic AI solutions using modern frameworks for intelligent document processing, multi-agent orchestration, and knowledge retrieval systems.",
      technologies: ["Amazon Bedrock", "Bedrock AgentCore", "LangGraph", "Strands", "Lambda MCP", "Vector Databases", "RAG Architectures", "Transformer Models"],
      achievements: [
        "Developed RAG workflows for intelligent document processing with semantic search capabilities",
        "Built multi-agent orchestration systems using LangGraph and Strands frameworks",
        "Created custom AI accelerators with context memory, tool integrations, and authentication flows",
        "Implemented secure AI solutions with Lambda/MCP integration and inbound/outbound authentication"
      ]
    }
  ];

  const coreCompetencies = [
    {
      category: "Cloud & Platform Engineering",
      items: [
        "Multi-cloud architecture (AWS, Azure) with emphasis on landing zones, governance, and compliance",
        "Enterprise platform modernization, migration strategies, and cloud-native transformation",
        "Infrastructure as Code (Terraform, Terragrunt, CloudFormation, AWS CDK, Pulumi)",
        "Container orchestration (Kubernetes, EKS, AKS, ECS) and serverless architectures",
        "APRA-compliant and PCI-DSS regulated environment design and implementation",
        "Cost optimization strategies and multi-cloud governance frameworks"
      ]
    },
    {
      category: "DevOps & Site Reliability Engineering",
      items: [
        "CI/CD pipeline design and implementation (Azure DevOps, GitHub Actions, GitLab CI)",
        "Site Reliability Engineering practices, observability, and incident management",
        "Security automation, compliance frameworks, and DevSecOps best practices",
        "Infrastructure scanning (Checkov, OPA) and application security (Snyk, SonarQube, Checkmarx)",
        "Performance optimization, capacity planning, and infrastructure scalability",
        "GitOps practices and automated deployment strategies"
      ]
    },
    {
      category: "Agentic AI & Innovation",
      items: [
        "Advanced AI/ML architectures: Transformer models, RAG systems, multi-agent orchestration",
        "Framework expertise: Amazon Bedrock, Bedrock AgentCore, LangGraph, Strands",
        "Custom AI accelerators with context memory, tool integrations, and authentication flows",
        "Secure AI implementations with Lambda/MCP, inbound/outbound authentication",
        "Vector database solutions for semantic search and knowledge retrieval",
        "LLM integration (Amazon Bedrock, Anthropic Claude, Amazon Q) into enterprise applications"
      ]
    },
    {
      category: "Technical Leadership & Strategy",
      items: [
        "Technical pre-sales, RFP leadership, and solution architecture for enterprise opportunities",
        "Cross-functional team leadership, stakeholder management, and executive communication",
        "Mentoring teams on best practices, emerging technologies, and platform engineering",
        "Driving technical decision-making and architecture reviews for enterprise solutions",
        "Agile delivery, program management, and strategic technology roadmap development",
        "Client relationship management and consultative guidance from requirements to deployment"
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