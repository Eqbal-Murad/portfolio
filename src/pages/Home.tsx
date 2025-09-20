
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cloud, Settings, Users, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const highlights = [
    {
      icon: <Cloud className="text-blue-400" size={24} />,
      title: "Cloud Architecture",
      description: "AWS-based solutions aligned with business objectives"
    },
    {
      icon: <Code className="text-green-400" size={24} />,
      title: "Platform Engineering",
      description: "Cutting-edge solutions using Python, TypeScript, Java"
    },
    {
      icon: <Settings className="text-purple-400" size={24} />,
      title: "DevOps Excellence",
      description: "Cloud-native and external tools for streamlined operations"
    },
    {
      icon: <Brain className="text-indigo-400" size={24} />,
      title: "AI & Agentic Systems",
      description: "Building intelligent automation with LLMs, RAG workflows, and agent frameworks"
    },
    {
      icon: <Users className="text-orange-400" size={24} />,
      title: "Technical Leadership",
      description: "Leading cross-functional teams and client engagements"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Eqbal Murad
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
              Senior Principal Engineer & AWS Solutions Expert
            </h2>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transforming business challenges into scalable cloud solutions with AI integration. 
              Specializing in AWS architecture, DevOps excellence, platform engineering, and agentic AI systems 
              at Slalom Consulting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/experience"
                className="flex items-center justify-center space-x-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <span>View Experience</span>
                <ArrowRight size={16} />
              </Link>
              
              <Link
                to="/contact"
                className="flex items-center justify-center space-x-2 px-8 py-3 border border-slate-600 hover:border-slate-500 text-gray-300 hover:text-white rounded-lg transition-colors"
              >
                <span>Get In Touch</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-16">
            What I Bring to the Table
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {item.icon}
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center bg-slate-800/30 backdrop-blur-sm rounded-2xl p-12 border border-slate-700"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h3>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how my expertise in cloud architecture, platform engineering, 
            and DevOps can help drive your next project forward.
          </p>
          
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg transition-all transform hover:scale-105"
          >
            <span>Start a Conversation</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;