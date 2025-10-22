import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Users, Brain, Server, ExternalLink, FileText, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.project1.title'),
      award: t('projects.project1.award'),
      university: t('projects.project1.university'),
      description: t('projects.project1.description'),
      achievements: t('projects.project1.achievements'),
      technologies: [
        'Spring Boot',
        'MySQL',
        'React',
        'Android',
        'Python',
        'FastAPI',
        'Docker',
        'MTCNN',
        'FAISS',
      ],
      highlights: [
        {
          icon: Award,
          label: t('projects.project1.highlight1'),
        },
        {
          icon: Users,
          label: t('projects.project1.highlight2'),
        },
        {
          icon: Brain,
          label: t('projects.project1.highlight3'),
        },
        {
          icon: Server,
          label: t('projects.project1.highlight4'),
        },
      ],
      githubUrl: 'https://github.com/Assiminee/Tickefy',
      detailsPath: '/projects/tickefy',
    },
    {
      title: t('projects.project2.title'),
      university: t('projects.project2.university'),
      description: t('projects.project2.description'),
      achievements: t('projects.project2.achievements'),
      technologies: [
        'Spring Boot',
        'Spring Security',
        'MySQL',
        'JavaScript',
        'JQuery',
        'Thymeleaf',
        'Tailwind CSS'
      ],
      githubUrl: 'https://github.com/Assiminee/cahier_de_textes',
      detailsPath: '/projects/UPFManagement',
    },
    {
      title: t('projects.project3.title'),
      university: t('projects.project3.university'),
      description: t('projects.project3.description'),
      achievements: t('projects.project3.achievements'),
      technologies: [
        'C#',
        'ASP.NET Core',
        'ASP.NET Core Identity',
        'Angular',
        'Tailwind',
        'JWT',
      ],
      role: t('projects.project3.role'),
      githubUrl: 'https://github.com/Assiminee/UPFCONF',
    },
    {
      title: t('projects.project4.title'),
      subtitle: t('projects.project4.subtitle'),
      university: t('projects.project4.university'),
      description: t('projects.project4.description'),
      achievements: t('projects.project4.achievements'),
      technologies: [
        'Node.js',
        'Express.js',
        'MySQL',
        'TypeORM',
        'React',
        'RESTful API',
      ],
      githubUrl: 'https://github.com/Assiminee/PawSitters'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('projects.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground">
              {t('projects.intro')}{' '}
              <a
                href="https://github.com/Assiminee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline inline-flex items-center gap-1"
              >
                {t('projects.myGithub')} <ExternalLink className="w-4 h-4" />
              </a>
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`p-8 hover:shadow-accent transition-all duration-300 ${
                  project.award ? 'border-2 border-accent/20' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-accent-blue font-semibold mb-2">{project.subtitle}</p>
                    )}
                    {project.award && (
                      <>
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-5 h-5 text-accent" />
                          <span className="text-accent font-semibold">{project.award}</span>
                        </div>
                      </>
                    )}
                    {project.university && (
                        <p className="font-semibold mb-2 mt-5">{project.university}</p>
                    )}
                    {project.role && (
                      <p className="text-sm text-muted-foreground mt-2">
                        <span className="font-semibold">Role:</span> {project.role}
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {project.highlights && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {project.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 bg-accent/5 rounded-lg"
                      >
                        <highlight.icon className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium">{highlight.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {project.achievements && (
                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-lg">{t('projects.keyAchievements')}</h4>
                    {project.achievements.map((achievement: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <p className="text-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-4">{t('projects.technologiesUsed')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="px-4 py-2 bg-gradient-accent text-white hover:opacity-90 transition-opacity"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="gap-2"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      {t('projects.viewGithub')}
                    </a>
                  </Button>
                  {project.detailsPath && (
                    <Button
                      asChild
                      className="gap-2 bg-gradient-accent text-white hover:opacity-90"
                    >
                      <Link to={project.detailsPath}>
                        <FileText className="w-4 h-4" />
                        {t('projects.viewDetails')}
                      </Link>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
