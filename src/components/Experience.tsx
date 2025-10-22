import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      role: t('experience.role1'),
      company: t('experience.company1'),
      period: t('experience.period1'),
      description: t('experience.desc1'),
      achievements: t('experience.achievements1'),
      technologies: ['Spring Boot', 'Spring Security', 'Spring Data MongoDB', 'Angular', 'Tailwind', 'MongoDB', 'JWT'],
      img: "/huawei-technologies-logo.jpg",
      imgClassName: 'w-8 h-5'
    },
    {
      role: t('experience.role2'),
      company: t('experience.company2'),
      period: t('experience.period2'),
      description: t('experience.desc2'),
      achievements: t('experience.achievements2'),
      technologies: ['React', 'TypeScript', 'MongoDB', 'Node.js', 'Tailwind CSS', 'JWT', 'Figma'],
      img: "/kwiklin-logo.png",
      imgClassName: 'w-8 h-8'
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {t('experience.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-accent transition-all duration-300 border-l-4 border-l-accent"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <img src={exp.img} alt="Huawei logo" className={exp.imgClassName}/>
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3 mb-6">
                  {exp.achievements.map((achievement: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="text-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
