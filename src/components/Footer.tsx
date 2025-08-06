
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Eqbal Murad</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Senior Platform Engineering Architect passionate about building scalable, 
              secure, and efficient cloud solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/eqbal-murad.pdf" target="_blank" rel="noopener noreferrer" 
                 className="block text-gray-400 hover:text-white transition-colors text-sm">
                Download Resume
              </a>
              <a href="https://www.linkedin.com/in/eqbal-murad/" target="_blank" rel="noopener noreferrer"
                 className="block text-gray-400 hover:text-white transition-colors text-sm">
                LinkedIn Profile
              </a>
              <a href="mailto:contact@eqbalmurad.com"
                 className="block text-gray-400 hover:text-white transition-colors text-sm">
                Email Me
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/eqbal-murad/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://github.com/Eqbal-Murad"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a
                href="mailto:contact@eqbalmurad.com"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
            <span>© {currentYear} Eqbal Murad. Built with</span>
            <Heart size={14} className="text-red-400" />
            <span>using React, TypeScript & AWS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;