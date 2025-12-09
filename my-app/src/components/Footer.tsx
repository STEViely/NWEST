import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from '@/assets/hero-mirror.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary-foreground/90 text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div >
               <img src={Logo} alt="N-WEST Logo" className="w-{auto} h-10" />
              </div>
              
            </div>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-black hover:text-accent transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-black hover:text-accent transition-colors">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-black hover:text-accent transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-black hover:text-accent transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-orbitron font-semibold text-lg mb-4">{t('nav.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-black">
                <MapPin className="w-8 h-8 text-black" />
                <span>{t('contact.address.text')}</span>
              </li>
              <li className="flex items-center gap-2 text-text-black">
                <Phone className="w-4 h-4 text-black" />
                <span>+66 98 103 2459</span>
              </li>
              <li className="flex items-center gap-2 text-text-black">
                <Mail className="w-4 h-4 text-black" />
                <span>info@n-west.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-text-black">
          <p>© {new Date().getFullYear()} N-WEST. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
