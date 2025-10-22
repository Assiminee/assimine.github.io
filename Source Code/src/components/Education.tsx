import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: t('education.degree1'),
      institution: t('education.institution1'),
      period: t('education.period1'),
      status: t('education.status1'),
      description: t('education.desc1'),
    },
    {
      degree: t('education.degree2'),
      institution: t('education.institution2'),
      period: t('education.period2'),
      status: t('education.status2'),
      description: t('education.desc2'),
    },
    {
      degree: t('education.degree3'),
      institution: t('education.institution3'),
      period: t('education.period3'),
      status: t('education.status3'),
      description: t('education.desc3'),
    },
    {
      degree: t('education.degree4'),
      institution: t('education.institution4'),
      period: t('education.period4'),
      status: t('education.status4'),
      description: t('education.desc4'),
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('education.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-accent transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-blue rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-muted-foreground font-medium mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {edu.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="inline-block">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        edu.status === t('education.status1')
                          ? 'bg-accent/10 text-accent'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
