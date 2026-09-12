import '../styles/WorkExperience.css';

import { motion, Transition } from 'framer-motion';

interface Job {
    role: string;
    company: string;
    period: string;
    location: string;
    type?: string;
    description: string;
    skills: string[];
}

const jobs: Job[] = [
    {
        role: 'Software Engineer',
        company: 'Sievo',
        period: 'May 2024 – Present',
        location: 'Helsinki, Finland',
        type: 'Full-time · Hybrid',
        description: "Full-stack engineer on Sievo's Materials Forecasting and Market Benchmarking (M&M) solutions, building tools that help customers predict material costs and benchmark pricing for strategic planning. Build features end-to-end, from Figma design to production, using C#, .NET and SQL on the backend and React and TypeScript on the frontend. Ship on Microsoft Azure, including Cosmos DB, Durable Functions, Container Apps and Azure DevOps, with end-to-end test coverage via Playwright. Adopt AI-native development practices, including Claude Code, to accelerate delivery and improve code quality.",
        skills: ['React.js', 'TypeScript', 'C# / .NET', 'Azure', 'Playwright']
    },
    {
        role: 'Temporary Customer Service Representative',
        company: 'Nordic Business Forum',
        period: 'Sep 2023',
        location: 'Helsinki, Finland',
        type: 'Contract · On-site',
        description: "Handled event check-in, welcoming and checking in guests. Assisted attendees in the networking area as part of roaming customer service, and helped out in the cloakroom towards the event's end.",
        skills: ['Communication', 'Teamwork']
    },
    {
        role: 'Mathematics Tutor',
        company: 'LLC "PARTA"',
        period: 'Sep 2019 – Jun 2020',
        location: 'Kazan, Tatarstan, Russia',
        type: 'Part-time · Remote',
        description: 'Provided personalized support to school students in their mathematical studies, reviewing homework and offering constructive feedback, and using varied teaching strategies to help students grasp complex concepts.',
        skills: ['Communication', 'Maths']
    }
];

function WorkExperience() {
    const variantsHeader = {
        offscreen: {
            opacity: 0,
            x: -100
        },
        onscreen: {
            x: 0,
            opacity: 1,
        }
    }

    const variantsEntry = {
        offscreen: {
            opacity: 0,
            y: 60
        },
        onscreen: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <div className='ExperienceContainer'>
            <motion.div className='Header'
                initial='offscreen'
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.7 }}
            >
                <motion.div transition={{ ease: 'easeIn', type: 'spring', duration: 0.8, bounce: 0.4 } as Transition} variants={variantsHeader} className='About'>EXPERIENCE</motion.div>
                <motion.div transition={{ ease: 'easeIn', type: 'spring', duration: 0.8, delay: 0.5, bounce: 0.4 } as Transition} variants={variantsHeader} className='Line'></motion.div>
            </motion.div>
            <div className='Timeline'>
                {jobs.map((job, index) => (
                    <motion.div
                        key={index}
                        className='TimelineItem'
                        initial='offscreen'
                        whileInView='onscreen'
                        viewport={{ once: true, amount: 0.3 }}
                        variants={variantsEntry}
                        transition={{ duration: 0.6 }}
                    >
                        <div className='TimelineDot' />
                        <div className='TimelineContent'>
                            <div className='JobRole'>{job.role}</div>
                            <div className='JobMeta'>{job.company} · {job.period}{job.type ? ` · ${job.type}` : ''}</div>
                            <div className='JobLocation'>{job.location}</div>
                            <div className='JobDescription'>{job.description}</div>
                            <div className='JobSkills'>
                                {job.skills.map((skill, skillIndex) => (
                                    <span className='SkillTag' key={skillIndex}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default WorkExperience;
