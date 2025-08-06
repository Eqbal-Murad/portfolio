
import { motion } from 'framer-motion';
import { Cloud, Code, Settings, Database, Shield, Monitor, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Cloud className="text-blue-400" size={32} />,
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS (EC2, S3, Lambda, ECS, EKS)", level: 95 },
        { name: "Azure AKS & Landing Zones", level: 88 },
        { name: "Cloud Migration Strategies", level: 92 },
        { name: "Terraform", level: 90 },
        { name: "AWS CDK", level: 85 }
      ]
    },
    {
      icon: <Settings className="text-green-400" size={32} />,
      title: "DevOps & Automation",
      skills: [
        { name: "Docker & Kubernetes", level: 92 },
        { name: "DevSecOps Assessments", level: 90 },
        { name: "GitHub Actions", level: 88 },
        { name: "Azure DevOps", level: 85 },
        { name: "Helm & ArgoCD", level: 80 }
      ]
    },
    {
      icon: <Code className="text-purple-400" size={32} />,
      title: "Programming & Scripting",
      skills: [
        { name: "Python", level: 90 },
        { name: "TypeScript/Node.js", level: 88 },
        { name: "Java", level: 85 },
        { name: "Bash Scripting", level: 92 }
      ]
    },
    {
      icon: <Database className="text-orange-400" size={32} />,
      title: "Serverless & Containers",
      skills: [
        { name: "AWS Lambda", level: 90 },
        { name: "Serverless Framework", level: 85 },
        { name: "AWS SAM", level: 88 },
        { name: "Container Orchestration", level: 92 }
      ]
    },
    {
      icon: <Monitor className="text-cyan-400" size={32} />,
      title: "Observability & Monitoring",
      skills: [
        { name: "OpenTelemetry", level: 85 },
        { name: "Prometheus & Grafana", level: 88 },
        { name: "Datadog", level: 82 },
        { name: "CloudWatch", level: 90 }
      ]
    },
    {
      icon: <Shield className="text-red-400" size={32} />,
      title: "Security & Compliance",
      skills: [
        { name: "AWS Security Best Practices", level: 88 },
        { name: "Infrastructure Security", level: 85 },
        { name: "Compliance Frameworks", level: 80 },
        { name: "Identity & Access Management", level: 87 }
      ]
    },
    {
      icon: <Brain className="text-indigo-400" size={32} />,
      title: "AI & Agentic AI",
      skills: [
        { name: "LangChain & LangGraph", level: 85 },
        { name: "Vector Databases & RAG", level: 82 },
        { name: "LLM Integration (Claude, Llama)", level: 88 },
        { name: "AI Agent Frameworks", level: 80 }
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
    "Agile/Scrum",
    "DevOps Practices",
    "DevSecOps Assessments",
    "Cloud Migration Strategies",
    "Pre-Sales Technical Support",
    "Site Reliability Engineering (SRE)",
    "Infrastructure as Code (IaC)",
    "Continuous Integration/Deployment",
    "Microservices Architecture"
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