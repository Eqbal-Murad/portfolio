import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: "Email",
      value: "me@eqbalmurad.com",
      link: "mailto:me@eqbalmurad.com"
    },
    {
      icon: <Linkedin className="text-blue-400" size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/eqbal-murad",
      link: "https://www.linkedin.com/in/eqbal-murad/"
    },
    {
      icon: <MapPin className="text-blue-400" size={24} />,
      title: "Location",
      value: "Remote / Global",
      link: null
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
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to discuss your next project? Let's connect and explore how we can work together
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card p-8 mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Let's Connect</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                and ways to help organizations leverage cloud technologies, platform engineering, 
                and AI/ML solutions to achieve their goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="p-4 bg-slate-800 rounded-lg inline-block mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-gray-400">{info.value}</span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="mailto:me@eqbalmurad.com"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-lg"
              >
                <Mail size={20} />
                <span>Send me an email</span>
              </a>
            </div>
          </motion.div>

          {/* What I Can Help With */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">What I Can Help With</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-3 text-gray-300">
                <li>• APRA-compliant cloud architecture and migration</li>
                <li>• AWS & Azure landing zones design and implementation</li>
                <li>• Platform engineering and RFP technical leadership</li>
                <li>• DevSecOps assessments and compliance frameworks</li>
                <li>• Agentic AI and multi-agent orchestration systems</li>
              </ul>
              <ul className="space-y-3 text-gray-300">
                <li>• RAG architectures and vector database solutions</li>
                <li>• Enterprise CI/CD platform modernization</li>
                <li>• Infrastructure as Code (Terraform, Terragrunt, CDK)</li>
                <li>• Kubernetes and container orchestration (EKS, AKS)</li>
                <li>• Technical leadership and strategic consulting</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;