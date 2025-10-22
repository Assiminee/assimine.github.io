import { Card } from '@/components/ui/card';
import { Code2, Database, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      title: t('about.highlight1Title'),
      description: t('about.highlight1Desc'),
    },
    {
      icon: Database,
      title: t('about.highlight2Title'),
      description: t('about.highlight2Desc'),
    },
    {
      icon: Shield,
      title: t('about.highlight3Title'),
      description: t('about.highlight3Desc'),
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <Card className="p-6">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.intro1')}{' '}
                <a 
                  href="https://www.upf.ac.ma/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {t('about.upf')}
                </a>
                {t('about.intro2')}{' '}
                <a 
                  href="https://www.alxafrica.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {t('about.alx')}
                </a>
                {t('about.intro3')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.intro4')}{' '}
                <a 
                  href="https://www.linkedin.com/company/huaweiena/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {t('about.huawei')}
                </a>
                {t('about.intro5')}{' '}
                <a 
                  href="https://www.kwiklin.com/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {t('about.kwiklin')}
                </a>
                {t('about.intro6')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.intro7')}
              </p>
            </Card>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-6 ">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-accent rounded-lg">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
