import React, { useState } from 'react';
import { Sparkles, Calendar, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    goal: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: '', email: '', phone: '', goal: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blush/50 to-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-reverse space-x-2 bg-rose/10 px-4 py-2 rounded-full text-sm font-medium text-espresso mb-6">
              <Sparkles className="w-4 h-4 text-rose" />
              <span>בואי נדליק ניצוץ</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-espresso mb-6">
              נצא יחד לתנועה
            </h2>
            
            <p className="text-xl text-espresso/80 max-w-2xl mx-auto leading-relaxed">
              השאירי פרטים לשיחת התאמה קצרה — ונצא יחד לתנועה קטנה-אמיצה שתשנה הכל
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-ivory rounded-2xl p-8 shadow-lg border border-champagne/20">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-espresso mb-2">
                      שם מלא *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-champagne/30 rounded-lg focus:ring-2 focus:ring-rose focus:border-rose transition-colors duration-300 bg-ivory text-espresso"
                      placeholder="איך קוראים לך?"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-espresso mb-2">
                      אימייל *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-champagne/30 rounded-lg focus:ring-2 focus:ring-rose focus:border-rose transition-colors duration-300 bg-ivory text-espresso"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-espresso mb-2">
                      טלפון *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-champagne/30 rounded-lg focus:ring-2 focus:ring-rose focus:border-rose transition-colors duration-300 bg-ivory text-espresso"
                      placeholder="050-1234567"
                    />
                  </div>

                  <div>
                    <label htmlFor="goal" className="block text-sm font-medium text-espresso mb-2">
                      מה היעד שלך לשינוי? *
                    </label>
                    <textarea
                      id="goal"
                      name="goal"
                      required
                      rows={4}
                      value={formData.goal}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-champagne/30 rounded-lg focus:ring-2 focus:ring-rose focus:border-rose transition-colors duration-300 bg-ivory text-espresso resize-none"
                      placeholder="ספרי לנו בקצרה איפה את רוצה להיות בעוד שלושה חודשים..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-reverse space-x-2 group"
                  >
                    <Send className="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span>שלחי פרטים</span>
                  </button>

                  <p className="text-xs text-espresso/60 text-center">
                    בשליחת הטופס את מסכימה ל
                    <a href="/privacy" className="text-rose hover:underline">מדיניות הפרטיות</a>
                    {' '}שלנו
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-rose mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-espresso mb-2">תודה!</h3>
                  <p className="text-espresso/70">
                    קיבלנו את הפרטים שלך ונחזור אליך בקרוב לתיאום שיחת ההיכרות
                  </p>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="text-center lg:text-right">
                <h3 className="text-2xl font-bold text-espresso mb-4">
                  מעדיפה לשוחח ישירות?
                </h3>
                <p className="text-espresso/70 mb-6">
                  אין בעיה! יש לנו כמה אפשרויות מהירות יותר
                </p>
              </div>

              {/* Quick CTA Buttons */}
              <div className="space-y-4">
                <a
                  href="https://calendly.com/boerb-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary flex items-center justify-center space-x-reverse space-x-3 group"
                >
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>קבעי שיחה עכשיו (15 דק׳)</span>
                </a>
                
                <a
                  href="https://wa.me/972501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-secondary flex items-center justify-center space-x-reverse space-x-3 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>וואטסאפ ישירות</span>
                </a>
              </div>

              {/* Additional info */}
              <div className="bg-blush rounded-xl p-6 border border-champagne/20">
                <h4 className="font-semibold text-espresso mb-3">מה קורה אחרי השיחה?</h4>
                <ul className="text-sm text-espresso/70 space-y-2">
                  <li>• נכיר ונבין מה מתאים לך</li>
                  <li>• תקבלי המלצה אישית למסלול</li>
                  <li>• תוכלי להחליט בלי לחץ</li>
                  <li>• תהיי מוזמנת למפגש היכרות הבא</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;