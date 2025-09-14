import React from 'react';
import { Calendar, MessageCircle, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-ivory overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-8">
        <svg className="absolute top-20 right-10 w-32 h-32 text-champagne" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        </svg>
        <svg className="absolute bottom-32 left-16 w-24 h-24 text-champagne" viewBox="0 0 100 100" fill="none">
          <path d="M20 50 Q50 20 80 50 Q50 80 20 50" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </svg>
        <svg className="absolute top-1/3 left-1/4 w-16 h-16 text-rose" viewBox="0 0 100 100" fill="none">
          <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="0.8" opacity="0.3" rx="8" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-reverse space-x-2 bg-blush px-4 py-2 rounded-full text-sm font-medium text-espresso opacity-0 animate-fade-in">
              <Sparkles className="w-4 h-4 text-rose" />
              <span>תנועה קהילתית לנשים</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-espresso leading-tight opacity-0 animate-fade-up animate-delay-100">
              מהבערה בפנים —{' '}
              <span className="text-rose block mt-2">
                לתנועה בטוחה ביחד
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-espresso/80 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-up animate-delay-200">
              קהילה מלווה לנשים בתקיעות שרוצות שינוי אמיץ בעדינות —{' '}
              <span className="text-rose font-medium">צעד קטן בכל יום</span>, עם גב שמחזיק
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up animate-delay-300">
              <a
                href="https://calendly.com/boerb-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg flex items-center justify-center space-x-reverse space-x-3 group"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>קובעות שיחת התאמה (15 דק׳)</span>
              </a>
              
              <a
                href="https://wa.me/972501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg flex items-center justify-center space-x-reverse space-x-3 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>וואטסאפ עכשיו</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 opacity-0 animate-fade-up animate-delay-300">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-8 text-sm text-espresso/70">
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-2 h-2 bg-rose rounded-full"></div>
                  <span>60%+ שומרות על צ׳ק-אין יומי</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-2 h-2 bg-champagne rounded-full"></div>
                  <span>דירוג שביעות רצון גבוה</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative opacity-0 animate-fade-up animate-delay-200">
            <div className="relative">
              {/* Main image placeholder - Community collage */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blush via-ivory to-champagne/20 p-8 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-rose/10 to-champagne/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for authentic community photos */}
                  <div className="absolute inset-4 grid grid-cols-2 gap-4">
                    <div className="bg-ivory rounded-xl shadow-sm border border-champagne/20 flex items-center justify-center">
                      <img 
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                        alt="נשים תומכות זו בזו בשיחה אישית"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="bg-ivory rounded-xl shadow-sm border border-champagne/20 flex items-center justify-center">
                      <img 
                        src="https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                        alt="נשים בהליכה משותפת - תנועה פיזית ורגשית"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="bg-ivory rounded-xl shadow-sm border border-champagne/20 flex items-center justify-center">
                      <img 
                        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                        alt="מעגל שיחה קהילתי - שיתוף וליווי"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="bg-ivory rounded-xl shadow-sm border border-champagne/20 flex items-center justify-center">
                      <img 
                        src="https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                        alt="כתיבה רפלקטיבית - תהליך אישי מונחה"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-rose/10 rounded-full p-4 shadow-lg">
                <Sparkles className="w-6 h-6 text-rose" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-champagne/10 rounded-full p-3 shadow-lg">
                <div className="w-4 h-4 bg-champagne rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;