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
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content - Left side */}
          <div className="text-center lg:text-right space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center space-x-reverse space-x-2 bg-blush px-4 py-2 rounded-full text-sm font-medium text-espresso opacity-0 animate-fade-in">
              <Sparkles className="w-4 h-4 text-rose" />
              <span>מאז 2020</span>
            </div>

            {/* Main Heading - Large and Bold */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-espresso leading-tight opacity-0 animate-fade-up animate-delay-100">
              אנחנו יוצרות{' '}
              <span className="text-rose block mt-2">
                תנועה מודרנית
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-espresso/70 font-light leading-relaxed max-w-lg mx-auto lg:mx-0 opacity-0 animate-fade-up animate-delay-200">
              בוער בי היא סוכנות אסטרטגית המתמחה ביצירת תנועות קהילתיות, 
              מיתוג מחדש ושינוי עבור נשים מתקדמות.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up animate-delay-300">
              <a
                href="https://calendly.com/boerb-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg flex items-center justify-center space-x-reverse space-x-3 group px-8 py-4 rounded-full"
              >
                <span>קבלי ייעוץ</span>
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              <a
                href="https://wa.me/972501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-lg flex items-center justify-center space-x-reverse space-x-3 group px-8 py-4 rounded-full"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>צור קשר</span>
              </a>
            </div>
          </div>

          {/* Images Grid - Right side */}
          <div className="relative opacity-0 animate-fade-up animate-delay-200 order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-6">
              {/* Top Left - Large rounded image */}
              <div className="col-span-2 lg:col-span-1">
                <div className="relative h-64 lg:h-80 bg-gradient-to-br from-blush to-champagne/20 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                    alt="נשים תומכות זו בזו"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Top Right - Circular badge */}
              <div className="flex items-start justify-end">
                <div className="w-32 h-32 bg-espresso rounded-full flex items-center justify-center text-ivory shadow-xl">
                  <div className="text-center">
                    <div className="text-xs font-light mb-1">MODERN</div>
                    <div className="text-xs font-light">MOVEMENT</div>
                    <div className="w-6 h-6 mx-auto mt-2">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom - Wide rounded image */}
              <div className="col-span-2">
                <div className="relative h-48 bg-gradient-to-br from-champagne/20 to-sageGrey/20 rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                    alt="קהילת נשים במפגש"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ivory/10 to-champagne/20"></div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 bg-rose/10 rounded-full p-3 shadow-lg backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-rose" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-champagne/10 rounded-full p-4 shadow-lg backdrop-blur-sm">
              <div className="w-4 h-4 bg-champagne rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;