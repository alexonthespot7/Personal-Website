import '../styles/About.css';
import me from '../pictures/Me.jpg';

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SchoolIcon from '@mui/icons-material/School';
import { VscOrganization } from 'react-icons/vsc';
import { FiCheckCircle } from 'react-icons/fi';
import { IoLogoReact } from 'react-icons/io5';
import { DiJavascript1 } from 'react-icons/di';
import { SiSpring } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { SiPostgresql } from 'react-icons/si';
import { SiPython } from 'react-icons/si';


import { motion } from 'framer-motion';
import useMediaQuery from '../Hooks/useMediaQuery';

export default function About() {
    const matchesS = useMediaQuery("(min-width: 600px)");
    const matchesXS = useMediaQuery("(min-width: 500px)");
    const matchesXXS = useMediaQuery("(min-width: 350px)");

    const picture = matchesXS ?
        <svg height={250} width={300} viewBox="0 0 120 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="img3" patternUnits="userSpaceOnUse" width="120" height="100">
                    <image href={me} width="120" height="100" />
                </pattern>
            </defs>
            <polygon points="0 50 30 100 90 100 120 50 90 0 30 0" fill="url(#img3)" />
        </svg>
        :
        <svg height={200} width={240} viewBox="0 0 96 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="img3" patternUnits="userSpaceOnUse" width="96" height="80">
                    <image href={me} width="96" height="80" />
                </pattern>
            </defs>
            <polygon points="0 40 24 80 72 80 96 40 72 0 24 0" fill="url(#img3)" />
        </svg>

    const firstPolygon = matchesS ?
        <svg className='svg1'>
            <polygon fill='#04c2c9' points="0 50 30 100 90 100 120 50 90 0 30 0" />
        </svg> :
        <svg className='svg2'>
            <polygon fill='#04c2c9' points="0 40 24 80 72 80 96 40 72 0 24 0" />
        </svg>

    const secondPolygon =
        <svg className='svg2'>
            <polygon fill='#00a1a7' points="0 40 24 80 72 80 96 40 72 0 24 0" />
        </svg>;

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

    const variantsSkills = {
        offscreenSkill: {
            opacity: 0,
            rotateY: 240
        },
        onscreenSkill: {
            opacity: 1,
            rotateY: 360,
        }
    }

    const variantsDescription = {
        offscreenSkill: {
            opacity: 0
        },
        onscreenSkill: {
            opacity: 1
        }
    }

    const variantsMe = {
        offscreenMe: {
            opacity: 0,
            x: -300,

        },
        onscreenMe: {
            x: 0,
            opacity: 1,
        }
    }

    const variantsHard = {
        offscreenMe: {
            opacity: 0,
            x: 300
        },
        onscreenMe: {
            x: 0,
            opacity: 1,
        }
    }

    return (
        <div className='MainContainer'>
            <motion.div className='Header'
                initial='offscreen'
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.7 }}
            >
                <motion.div transition={{ ease: 'easeIn', type: 'spring', duration: 0.8, bounce: 0.4 }} variants={variantsHeader} className='About'>ABOUT</motion.div>
                <motion.div transition={{ ease: 'easeIn', type: 'spring', duration: 0.8, delay: 0.5, bounce: 0.4 }} variants={variantsHeader} className='Line'></motion.div>
            </motion.div>
            <motion.div
                className='SoftSkills'
                initial='offscreenSkill'
                whileInView='onscreenSkill'
                viewport={{ once: true, amount: 0.7 }}
            >
                <div className='SoftDouble'>
                    <div className={matchesS ? 'Skill' : 'SkillHard'}>
                        <motion.div
                            className='Shape'
                            variants={variantsSkills}
                            transition={{ bounce: 0.5, duration: 0.7, ease: 'easeOut' }}
                        >
                            <ElectricBoltIcon style={{ fontSize: matchesS ? '36pt' : '32pt', color: '#fff', position: 'absolute', margin: matchesS ? '25px auto' : '18px auto' }} />
                            {firstPolygon}
                        </motion.div>
                        <motion.div
                            className='TextDiv'
                            variants={variantsDescription}
                            transition={{ duration: 0.7 }}
                        >
                            <div className={matchesS ? 'Label' : 'LabelSkill'}>
                                Proactive
                            </div>
                            <div className='Description'>
                                I am always ready to make important decisions.
                            </div>
                        </motion.div>
                    </div>
                    <div className={matchesS ? 'Skill' : 'SkillHard'}>
                        <motion.div
                            className='Shape'
                            variants={variantsSkills}
                            transition={{ bounce: 0.5, duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                        >
                            <SchoolIcon style={{ fontSize: matchesS ? '36pt' : '32pt', color: '#fff', position: 'absolute', margin: matchesS ? '25px auto' : '18px auto' }} />
                            {firstPolygon}
                        </motion.div>
                        <motion.div
                            className='TextDiv'
                            variants={variantsDescription}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <div className={matchesS ? 'Label' : 'LabelSkill'}>
                                Quick Learner
                            </div>
                            <div className='Description'>
                                I like to learn and improve my skills. And I never stop.
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className='SoftDouble'>
                    <div className={matchesS ? 'Skill' : 'SkillHard'}>
                        <motion.div
                            className='Shape'
                            variants={variantsSkills}
                            transition={{ bounce: 0.5, duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                        >
                            <VscOrganization className={matchesS ? 'Icon' : 'IconHard'} />
                            {firstPolygon}
                        </motion.div>
                        <motion.div
                            className='TextDiv'
                            variants={variantsDescription}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <div className={matchesS ? 'Label' : 'LabelSkill'}>
                                Team Player
                            </div>
                            <div className='Description'>
                                Good communication skills within a team.
                            </div>
                        </motion.div>
                    </div>
                    <div className={matchesS ? 'Skill' : 'SkillHard'}>
                        <motion.div
                            className='Shape'
                            variants={variantsSkills}
                            transition={{ bounce: 0.5, duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                        >
                            <FiCheckCircle className={matchesS ? 'Icon' : 'IconHard'} />
                            {firstPolygon}
                        </motion.div>
                        <motion.div
                            className='TextDiv'
                            variants={variantsDescription}
                            transition={{ duration: 0.7, delay: 0.6 }}
                        >
                            <div className={matchesS ? 'Label' : 'LabelSkill'}>
                                Well-organized
                            </div>
                            <div className='Description'>
                                I always stay focused on my goals.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial='offscreenMe'
                whileInView='onscreenMe'
                viewport={{ once: true, amount: 0.4 }}
                className='HardSkills'
            >
                <motion.div className='Me' variants={variantsMe} transition={{ duration: 0.75 }}>
                    {picture}
                    <div className='Label'>
                        Who am I?
                    </div>
                    <div style={{ textAlign: 'center' }} className='Description'>
                        I am a second year Business IT student in Haaga-Helia with major in Software Development and <span style={{ fontWeight: 900, color: '#e31b6d' }}>GPA 5.0/5.0</span>. During the continuity of my studies I have successfully completed several front-end, back-end and full-stack projects.<span style={{ color: '#e31b6d', fontWeight: 900 }}> Currently </span> I am looking for an entry level software developer position.
                    </div>
                </motion.div>
                <motion.div
                    variants={variantsHard}
                    transition={{ duration: 0.75 }}
                    className='SkillList'
                >
                    <div className='LabelHard'>Hard Skills</div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <div className='Shape'>
                                <IoLogoReact className='IconHard' />
                                {secondPolygon}
                            </div>
                            <div className={matchesXXS ? 'TextDiv' : 'SmallTextDiv'}>
                                <div className='LabelSkill'>
                                    React
                                </div>
                            </div>
                        </div>
                        <div className='SkillHard'>
                            <div className='Shape'>
                                <DiJavascript1 className='IconHard' />
                                {secondPolygon}
                            </div>
                            <div className={matchesXXS ? 'TextDiv' : 'SmallTextDiv'}>
                                <div className='LabelSkill'>
                                    JavaScript
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='SkillHard'>
                            <div className='Shape'>
                                <SiSpring className='IconHard' />
                                {secondPolygon}
                            </div>
                            <div className={matchesXXS ? 'TextDiv' : 'SmallTextDiv'}>
                                <div className='LabelSkill'>
                                    Spring Boot
                                </div>
                            </div>
                        </div>
                        <div className='SkillHard'>
                            <div className='Shape'>
                                <DiJava style={{ margin: '14px auto' }} className='IconHard' />
                                {secondPolygon}
                            </div>
                            <div className={matchesXXS ? 'TextDiv' : 'SmallTextDiv'}>
                                <div className='LabelSkill'>
                                    Java
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='SkillHard'>
                            <div className='Shape'>
                                <SiPostgresql style={{ margin: '22px auto' }} className='IconHard' />
                                {secondPolygon}
                            </div>
                            <div className={matchesXXS ? 'TextDiv' : 'SmallTextDiv'}>
                                <div className='LabelSkill'>
                                    PostgreSQL
                                </div>
                            </div>
                        </div>
                        <div className='SkillHard'>
                            <div className='Shape'>
                                <SiPython className='IconHard' />
                                {secondPolygon}
                            </div>
                            <div className={matchesXXS ? 'TextDiv' : 'SmallTextDiv'}>
                                <div className='LabelSkill'>
                                    Python
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div >
    );
}