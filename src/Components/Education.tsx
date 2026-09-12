import '../styles/Education.css';

import { motion, Transition } from 'framer-motion';

interface Study {
    school: string;
    degree: string;
    period: string;
    details: string[];
    honors?: string;
    description: string;
    skills: string[];
}

const studies: Study[] = [
    {
        school: 'Haaga-Helia University of Applied Sciences',
        degree: 'Bachelor of Business Administration - BBA, Business Information Technology',
        period: 'Jan 2022 – Dec 2024',
        details: ['Major: Software Development', 'GPA: 4.88/5.0'],
        honors: 'Graduated with honors, recognized with the Lauri Fontell Scholarship for excellent academic performance in the program.',
        description: 'Gained hands-on, full-stack development experience with Java Spring Boot, React Native, React JS/TS, Flutter, and Node.js, alongside a solid foundation in software development principles. Worked on real-world projects in international Scrum teams and picked up core business knowledge along the way.',
        skills: ['Java Spring Boot', 'React Native', 'React JS/TS', 'Flutter', 'Node.js']
    }
];

function Education() {
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
        <div className='EducationContainer'>
            <motion.div className='Header'
                initial='offscreen'
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.7 }}
            >
                <motion.div transition={{ ease: 'easeIn', type: 'spring', duration: 0.8, bounce: 0.4 } as Transition} variants={variantsHeader} className='About'>EDUCATION</motion.div>
                <motion.div transition={{ ease: 'easeIn', type: 'spring', duration: 0.8, delay: 0.5, bounce: 0.4 } as Transition} variants={variantsHeader} className='Line'></motion.div>
            </motion.div>
            <div className='Timeline'>
                {studies.map((study, index) => (
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
                            <div className='SchoolName'>{study.school}</div>
                            <div className='DegreeMeta'>{study.degree}</div>
                            <div className='StudyPeriod'>{study.period} · {study.details.join(' · ')}</div>
                            {study.honors && <div className='StudyHonors'>{study.honors}</div>}
                            <div className='StudyDescription'>{study.description}</div>
                            <div className='JobSkills'>
                                {study.skills.map((skill, skillIndex) => (
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

export default Education;
