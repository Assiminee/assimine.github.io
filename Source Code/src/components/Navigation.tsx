import {useState, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {useLanguage} from '@/contexts/LanguageContext';
import {Languages, Menu, X} from 'lucide-react';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {useNavigate} from "react-router-dom";

const sections = [
    {id: 'hero', key: 'home'},
    {id: 'about', key: 'about'},
    {id: 'experience', key: 'experience'},
    {id: 'education', key: 'education'},
    {id: 'skills', key: 'skills'},
    {id: 'projects', key: 'projects'},
    {id: 'certifications', key: 'certifications'},
    {id: 'contact', key: 'contact'},
];

const Navigation = () => {
    const {language, setLanguage, t} = useLanguage();
    const [activeSection, setActiveSection] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const {offsetTop, offsetHeight} = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigate = useNavigate();
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            });
        } else {
            navigate('/');
        }
        setIsOpen(false); // Close mobile menu after navigation
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${
                isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-xl font-bold bg-gradient-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                    >
                        YZ
                    </button>

                    <div className="hidden md:flex items-center gap-2">
                        {sections.map((section) => (
                            <Button
                                key={section.id}
                                variant="ghost"
                                size="sm"
                                onClick={() => scrollToSection(section.id)}
                                className={`relative transition-colors ${
                                    activeSection === section.id
                                        ? 'text-accent'
                                        : 'text-white'
                                }`}
                            >
                                {t(`nav.${section.key}`)}
                                {activeSection === section.id && (
                                    <span
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"/>
                                )}
                            </Button>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                            className="text-white hover:text-accent"
                        >
                            <Languages className="w-4 h-4 mr-2"/>
                            {language === 'en' ? 'FR' : 'EN'}
                        </Button>
                        <a
                            href="mailto:znatni.yasmine@gmail.com"
                        >
                            <Button variant="default" size="sm"
                                    className="bg-gradient-accent hover:opacity-90 transition-opacity">
                                {t('nav.getInTouch')}
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="sm" className="text-white">
                                    <Menu className="w-6 h-6"/>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] bg-background">
                                <div className="flex flex-col gap-4 mt-8">
                                    {sections.map((section) => (
                                        <Button
                                            key={section.id}
                                            variant="ghost"
                                            onClick={() => scrollToSection(section.id)}
                                            className={`justify-start text-lg ${
                                                activeSection === section.id
                                                    ? 'text-accent bg-accent/10'
                                                    : 'text-foreground'
                                            }`}
                                        >
                                            {t(`nav.${section.key}`)}
                                        </Button>
                                    ))}
                                    <Button
                                        variant="ghost"
                                        onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                                        className="justify-start text-lg"
                                    >
                                        <Languages className="w-5 h-5 mr-2"/>
                                        {language === 'en' ? 'Français' : 'English'}
                                    </Button>
                                    <a href="mailto:znatni.yasmine@gmail.com">
                                        <Button
                                            className="w-full bg-gradient-accent hover:opacity-90 transition-opacity">
                                            {t('nav.getInTouch')}
                                        </Button>
                                    </a>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
