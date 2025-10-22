import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'znatni.yasmine@gmail.com',
      href: 'mailto:znatni.yasmine@gmail.com',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+212 648 288 553',
      href: 'tel:+212648288553',
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: t('contact.locationValue'),
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Assiminee',
      color: 'hover:text-accent',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yasmine-znatni',
      color: 'hover:text-accent-blue',
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('contact.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          <Card className="p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.label}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </div>
              ))}
            </div>
          </Card>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-2 text-muted-foreground transition-colors ${link.color}`}
                  aria-label={link.label}
                >
                  <div className="w-12 h-12 border-2 border-current rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <link.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>

            <a href="mailto:znatni.yasmine@gmail.com">
              <Button
                size="lg"
                className="bg-gradient-accent hover:opacity-90 transition-opacity text-lg px-8 shadow-accent"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t('contact.sendEmail')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
