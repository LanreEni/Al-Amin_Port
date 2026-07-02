import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950/80 backdrop-blur-md border-t border-white/5 py-8 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Oseni Al‑Amin Olanrewaju. All rights reserved.</p>
          
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="mailto:alaminoseni22@gmail.com" aria-label="Email" className="text-slate-400 hover:text-teal-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="tel:+2349061405246" aria-label="Phone" className="text-slate-400 hover:text-teal-400 transition-colors">
            <Phone className="w-5 h-5" />
          </a>
          <a href="https://github.com/LanreEni" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-teal-400 transition-colors">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/lanreeni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-teal-400 transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
