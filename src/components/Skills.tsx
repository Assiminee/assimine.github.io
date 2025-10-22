import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Wrench, Palette, Database, Shield, TestTube, Server } from 'lucide-react';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.backend'),
      icon: Server,
      skills: ['Java', 'JEE', 'Spring Boot', 'Python', 'Flask', 'FastAPI', 'Node.js', 'Express.js', 'PHP', 'C/C++', 'ASP.NET'],
    },
    {
      title: t('skills.frontend'),
      icon: Palette,
      skills: ['Angular', 'React', 'JS/HTML/CSS', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: t('skills.database'),
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Oracle', 'SQL Server'],
    },
    {
      title: t('skills.devops'),
      icon: Shield,
      skills: ['Docker', 'JWT', 'Spring Security', 'ASP.NET Core Identity'],
    },
    {
      title: t('skills.testing'),
      icon: TestTube,
      skills: ['JUnit', 'Mocha', 'Jest', 'Unittest'],
    },
    {
      title: t('skills.bigdata'),
      icon: Database,
      skills: ['Kafka', 'Hadoop', 'Pig', 'HBase', 'Spark'],
    },
    {
      title: t('skills.other'),
      icon: Wrench,
      skills: ['Git/Github', 'Figma', 'Trello/Jira'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {t('skills.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-accent transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-blue rounded-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="px-3 py-1 bg-gray-200/80">
                      {skill}
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

export default Skills;
