import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-legal-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">AdvocateConnect</h3>
            <p className="text-legal-100 text-sm">
              Streamlining legal services communication and connecting advocates with clients through technology.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-legal-300 hover:text-white transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-legal-300 hover:text-white transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-legal-300 hover:text-white transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-legal-300 hover:text-white transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/consultation" className="text-legal-300 hover:text-white transition-colors">Legal Consultation</Link></li>
              <li><Link to="/services/representation" className="text-legal-300 hover:text-white transition-colors">Representation</Link></li>
              <li><Link to="/services/documents" className="text-legal-300 hover:text-white transition-colors">Document Review</Link></li>
              <li><Link to="/services/mediation" className="text-legal-300 hover:text-white transition-colors">Mediation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources/articles" className="text-legal-300 hover:text-white transition-colors">Legal Articles</Link></li>
              <li><Link to="/resources/faq" className="text-legal-300 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/resources/guides" className="text-legal-300 hover:text-white transition-colors">Legal Guides</Link></li>
              <li><Link to="/resources/events" className="text-legal-300 hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-legal-300">
                <Mail size={16} className="mr-2" />
                <a href="mailto:contact@advocateconnect.com" className="hover:text-white transition-colors">contact@advocateconnect.com</a>
              </li>
              <li className="flex items-center text-legal-300">
                <Phone size={16} className="mr-2" />
                <a href="tel:+15555555555" className="hover:text-white transition-colors">+1 (555) 555-5555</a>
              </li>
              <li className="text-legal-300 mt-2">
                123 Legal Street, Suite 100<br />
                Lawsville, CA 94105
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-legal-800 text-legal-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} AdvocateConnect. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
