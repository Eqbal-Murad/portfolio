import { motion } from 'framer-motion';
import { Brain, MessageSquare, Database, Cloud, Zap, GitBranch } from 'lucide-react';

const AISkills: React.FC = () => {
  const aiProject = {
    title: "Enterprise RAG-Enabled AI Assistant Platform",
    description: "Production-ready, enterprise-grade Retrieval-Augmented Generation (RAG) chatbot platform featuring real-time conversational AI with AWS Bedrock integration, advanced memory management, and comprehensive quality evaluation metrics.",
    technologies: [
      { category: "Frontend", items: ["React.js 18", "AWS SDK", "Responsive Design", "WebSocket Integration"] },
      { category: "Backend", items: ["Node.js/Express.js", "Python 3.8+", "AWS Bedrock AgentCore", "JWT Authentication"] },
      { category: "AI/ML", items: ["AWS Bedrock (Claude Sonnet 4)", "RAG Implementation", "RAGAS Evaluation", "LangChain"] },
      { category: "Infrastructure", items: ["AWS ECS Fargate", "CloudFront CDN", "Application Load Balancer", "CloudWatch"] },
      { category: "DevOps", items: ["Terraform IaC", "Docker Containers", "AWS ECR", "OIDC Authentication"] },
      { category: "Security", items: ["AWS IAM", "AWS Cognito", "HTTPS/TLS", "Enterprise Compliance"] }
    ],
    features: [
      "Real-time Streaming Chat with WebSocket integration",
      "Multi-strategy Memory Management for user context",
      "Quality Evaluation Metrics using RAGAS framework",
      "Production-Ready Architecture with high availability",

      "Automated Infrastructure with one-click deployment"
    ],
    achievements: [
      "Secure user isolation with namespaced memory strategies",
      "Cost-effective shared memory architecture",
      "Enterprise-compliant security without broad internet access",
      "Automated deployment pipeline with infrastructure validation",
      "Seamless React frontend and AWS Bedrock integration",
      "Comprehensive error handling and graceful degradation"
    ]
  };

  const aiSkills = [
    {
      icon: <Brain className="text-purple-400" size={32} />,
      title: "Large Language Models",
      skills: ["AWS Bedrock", "Claude Sonnet 4", "LLM Integration", "Model Optimization"]
    },
    {
      icon: <MessageSquare className="text-blue-400" size={32} />,
      title: "Conversational AI",
      skills: ["RAG Implementation", "Memory Management", "Context Retention", "Real-time Streaming"]
    },
    {
      icon: <Database className="text-green-400" size={32} />,
      title: "Knowledge Systems",
      skills: ["Vector Databases", "Document Processing", "Semantic Search", "Data Indexing"]
    },
    {
      icon: <Zap className="text-yellow-400" size={32} />,
      title: "AI Frameworks",
      skills: ["LangChain", "RAGAS Evaluation", "AgentCore", "AI Orchestration"]
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
            AI & Machine Learning <span className="text-gradient">Expertise</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade AI solutions with focus on RAG systems, conversational AI, and production-ready implementations
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card p-8 mb-16"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Brain className="text-purple-400" size={40} />
            <h2 className="text-2xl font-bold text-white">{aiProject.title}</h2>
          </div>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            {aiProject.description}
          </p>

          {/* Technologies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {aiProject.technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Zap className="text-yellow-400 mr-2" size={24} />
              Key Features
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {aiProject.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Achievements */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <GitBranch className="text-cyan-400 mr-2" size={24} />
              Technical Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {aiProject.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* AI Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {aiSkills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + 0.1 * index }}
              className="card p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                {category.icon}
                <h2 className="text-xl font-bold text-white">{category.title}</h2>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional AI Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="card p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Cloud className="text-blue-400 mr-3" size={32} />
            Enterprise AI Implementation Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Architecture & Design</h3>
              <div className="space-y-2">
                {["Scalable AI Systems", "Microservices Architecture", "Event-driven Design", "API Gateway Integration"].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Security & Compliance</h3>
              <div className="space-y-2">
                {["Enterprise Security", "Data Privacy", "Access Controls", "Audit Logging"].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Performance & Monitoring</h3>
              <div className="space-y-2">
                {["Quality Metrics", "Performance Optimization", "Cost Management", "Observability"].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AISkills;