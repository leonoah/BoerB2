import React from 'react';
import { Check, Star, ArrowLeft } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      name: 'אש קטנה',
      subtitle: 'קוהורט 8 שבועות',
      price: '₪1,200',
      period: 'לקוהורט המלא',
      description: 'המסלול הקהילתי הבסיסי שלנו',
      features: [
        'מפגש שבועי 90 דקות',
        'Buddy קבוע לכל התהליך', 
        '"גפרור היום" - משימות קטנות',
        'קהילה תומכת בוואטסאפ',
        'חומרי לימוד והעמקה',
        'Office Hours שבועיים'
      ],
      isPopular: false,
      ctaText: 'התחילו עם אש קטנה',
      ctaLink: 'https://calendly.com/boerb-ash-ktana'
    },
    {
      name: 'אש בוערת',
      subtitle: 'כולל ליווי 1:1',
      price: '₪2,400',
      period: 'לקוהורט המלא',
      description: 'המסלול המומלץ עם ליווי אישי',
      features: [
        'כל מה שכלול ב"אש קטנה"',
        'שני מפגשים אישיים עם מאיה',
        'תכנית אישית מותאמת',
        'WhatsApp ישיר עם המנטורית',
        'חומרי העמקה מתקדמים',
        'עדיפות ב-Office Hours'
      ],
      isPopular: true,
      ctaText: 'בוחרות באש בוערת',
      ctaLink: 'https://calendly.com/boerb-ash-boeret'
    },
    {
      name: 'ליווי אישי מתקדם',
      subtitle: 'מותאם אישית',
      price: 'מ-₪4,000',
      period: 'לתהליך',
      description: 'ליווי מקצועי אינטנסיבי',
      features: [
        'מפגשים אישיים שבועיים',
        'זמינות WhatsApp 24/7',
        'תכנית מותאמת אישית לחלוטין',
        'גישה לקהילת הבוגרות',
        'חומרי לימוד מתקדמים',
        'מקומות מוגבלים בלבד'
      ],
      isPopular: false,
      ctaText: 'לפרטים נוספים',
      ctaLink: 'https://calendly.com/boerb-advanced'
    }
  ];

  return (
    <section id="services" className="py-20 bg-blush/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-espresso mb-6">
            המסלולים שלנו
          </h2>
          <p className="text-xl text-espresso/80 max-w-2xl mx-auto leading-relaxed">
            בחרי את המסלול שהכי מתאים לך - כולם מתחילים עם <span className="text-rose font-medium">צעד קטן</span> ומובילים לשינוי אמיתי
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative bg-ivory rounded-2xl p-8 shadow-lg border transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02] ${
                service.isPopular 
                  ? 'border-rose ring-2 ring-rose/20' 
                  : 'border-champagne/30 hover:border-champagne'
              }`}
            >
              {/* Popular badge */}
              {service.isPopular && (
                <div className="absolute -top-4 right-6 bg-rose text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-reverse space-x-1">
                  <Star className="w-4 h-4" />
                  <span>המומלץ</span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-espresso mb-2">{service.name}</h3>
                <p className="text-champagne font-medium mb-3">{service.subtitle}</p>
                <p className="text-espresso/70 text-sm mb-4">{service.description}</p>
                
                {/* Price */}
                <div className="flex items-baseline space-x-reverse space-x-1">
                  <span className="text-3xl font-bold text-rose">{service.price}</span>
                  <span className="text-espresso/60 text-sm">{service.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-reverse space-x-3">
                      <Check className="w-5 h-5 text-rose flex-shrink-0 mt-0.5" />
                      <span className="text-espresso/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <a
                  href={service.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center space-x-reverse space-x-2 py-3 px-6 rounded-lg font-medium transition-all duration-300 group ${
                    service.isPopular
                      ? 'btn-primary'
                      : 'btn-outline'
                  }`}
                >
                  <span>{service.ctaText}</span>
                  <ArrowLeft className="w-4 h-4 group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-espresso/60 text-sm max-w-2xl mx-auto">
            כל המסלולים כוללים אפשרות לביטול עד 48 שעות לפני תחילת הקוהורט עם החזר מלא. 
            <br />
            <a href="#contact" className="text-rose hover:underline">יש שאלות? בואי נשוחח</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;