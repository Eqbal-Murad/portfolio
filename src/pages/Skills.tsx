
import { motion } from 'framer-motion';
import { Cloud, Code, Settings, Database, Shield, Monitor, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Cloud className="text-blue-400" size={32} />,
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS (EC2, EKS, Lambda, Control Tower)", level: 95 },
        { name: "Azure (AKS, ARM Templates, CAF)", level: 90 },
        { name: "Multi-Cloud Governance & Landing Zones", level: 92 },
        { name: "Terraform & Terragrunt", level: 93 },
        { name: "AWS CDK & CloudFormation", level: 90 },
        { name: "Pulumi", level: 82 }
      ]
    },
    {
      icon: <Settings className="text-green-400" size={32} />,
      title: "DevOps & Automation",
      skills: [
        { name: "Kubernetes (EKS, AKS, ECS)", level: 92 },
        { name: "Docker & Container Orchestration", level: 93 },
        { name: "GitHub Actions & GitLab CI", level: 90 },
        { name: "Azure DevOps", level: 88 },
        { name: "Helm, ArgoCD & Kustomize", level: 85 },
        { name: "Service Mesh (Istio, Linkerd)", level: 80 }
      ]
    },
    {
      icon: <Code className="text-purple-400" size={32} />,
      title: "Programming & Scripting",
      skills: [
        { name: "Python", level: 92 },
        { name: "TypeScript & Node.js", level: 90 },
        { name: "Java", level: 85 },
        { name: "Bash Scripting", level: 93 }
      ]
    },
    {
      icon: <Database className="text-orange-400" size={32} />,
      title: "Serverless & Event-Driven",
      skills: [
        { name: "AWS Lambda & Step Functions", level: 92 },
        { name: "API Gateway & EventBridge", level: 90 },
        { name: "Serverless Framework & AWS SAM", level: 88 },
        { name: "ECS & Fargate", level: 87 }
      ]
    },
    {
      icon: <Monitor className="text-cyan-400" size={32} />,
      title: "Observability & Monitoring",
      skills: [
        { name: "OpenTelemetry", level: 88 },
        { name: "Prometheus & Grafana", level: 90 },
        { name: "Datadog & CloudWatch", level: 92 },
        { name: "ELK Stack & OpenSearch", level: 85 },
        { name: "Splunk", level: 78 }
      ]
    },
    {
      icon: <Shield className="text-red-400" size={32} />,
      title: "Security & Compliance",
      skills: [
        { name: "Checkov & Open Policy Agent", level: 90 },
        { name: "Snyk & SonarQube", level: 88 },
        { name: "Checkmarx & Security Hub", level: 85 },
        { name: "APRA Compliance & PCI-DSS", level: 90 },
        { name: "IAM & Access Management", level: 92 }
      ]
    },
    {
      icon: <Brain className="text-indigo-400" size={32} />,
      title: "Agentic AI & ML",
      skills: [
        { name: "Amazon Bedrock & AgentCore", level: 88 },
        { name: "LangGraph & Strands", level: 85 },
        { name: "RAG Architectures & Vector DBs", level: 87 },
        { name: "Lambda MCP & Tool Integration", level: 85 },
        { name: "Transformer Models", level: 82 },
        { name: "LLM Integration (Claude, Amazon Q)", level: 90 }
      ]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect Associate",
    "AWS Certified Developer Associate",
    "AWS Certified SysOps Associate",
    "HashiCorp Certified Terraform Associate",
    "HashiCorp Certified Vault Associate",
    "CNCF - Certified Kubernetes Administrator",
    "Bachelor's Degree in Engineering and Technology"
  ];

  const methodologies = [
    "Agile/Scrum & SAFe",
    "DevOps & DevSecOps Practices",
    "Site Reliability Engineering (SRE)",
    "Infrastructure as Code (IaC)",
    "GitOps & Continuous Deployment",
    "Cloud Adoption Framework (CAF)",
    "Microservices Architecture",
    "Event-Driven Architecture",
    "Platform Engineering",
    "Technical Pre-Sales & RFP Leadership"
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
            Technical <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive expertise across cloud platforms, DevOps tools, and modern development practices
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="card p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                {category.icon}
                <h2 className="text-xl font-bold text-white">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="card p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Methodologies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="card p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Methodologies</h2>
            <div className="grid grid-cols-1 gap-3">
              {methodologies.map((method, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">{method}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;