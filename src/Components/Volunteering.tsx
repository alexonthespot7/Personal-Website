import '../styles/Volunteering.css';

import { motion, Transition } from 'framer-motion';

interface VolunteerRole {
    role: string;
    organization: string;
    period: string;
    cause: string;
    description: string;
}

const roles: VolunteerRole[] = [
    {
        role: 'Volunteer',
        organization: 'Tuska Festival',
        period: 'Jun 2026',
        cause: 'Arts and Culture',
        description: 'Volunteered at Tuska Festival 2026 as part of the Recycling Team, helping maintain cleanliness across the festival area and supporting waste management operations. Completed two days of volunteering and worked closely with other volunteers and festival staff.'
    },
    {
        role: 'Volunteer',
        organization: 'Flow Festival Oy (Ltd)',
        period: 'Aug 2025',
        cause: 'Arts and Culture',
        description: "Supported Flow Festival's sustainability operations by helping maintain venue cleanliness, handling waste collection, and ensuring waste was sorted according to the festival's environmental guidelines. Worked as part of the volunteer team to keep the event area safe, clean, and functional for visitors."
    }
];

function Volunteering() {
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
        <div className='VolunteeringContainer'>
            <motion.div className='Header'
                initial='offscreen'
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.7 }}
            >
                <motion.div transition={{ ease: 'easeIn', type: 'spring', duration: 0.8, bounce: 0.4 } as Transition} variants={variantsHeader} className='About'>VOLUNTEERING</motion.div>
                <motion.div transition={{ ease: 'easeIn', type: 'spring', duration: 0.8, delay: 0.5, bounce: 0.4 } as Transition} variants={variantsHeader} className='Line'></motion.div>
            </motion.div>
            <div className='Timeline'>
                {roles.map((entry, index) => (
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
                            <div className='VolunteerRole'>{entry.role}</div>
                            <div className='VolunteerMeta'>{entry.organization} · {entry.period}</div>
                            <div className='VolunteerCause'>{entry.cause}</div>
                            <div className='VolunteerDescription'>{entry.description}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Volunteering;
