import React from 'react';
import { Heart, Users, Compass, Shield, Flame } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Compass,
      title: 'בחירה בשינוי',
      description: 'בחירה יומיומית, לא אירוע חד-פעמי'
    },
    {
      icon: Flame,
      title: 'להיות בתנועה', 
      description: 'צעדים קטנים שעושים הבדל'
    },
    {
      icon: Users,
      title: 'ליווי בשינוי',
      description: 'לא לבד, יש גב'
    },
    {
      icon: Heart,
      title: 'אחריות מיטיבה',
      description: 'שיקוף מחבק, לא מעניש'
    },
    {
      icon: Shield,
      title: 'אומץ עדין',
      description: 'להתקדם בקצב שלך'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'מפגש שבועי',
      description: 'מפגש קבוצתי של 90 דקות עם ליווי מקצועי'
    },
    {
      number: '02', 
      title: 'Buddy קבוע',
      description: 'שותפה אישית לדרך עם תמיכה הדדית'
    },
    {
      number: '03',
      title: '"גפרור היום"',
      description: 'פעולה קטנה יומית שמניעה קדימה'
    },
    {
      number: '04',
      title: 'Office Hours',
      description: 'זמינות לשאלות ותמיכה נוספת בין המפגשים'
    }
  ];

  return (
    <section id="about" className="py-20 bg-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-espresso mb-6">
            על התנועה
          </h2>
          <p className="text-xl text-espresso/80 max-w-3xl mx-auto leading-relaxed">
            השיטה שלנו פשוטה: <span className="text-rose font-medium">רגש → בהירות → צעד קטן → שיקוף קהילתי → חיזוק</span>.
            אנחנו מאמינות שכל שינוי אמיתי מתחיל בתנועה קטנה, בטוחה ומלווה.
          </p>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-espresso text-center mb-12">הערכים שלנו</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-blush rounded-2xl p-6 mb-4 group-hover:shadow-lg group-hover:bg-rose/10 transition-all duration-300">
                    <div className="bg-champagne/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-espresso" />
                    </div>
                    <h4 className="font-semibold text-espresso mb-2">{value.title}</h4>
                    <p className="text-sm text-espresso/70 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-espresso text-center mb-12">איך זה עובד</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-blush rounded-2xl p-6 h-full border border-champagne/20 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-rose mb-4">{step.number}</div>
                  <h4 className="font-semibold text-espresso mb-3">{step.title}</h4>
                  <p className="text-sm text-espresso/70 leading-relaxed">{step.description}</p>
                </div>
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -left-4 w-8 h-0.5 bg-champagne/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mentor card */}
        <div className="max-w-md mx-auto">
          <div className="bg-blush rounded-2xl p-6 border border-champagne/20 shadow-lg">
            <h4 className="font-semibold text-espresso mb-4 text-center">הכירו את המנטורית</h4>
            <div className="flex items-center space-x-reverse space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-rose/20 to-champagne/20 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-espresso">מ</span>
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-espresso">מאיה</h5>
                <ul className="text-sm text-espresso/70 space-y-1 mt-2">
                  <li>• מאמנת חיים מוסמכת</li>
                  <li>• ניסיון של 8+ שנים בליווי נשים</li>  
                  <li>• מתמחה בתהליכי שינוי עדינים</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;