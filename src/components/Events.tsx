import React from 'react';
import { Calendar, MapPin, Clock, Users, ArrowLeft } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'מפגש היכרות - אש קטנה',
      date: '2025-02-15',
      time: '19:00-20:30',
      location: 'אונליין (Zoom)',
      description: 'מפגש חינם להכרת השיטה והקהילה',
      price: 'חינם',
      registrationUrl: 'https://calendly.com/boerb-intro-feb',
      type: 'הכרות'
    },
    {
      id: 2, 
      title: 'תחילת קוהורט חדש - אש בוערת',
      date: '2025-03-01',
      time: '19:30-21:00',
      location: 'תל אביב + אונליין',
      description: 'פתיחת מחזור חדש של 8 שבועות',
      price: '₪2,400',
      registrationUrl: 'https://calendly.com/boerb-cohort-march',
      type: 'תכנית'
    },
    {
      id: 3,
      title: 'סדנת "צעדים קטנים, שינויים גדולים"',
      date: '2025-03-20',
      time: '10:00-13:00',
      location: 'הרצליה',
      description: 'סדנת העמקה למי שכבר מכירה את השיטה',
      price: '₪180',
      registrationUrl: 'https://calendly.com/boerb-workshop-march',
      type: 'סדנה'
    }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'מעגל שיחה קהילתי',
      description: 'נשים יושבות במעגל ומשתפות',
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'כתיבה רפלקטיבית',
      description: 'רגעי התבוננות אישית',
      imageUrl: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'הליכת הכרות בחוץ',
      description: 'שילוב של תנועה פיזית ורגשית',
      imageUrl: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
    },
    {
      id: 4,
      title: 'מפגש Buddy',
      description: 'שיחות תמיכה בין השותפות',
      imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
    },
    {
      id: 5,
      title: 'סדנת חזון אישי',
      description: 'בניית תכנית אישית לשינוי',
      imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
    },
    {
      id: 6,
      title: 'חגיגת סיום קוהורט',
      description: 'סיכום התהליך והישגים',
      imageUrl: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('he-IL', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="events" className="py-20 bg-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Events Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-espresso mb-6">
              אירועים קרובים
            </h2>
            <p className="text-xl text-espresso/80 max-w-2xl mx-auto leading-relaxed">
              הצטרפי לאירועים שלנו והכירי את הקהילה והשיטה מקרוב
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <article 
                key={event.id}
                className="bg-blush rounded-2xl p-6 border border-champagne/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]"
                itemScope 
                itemType="https://schema.org/Event"
              >
                <div className="mb-4">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                    event.type === 'הכרות' ? 'bg-rose/20 text-rose' :
                    event.type === 'תכנית' ? 'bg-champagne/20 text-espresso' :
                    'bg-sageGrey/20 text-sageGrey'
                  }`}>
                    {event.type}
                  </div>
                  
                  <h3 className="text-xl font-bold text-espresso mb-2" itemProp="name">
                    {event.title}
                  </h3>
                  
                  <p className="text-espresso/70 text-sm mb-4" itemProp="description">
                    {event.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-reverse space-x-3 text-sm text-espresso/70">
                    <Calendar className="w-4 h-4 text-champagne" />
                    <span itemProp="startDate" content={event.date}>
                      {formatDate(event.date)}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-reverse space-x-3 text-sm text-espresso/70">
                    <Clock className="w-4 h-4 text-champagne" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-reverse space-x-3 text-sm text-espresso/70">
                    <MapPin className="w-4 h-4 text-champagne" />
                    <span itemProp="location">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-reverse space-x-3 text-sm">
                    <Users className="w-4 h-4 text-rose" />
                    <span className="font-medium text-rose">{event.price}</span>
                  </div>
                </div>

                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center flex items-center justify-center space-x-reverse space-x-2 group"
                  itemProp="url"
                >
                  <span>להירשם</span>
                  <ArrowLeft className="w-4 h-4 group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                {/* Schema.org structured data */}
                <meta itemProp="startDate" content={`${event.date}T${event.time.split('-')[0]}:00`} />
                <meta itemProp="endDate" content={`${event.date}T${event.time.split('-')[1]}:00`} />
              </article>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-espresso mb-6">
              מה קורה במפגשים
            </h2>
            <p className="text-xl text-espresso/80 max-w-2xl mx-auto leading-relaxed">
              הציצו על התהליכים והחוויות שמחכים לכן בקהילה
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                className="group relative bg-gradient-to-br from-blush to-ivory rounded-2xl aspect-square overflow-hidden border border-champagne/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                {/* Real images */}
                <img 
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay with content */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent flex items-end">
                  <div className="p-6 text-ivory">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-ivory/90">{item.description}</p>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-rose/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;