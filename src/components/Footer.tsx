import React from 'react';
import { Heart, Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-espresso text-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold">
                בוער <span className="text-rose">בי</span>
              </span>
            </div>
            <p className="text-ivory/80 text-lg leading-relaxed mb-6 max-w-md">
              תנועה קהילתית לנשים שרוצות שינוי בטוח ומונחה. 
              צעד קטן בכל יום, עם גב שמחזיק.
            </p>
            
            <div className="flex items-center space-x-reverse space-x-4">
              <a
                href="https://instagram.com/boerb_community"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/60 hover:text-rose transition-colors duration-300"
                aria-label="אינסטגרם"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/boerbcommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/60 hover:text-rose transition-colors duration-300"
                aria-label="פייסבוק"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/company/boerb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/60 hover:text-rose transition-colors duration-300"
                aria-label="לינקדין"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-ivory mb-4">ניווט מהיר</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-ivory/70 hover:text-rose transition-colors duration-300"
                >
                  על התנועה
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-ivory/70 hover:text-rose transition-colors duration-300"
                >
                  המסלולים שלנו
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('events')}
                  className="text-ivory/70 hover:text-rose transition-colors duration-300"
                >
                  אירועים
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-ivory/70 hover:text-rose transition-colors duration-300"
                >
                  צור קשר
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-ivory mb-4">יצירת קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-reverse space-x-3">
                <Mail className="w-4 h-4 text-rose flex-shrink-0" />
                <a
                  href="mailto:hello@boerb.co.il"
                  className="text-ivory/70 hover:text-rose transition-colors duration-300"
                >
                  hello@boerb.co.il
                </a>
              </li>
              <li className="flex items-center space-x-reverse space-x-3">
                <Phone className="w-4 h-4 text-rose flex-shrink-0" />
                <a
                  href="tel:+972501234567"
                  className="text-ivory/70 hover:text-rose transition-colors duration-300"
                >
                  050-123-4567
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://calendly.com/boerb-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-rose text-ivory px-4 py-2 rounded-lg font-medium hover:bg-rose/90 transition-colors duration-300"
              >
                קבעי שיחה
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-ivory/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-reverse space-x-2 text-ivory/60">
              <span>נבנה באהבה</span>
              <Heart className="w-4 h-4 text-rose" />
              <span>עבור הקהילה</span>
            </div>

            <div className="flex items-center space-x-reverse space-x-6 text-sm text-ivory/60">
              <span>&copy; {currentYear} בוער בי. כל הזכויות שמורות.</span>
              <a
                href="/privacy"
                className="hover:text-rose transition-colors duration-300"
              >
                מדיניות פרטיות
              </a>
              <a
                href="/terms"
                className="hover:text-rose transition-colors duration-300"
              >
                תנאי שימוש
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;