
import { motion } from 'framer-motion';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="text-blue-400" size={24} />,
      title: "Technical Excellence",
      description: "Committed to delivering high-quality, scalable solutions that exceed expectations."
    },
    {
      icon: <Users className="text-green-400" size={24} />,
      title: "Collaborative Leadership",
      description: "Leading cross-functional teams with a focus on mentorship and knowledge sharing."
    },
    {
      icon: <Lightbulb className="text-yellow-400" size={24} />,
      title: "Innovation Focus",
      description: "Constantly exploring new technologies and methodologies to drive innovation."
    },
    {
      icon: <Award className="text-purple-400" size={24} />,
      title: "Client Success",
      description: "Dedicated to understanding client needs and delivering solutions that create value."
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
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about transforming complex business challenges into elegant, scalable solutions
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6">My Journey</h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                As a Principal Platform Engineer at Slalom Consulting, I bring 18+ years of expertise 
                driving enterprise cloud transformation, platform modernization, and DevOps excellence. 
                My passion lies in architecting and delivering secure, scalable cloud platforms for 
                APRA-regulated and enterprise environments across AWS and Azure.
              </p>
              
              <p>
                With advanced specialization in agentic AI solutions, including RAG architectures, 
                multi-agent orchestration, and custom AI accelerators, I bridge infrastructure, security, 
                and AI innovation to deliver business-critical outcomes. My proven track record includes 
                leading significant platform engineering opportunities with consistently high success rates.
              </p>
              
              <p>
                My approach combines strategic technical leadership with hands-on expertise in cloud architecture, 
                DevOps practices, and cutting-edge AI integration, ensuring that every solution not only meets 
                immediate requirements but also scales effectively for future growth while maintaining the 
                highest security and compliance standards.
              </p>
            </div>
          </motion.div>

          {/* Career Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Career Highlights</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Technical Leadership</h3>
                <p className="text-gray-400 text-sm">
                  Leading cross-functional product teams in creating custom software solutions, 
                  combining technical expertise with consultative guidance.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Cloud Architecture</h3>
                <p className="text-gray-400 text-sm">
                  Designing AWS-based architectures aligned with business initiatives, 
                  ensuring scalability and cost-effectiveness.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">AI & Platform Engineering</h3>
                <p className="text-gray-400 text-sm">
                  Leading engagement discovery phases and implementing cutting-edge 
                  Platform Engineering solutions with AI/ML integration and agentic workflows.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-orange-400 mb-2">Agile Leadership</h3>
                <p className="text-gray-400 text-sm">
                  Managing work effort estimation and story pointing activities, 
                  ensuring alignment with user and business goals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Drives Me
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;