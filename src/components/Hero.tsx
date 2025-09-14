import React from 'react';
import { Calendar, MessageCircle, Sparkles, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-espresso overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-32 h-32 bg-rose/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-40 h-40 bg-champagne/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blush/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content - Left side */}
          <div className="text-center lg:text-right space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center space-x-reverse space-x-2 bg-rose/20 px-4 py-2 rounded-full text-sm font-medium text-rose opacity-0 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>פתחי את הכוח שלך</span>
            </div>

            {/* Main Heading - Large and Bold */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ivory leading-tight opacity-0 animate-fade-up animate-delay-100">
              תתחילי לדאוג{' '}
              <span className="text-rose block mt-2">
                לביצועים שלך
              </span>
              <span className="text-champagne block mt-2 text-4xl md:text-5xl lg:text-6xl">
                כל יום.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-ivory/70 font-light leading-relaxed max-w-lg mx-auto lg:mx-0 opacity-0 animate-fade-up animate-delay-200">
              דאגי לפתח משאבים באופן רציף ולשלב אותם 
              עם הפרויקטים הקודמים שלך בתנועה קהילתית תומכת.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up animate-delay-300">
              <a
                href="https://calendly.com/boerb-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose text-ivory px-8 py-4 rounded-lg font-medium text-lg flex items-center justify-center space-x-reverse space-x-3 group hover:bg-rose/90 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                <span>עקבי אחרי הביצועים</span>
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              <a
                href="https://wa.me/972501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-champagne text-champagne px-8 py-4 rounded-lg font-medium text-lg flex items-center justify-center space-x-reverse space-x-3 group hover:bg-champagne hover:text-espresso transition-all duration-300 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>למדי עוד</span>
              </a>
            </div>
          </div>

          {/* Image - Right side */}
          <div className="relative opacity-0 animate-fade-up animate-delay-200 order-1 lg:order-2">
            <div className="relative">
              {/* Main image container */}
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-blush/20 to-champagne/10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                  alt="אישה מחייכת עם מחשב נייד"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating decorative circle */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-ivory rounded-full flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="w-3 h-3 bg-rose rounded-full mx-auto mb-1"></div>
                  <div className="w-2 h-2 bg-champagne rounded-full mx-auto"></div>
                </div>
              </div>

              {/* Top floating element */}
              <div className="absolute -top-4 -left-4 bg-rose/20 rounded-full p-4 shadow-lg backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-rose" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animate-delay-500">
          <div className="flex flex-col items-center text-ivory/60">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;