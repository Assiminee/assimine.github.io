import {Button} from '@/components/ui/button';
import {ArrowDown, Github, Linkedin, Globe} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section id="hero" className="min-h-screen flex justify-center relative overflow-hidden bg-black">

            <div className="container flex z-10 max-w-full my-auto h-full items-center justify-center lg:justify-evenly bg-black px-6 py-12 flex-col lg:flex-row gap-8">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                        {t('hero.greeting')}{' '}
                        <span className="bg-gradient-accent bg-clip-text text-transparent">
                          {t('hero.name')}
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
                        {t('hero.tagline')}
                    </p>

                    <div className="mb-6 w-full">
                        <span className="inline-block px-3 sm:px-4 py-2 bg-accent/30 text-accent rounded-full text-xs sm:text-sm font-medium text-center max-w-full">
                          {t('hero.availability')}
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                        <Button
                            onClick={() => scrollToSection('contact')}
                            size="lg"
                            className="bg-gradient-accent hover:opacity-90 transition-opacity text-base sm:text-lg px-6 sm:px-8 shadow-accent"
                        >
                            {t('hero.cta1')}
                        </Button>
                        <Button
                            onClick={() => scrollToSection('projects')}
                            size="lg"
                            variant="outline"
                            className="text-base sm:text-lg px-6 sm:px-8 border-2 hover:border-accent hover:text-white"
                        >
                            {t('hero.cta2')}
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-base sm:text-lg px-6 sm:px-8 border-2 hover:border-accent hover:text-white"
                        >
                            <a href="/Znatni_Yasmine_CV_FR.pdf" download="Znatni_Yasmine_CV_FR.pdf">
                                <button>{t('hero.downloadCV')}</button>
                            </a>
                        </Button>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-6">
                        <a
                            href="https://github.com/Assiminee"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-colors"
                        >
                            <Github className="w-6 h-6"/>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yasmine-znatni"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent-blue transition-colors"
                        >
                            <Linkedin className="w-6 h-6"/>
                        </a>
                    </div>
                </div>
                
                <div className="w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96 flex-shrink-0">
                    <img src="/Yasmine.jpg" alt="Yasmine Znatni" className="rounded-3xl w-full h-auto object-cover"/>
                </div>

                <button
                    onClick={() => scrollToSection('about')}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors animate-bounce hidden lg:block"
                >
                    <ArrowDown className="w-6 h-6"/>
                </button>
            </div>
        </section>
    );
};

export default Hero;
