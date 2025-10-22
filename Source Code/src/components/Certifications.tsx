import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Certifications = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      name: t('certifications.cert1Name'),
      issuer: t('certifications.cert1Issuer'),
      date: t('certifications.cert1Date'),
      link: t('certifications.cert1Link'),
    },
    {
      name: t('certifications.cert2Name'),
      issuer: t('certifications.cert2Issuer'),
      date: t('certifications.cert2Date'),
      link: t('certifications.cert2Link'),
    },
    {
      name: t('certifications.cert3Name'),
      issuer: t('certifications.cert3Issuer'),
      date: t('certifications.cert3Date'),
      link: t('certifications.cert3Link'),
    },
    {
      name: t('certifications.cert4Name'),
      issuer: t('certifications.cert4Issuer'),
      date: t('certifications.cert4Date'),
      link: t('certifications.cert4Link'),
    },
    {
      name: t('certifications.cert5Name'),
      issuer: t('certifications.cert5Issuer'),
      date: t('certifications.cert5Date'),
      link: t('certifications.cert5Link'),
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {t('certifications.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 hover:shadow-accent transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-accent rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                    <p className="text-muted-foreground mb-1">{cert.issuer}</p>
                    <Badge variant="secondary" className="mt-2 bg-gray-200/80">
                      {cert.date}
                    </Badge>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full gap-2 bg-gray-200/80"
                >
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('certifications.viewCertificate')}
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
