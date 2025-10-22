import {useParams, Link} from 'react-router-dom';
import {ArrowLeft, Github} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import {useLanguage} from "@/contexts/LanguageContext.tsx";

type Item = { subtitle?: string; points: string[]; }
type Sections = {
    title: string;
    type: 'text' | 'list' | 'table',
    content?: string;
    items?: Item[];
    th?: string[];
    td?: string[][];
}
type ProjectData = {
    title: string;
    subtitle: string;
    description: string;
    githubUrl: string;
    demoVideo: string;
    demoThumbnail: string;
    technologies: string[];
    sections: Sections[];
}
const ProjectDetails = () => {
    const {projectId} = useParams();
    const {t} = useLanguage();

    const projectData: Record<string, ProjectData> = {
        tickefy: {
            title: t('projectDetails.tickefy.title'),
            subtitle: t('projectDetails.tickefy.subtitle'),
            description: t('projectDetails.tickefy.description'),
            githubUrl: t('projectDetails.tickefy.githubUrl'),
            demoVideo: t('projectDetails.tickefy.demoVideo'),
            demoThumbnail: t('projectDetails.tickefy.demoThumbnail'),
            technologies: t('projectDetails.tickefy.technologies'),
            sections: [
                {
                    title: t('projectDetails.tickefy.section0title'),
                    type: 'text',
                    content: t('projectDetails.tickefy.section0content'),
                },
                {
                    title: t('projectDetails.tickefy.section1title'),
                    type: 'list',
                    items: [
                        {
                            subtitle: t('projectDetails.tickefy.section1item0subtitle'),
                            points: [
                                t('projectDetails.tickefy.section1item0point0'),
                                t('projectDetails.tickefy.section1item0point1'),
                                t('projectDetails.tickefy.section1item0point2')
                            ]
                        },
                        {
                            subtitle: t('projectDetails.tickefy.section1item1subtitle'),
                            points: [
                                t('projectDetails.tickefy.section1item1point0'),
                                t('projectDetails.tickefy.section1item1point1'),
                                t('projectDetails.tickefy.section1item1point2'),
                            ]
                        },
                        {
                            subtitle: t('projectDetails.tickefy.section1item2subtitle'),
                            points: [
                                t('projectDetails.tickefy.section1item2point0'),
                                t('projectDetails.tickefy.section1item2point1'),
                                t('projectDetails.tickefy.section1item2point2'),
                                t('projectDetails.tickefy.section1item2point3'),
                                t('projectDetails.tickefy.section1item2point4'),
                            ]
                        },
                        {
                            subtitle: t('projectDetails.tickefy.section1item3subtitle'),
                            points: [
                                t('projectDetails.tickefy.section1item2point0'),
                                t('projectDetails.tickefy.section1item2point1')
                            ]
                        }
                    ]
                },
                {
                    title: t('projectDetails.tickefy.section2title'),
                    type: 'table',
                    th: [t('projectDetails.tickefy.section2th0'), t('projectDetails.tickefy.section2th1')],
                    td: [
                        [t('projectDetails.tickefy.section2td00'), t('projectDetails.tickefy.section2td01')],
                        [t('projectDetails.tickefy.section2td10'), t('projectDetails.tickefy.section2td11')],
                        [t('projectDetails.tickefy.section2td20'), t('projectDetails.tickefy.section2td21')],
                        [t('projectDetails.tickefy.section2td30'), t('projectDetails.tickefy.section2td31')],
                        [t('projectDetails.tickefy.section2td40'), t('projectDetails.tickefy.section2td41')],
                        [t('projectDetails.tickefy.section2td50'), t('projectDetails.tickefy.section2td51')]
                    ]
                },
                {
                    title: t('projectDetails.tickefy.section3title'),
                    type: 'text',
                    content: t('projectDetails.tickefy.section3content'),
                },
                {
                    title: t('projectDetails.tickefy.section4title'),
                    type: 'list',
                    items: [
                        {
                            subtitle: t('projectDetails.tickefy.section4item0subtitle'),
                            points: [
                                t('projectDetails.tickefy.section4item0point0'),
                                t('projectDetails.tickefy.section4item0point1'),
                                t('projectDetails.tickefy.section4item0point2'),
                                t('projectDetails.tickefy.section4item0point3'),
                                t('projectDetails.tickefy.section4item0point4'),
                            ]
                        }
                    ],
                },
                {
                    title: t('projectDetails.tickefy.section5title'),
                    type: 'table',
                    th: [t('projectDetails.tickefy.section5th0'), t('projectDetails.tickefy.section5th1')],
                    td: [
                        [t('projectDetails.tickefy.section5td00'), t('projectDetails.tickefy.section5td01')],
                        [t('projectDetails.tickefy.section5td10'), t('projectDetails.tickefy.section5td11')],
                        [t('projectDetails.tickefy.section5td20'), t('projectDetails.tickefy.section5td21')],
                        [t('projectDetails.tickefy.section5td30'), t('projectDetails.tickefy.section5td31')],
                        [t('projectDetails.tickefy.section5td40'), t('projectDetails.tickefy.section5td41')],
                        [t('projectDetails.tickefy.section5td50'), t('projectDetails.tickefy.section5td51')]
                    ]
                },
                {
                    title: t('projectDetails.tickefy.section6title'),
                    type: 'text',
                    content: t('projectDetails.tickefy.section6content'),
                }
            ]
        },
        UPFManagement: {
            title: t('projectDetails.UPFManagement.title'),
            subtitle: t('projectDetails.UPFManagement.subtitle'),
            description: t('projectDetails.UPFManagement.description'),
            githubUrl: t('projectDetails.UPFManagement.githubUrl'),
            demoVideo: t('projectDetails.UPFManagement.demoVideo'),
            demoThumbnail: t('projectDetails.UPFManagement.demoThumbnail'),
            technologies: t('projectDetails.UPFManagement.technologies'),
            sections: [
                {
                    title: t('projectDetails.UPFManagement.section0title'),
                    type: 'text',
                    content: t('projectDetails.UPFManagement.section0content'),
                },
                {
                    title: t('projectDetails.UPFManagement.section1title'),
                    type: 'list',
                    items: [
                        {
                            subtitle: t('projectDetails.UPFManagement.section1item0subtitle'),
                            points: [
                                t('projectDetails.UPFManagement.section1item0point0'),
                                t('projectDetails.UPFManagement.section1item0point1'),
                                t('projectDetails.UPFManagement.section1item0point2'),
                                t('projectDetails.UPFManagement.section1item0point3')
                            ]
                        },
                        {
                            subtitle: t('projectDetails.UPFManagement.section1item1subtitle'),
                            points: [
                                t('projectDetails.UPFManagement.section1item1point0'),
                                t('projectDetails.UPFManagement.section1item1point1'),
                                t('projectDetails.UPFManagement.section1item1point2'),
                            ]
                        },
                        {
                            subtitle: t('projectDetails.UPFManagement.section1item2subtitle'),
                            points: [
                                t('projectDetails.UPFManagement.section1item2point0'),
                                t('projectDetails.UPFManagement.section1item2point1'),
                                t('projectDetails.UPFManagement.section1item2point2')
                            ]
                        },
                        {
                            subtitle: t('projectDetails.UPFManagement.section1item3subtitle'),
                            points: [
                                t('projectDetails.UPFManagement.section1item3point0'),
                                t('projectDetails.UPFManagement.section1item3point1')
                            ]
                        },
                        {
                            subtitle: t('projectDetails.UPFManagement.section1item4subtitle'),
                            points: [
                                t('projectDetails.UPFManagement.section1item4point0'),
                                t('projectDetails.UPFManagement.section1item4point1')
                            ]
                        },
                        {
                            subtitle: t('projectDetails.UPFManagement.section1item5subtitle'),
                            points: [
                                t('projectDetails.UPFManagement.section1item5point0'),
                                t('projectDetails.UPFManagement.section1item5point1')
                            ]
                        }
                    ]
                },
                {
                    title: t('projectDetails.UPFManagement.section2title'),
                    type: 'table',
                    th: [t('projectDetails.UPFManagement.section2th0'), t('projectDetails.UPFManagement.section2th1')],
                    td: [
                        [t('projectDetails.UPFManagement.section2td00'), t('projectDetails.UPFManagement.section2td01')],
                        [t('projectDetails.UPFManagement.section2td10'), t('projectDetails.UPFManagement.section2td11')],
                        [t('projectDetails.UPFManagement.section2td20'), t('projectDetails.UPFManagement.section2td21')],
                        [t('projectDetails.UPFManagement.section2td30'), t('projectDetails.UPFManagement.section2td31')],
                        [t('projectDetails.UPFManagement.section2td40'), t('projectDetails.UPFManagement.section2td41')],
                        [t('projectDetails.UPFManagement.section2td50'), t('projectDetails.UPFManagement.section2td51')],
                        [t('projectDetails.UPFManagement.section2td60'), t('projectDetails.UPFManagement.section2td61')],
                        [t('projectDetails.UPFManagement.section2td70'), t('projectDetails.UPFManagement.section2td71')]
                    ]
                }
            ]
        }
    };

    const project = projectData[projectId || ''];

    if (!project) {
        return (
            <div className="min-h-screen bg-background">
                <Navigation/>
                <div className="container mx-auto px-6 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                        <Button asChild>
                            <Link to="/#projects" className="gap-2">
                                <ArrowLeft className="w-4 h-4"/>
                                Back to Projects
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black">
            <Navigation/>
            <div className="container mx-auto px-6 py-20">
                <div className="max-w-full ">
                    <Button asChild variant="ghost" className="mb-8 gap-2 text-white">
                        <Link to="/#projects">
                            <ArrowLeft className="w-4 h-4"/>
                            {t('projectDetails.returnTo')}
                        </Link>
                    </Button>

                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{project.title}</h1>
                        {project.subtitle && (
                            <p className="text-xl text-accent mb-4">{project.subtitle}</p>
                        )}
                        <p className="text-lg text-gray-200 leading-relaxed mb-6">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-6">
                            <Button asChild variant="outline" className="gap-2">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4"/>
                                    {t('projectDetails.view')}
                                </a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech: string, index: number) => (
                                <Badge key={index} variant="secondary" className="px-3 py-1.5">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {project.demoVideo !== undefined && (
                        <video className="w-full pb-8" controls poster={project.demoThumbnail}>
                            <source src={project.demoVideo} type="video/mp4"/>
                        </video>
                    )}

                    <div className="space-y-8">
                        {project.sections.map((section: Sections, index: number) => (
                            <div key={index} className="bg-card border rounded-lg p-8">
                                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                                {section.type === 'text' && section.content && (
                                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                        {section.content}
                                    </div>
                                )}
                                {section.type === 'list' && section.items && (
                                    <div className="space-y-6">
                                        {section.items.map((item: Item, idx: number) => (
                                            <div key={idx}>
                                                <h3 className="text-lg font-semibold mb-3">{item.subtitle}</h3>
                                                <ul className="space-y-2">
                                                    {item.points.map((point: string, pointIdx: number) => (
                                                        <li key={pointIdx} className="flex items-start gap-3">
                                                            <div
                                                                className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"/>
                                                            <span className="text-muted-foreground">{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {section.type === 'table' && section.th && section.td && (
                                    <div className="space-y-6">
                                        <table className="w-full">
                                            <thead>
                                            <tr>
                                                {section.th.map((th: string, idx: number) => (
                                                    <th key={'th-' + idx} className="border border-black p-1">{th}</th>
                                                ))}
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {section.td && section.td.map((row: string[], idx: number) => (
                                                <tr key={idx}>
                                                    {
                                                        row.map((td: string, idxTd: number) => (
                                                            <td className="border border-black text-center p-1"
                                                                key={'td-' + idx + '-' + idxTd}>{td}</td>
                                                        ))
                                                    }
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="py-8 text-center border-t border-border bg-purple-950">
                <p className="text-gray-200">
                    © 2025 Yasmine Znatni. Built with React & Tailwind CSS.
                </p>
            </footer>
        </div>
    );
};

export default ProjectDetails;
