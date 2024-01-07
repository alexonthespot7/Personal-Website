import book1 from '../pictures/bookstore/Bookstore1.jpg';
import book2 from '../pictures/bookstore/Bookstore2.jpg';
import book3 from '../pictures/bookstore/Bookstore3.jpg';
import book4 from '../pictures/bookstore/Bookstore4.jpg';
import book5 from '../pictures/bookstore/Bookstore5.jpg';
import book6 from '../pictures/bookstore/Bookstore6.jpg';
import book7 from '../pictures/bookstore/Bookstore7.jpg';
import book8 from '../pictures/bookstore/Bookstore8.jpg';
import bookMain from '../pictures/bookstore/BookstoreMain.jpg';

import calc1 from '../pictures/calculator/calculator1.jpg';
import calc2 from '../pictures/calculator/calculator2.jpg';
import calcMain from '../pictures/calculator/calculatorMain.jpg';

import pt1 from '../pictures/personaltrainer/personalTr1.jpg';
import pt2 from '../pictures/personaltrainer/personalTr2.jpg';
import pt3 from '../pictures/personaltrainer/personalTr3.jpg';
import pt4 from '../pictures/personaltrainer/personalTr4.jpg';

import ttt1 from '../pictures/tictactoe/tictactoe1.jpg';
import ttt2 from '../pictures/tictactoe/tictactoe2.jpg';
import ttt3 from '../pictures/tictactoe/tictactoe3.jpg';
import ttt4 from '../pictures/tictactoe/tictactoe4.jpg';
import ttt5 from '../pictures/tictactoe/tictactoe5.jpg';
import tttMain from '../pictures/tictactoe/tictactoeMain.jpg';

import tourn1 from '../pictures/tournamentapp/tournament1.jpg';
import tourn2 from '../pictures/tournamentapp/tournament2.jpg';
import tourn3 from '../pictures/tournamentapp/tournament3.jpg';
import tourn4 from '../pictures/tournamentapp/tournament4.jpg';
import tourn5 from '../pictures/tournamentapp/tournament5.jpg';
import tourn6 from '../pictures/tournamentapp/tournament6.jpg';
import tourn7 from '../pictures/tournamentapp/tournament7.jpg';
import tourn8 from '../pictures/tournamentapp/tournament8.jpg';


import idMain from '../pictures/idragons/idMain.jpg';
import id1 from '../pictures/idragons/id1.jpg';
import id2 from '../pictures/idragons/id2.jpg';
import id3 from '../pictures/idragons/id3.jpg';
import id4 from '../pictures/idragons/id4.jpg';

import quizMain from '../pictures/quizhacker/QuizMain.jpg';

import raceMain from '../pictures/racechallenge/raceMain.png';

import '../styles/Portfolio.css';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from '@mui/material';
import useMediaQuery from '../Hooks/useMediaQuery';
import ProjectDialog from './ProjectDialog';

const projects = [
    {
        name: 'Book Store',
        info: 'Full-stack project made with React.js, Java Spring, PostgreSQL, Google Firebase.',
        description: 'The Book Store project with nice black and white design. It provides a diverse range of functionalities catering to book browsing, selection, and ordering, addressing the needs of both customers and administrators.',
        category: 'Full-stack',
        stack: 'React.js / Java Spring / PostgreSQL / Google Firebase',
        github: {
            frontend: 'https://github.com/alexonthespot7/bookstore_frontend',
            backend: 'https://github.com/alexonthespot7/bookstore_backend'
        },
        demo: 'https://bookstore-axos.netlify.app/',
        pictures: [book1, book2, book3, book4, book5, book6, book7, book8],
        main: bookMain
    },
    {
        name: 'QuizHacker',
        info: "Mobile application project made as React Native expo project.",
        description: "The Quizzes mobile application is built using React Native, with a backend powered by Java Spring. The Quizzes app allows users to create and take quizzes on various topics.",
        category: 'Mobile',
        stack: 'React Native / Java Spring / PostgreSQL / Google Firebase',
        github: {
            frontend: 'https://github.com/alexonthespot7/QuizHackerMobile',
            backend: 'https://github.com/alexonthespot7/QuizHackerBack'
        },
        demo: 'https://github.com/alexonthespot7/QuizHackerMobile/assets/90186057/41948745-502c-432a-b2c3-779b263eaf20',
        pictures: [quizMain],
        main: quizMain
    },
    {
        name: 'Calculator',
        info: 'Front-end project made with React.js.',
        description: 'Web application is able to conduct basic calculator operations and have two themes: light (windows calculator design) and dark (apple calculator design).',
        category: 'Front-end',
        stack: 'React.js',
        github: {
            frontend: 'https://github.com/alexonthespot7/best-calculatorX',
            backend: '',
        },
        demo: 'https://calculator-alex7.netlify.app',
        pictures: [calc1, calc2],
        main: calcMain
    },
    {
        name: 'Imagine Dragons Fan Page',
        info: 'Vanilla Front-end HTML and CSS project.',
        description: 'School project. Imagine Dragons fan website with tracklists of their albums and several music videos. Each album page styled as the album cover.',
        category: 'Front-end',
        stack: 'HTML / CSS',
        github: {
            frontend: 'https://github.com/alexonthespot7/imagine_dragons_fan_page.github.io',
            backend: ''
        },
        demo: 'https://alexonthespot7.github.io/imagine_dragons_fan_page.github.io/index.html',
        pictures: [id1, id2, id3, id4],
        main: idMain
    },
    {
        name: 'Tic-tac-toe',
        info: 'Full-stack project made with React.js and Java Spring.',
        description: 'Application has two game modes: one is to play against your friend on the same device (PvP) and the other one is to play against bot if you don\'t have your friend with you. Bot is written with the implementation of MiniMax algorithm and has 3 difficulty levels. The back-end of the project is deployed as dockerfile.',
        category: 'Full-stack',
        stack: 'React.js / Java Spring / PostgreSQL / Docker',
        github: {
            frontend: 'https://github.com/alexonthespot7/tictactoe-frontend',
            backend: 'https://github.com/alexonthespot7/tictactoe-backend'
        },
        demo: 'https://tic-tac-toe2024.netlify.app/',
        pictures: [ttt1, ttt2, ttt3, ttt4, ttt5],
        main: tttMain
    },
    {
        name: 'Tournament App',
        info: 'Full-stack project made with React.js and Java Spring.',
        description: 'This application serves as a comprehensive tournament management system. Seamlessly designed for user interaction, it offers a range of functionalities to cater to both tournament participants and administrators.',
        category: 'Full-stack',
        stack: 'React.js / Java Spring / PostgreSQL / Docker',
        github: {
            frontend: 'https://github.com/alexonthespot7/Tournament_front-end',
            backend: 'https://github.com/alexonthespot7/Tournament_back-end'
        },
        demo: 'https://tournament-axos.netlify.app',
        pictures: [tourn2, tourn3, tourn4, tourn5, tourn6, tourn7, tourn8],
        main: tourn1
    },
    {
        name: 'Personal Trainer',
        info: 'Front-end project made with React.js.',
        description: 'School project that fetches data about users and their trainings from server and displays it in a nice way with statistics, calendar, trainings and personal pages.',
        category: 'Front-end',
        stack: 'React.js',
        github: {
            frontend: 'https://github.com/alexonthespot7/personalTrainer',
            backend: ''
        },
        demo: 'https://personal-trainer-alex.netlify.app/',
        pictures: [pt1, pt2, pt3, pt4],
        main: pt4
    },
    {
        name: 'HEG Race Challenge',
        info: 'Mobile project made with Flutter',
        description: 'This was a school project in collaboration with swiss HES-SO Valais/Wallis University students. The goal was to learn about mobile applications development and publishing using the flutter framework, while delivering a real project to a client, in our case the HEG school. So, HEG Race Challenge is a mobile game where you drive a car, avoiding obstacles, collecting coins and answering questions about the school to get the best score.',
        category: 'Mobile',
        stack: 'Flutter / FlameGame / Google Firebase',
        github: {
            frontend: '',
            backend: ''
        },
        demo: 'https://play.google.com/store/apps/details?id=ch.hevs.race_challenges.heg_race_challenges&pcampaignid=web_share',
        pictures: [raceMain],
        main: raceMain
    }
];

function Portfolio() {
    const [category, setCategory] = useState('All');
    const [open, setOpen] = useState(false);
    const [categoriesViewed, setCategoriesViewed] = useState(false);
    const [projectGlobal, setProjectGlobal] = useState(null);

    const matches1200px = useMediaQuery("(min-width: 1200px)");
    const matches550px = useMediaQuery("(min-width: 550px)");
    const matches380px = useMediaQuery("(min-width: 380px)");

    const definePictWidth = () => {
        if (matches550px) {
            return '477px';
        } else if (matches380px) {
            return '350px';
        } else {
            return '260px';
        }
    }

    const mainStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: matches380px ? 40 : 0,
        gap: 40
    }

    const definePictHeight = () => {
        if (matches550px) {
            return '400px';
        } else if (matches380px) {
            return '427px';
        } else {
            return '317.2px';
        }
    }

    const pictWidth = definePictWidth();
    const pictHeight = definePictHeight();

    const variantsHeader = {
        offscreen: {
            opacity: 0,
            x: 100
        },
        onscreen: {
            x: 0,
            opacity: 1,
        }
    }

    const variantsProjects = {
        offprojects: {
            opacity: 0,
            y: 200
        },
        onprojects: {
            y: 0,
            opacity: 1,
        }
    }

    const itemsPerDiv = matches1200px ? 2 : 1;

    const divs = Array.from(Array(Math.ceil(projects.length / itemsPerDiv)).keys());

    const filteredProjects = projects.filter(
        project => {
            return (
                project.category === category ||
                category === 'All'
            );
        }
    );

    const variantsCard = {
        offscreenCard: {
            opacity: 0,
            elevation: 10
        },
        onscreenCard: {
            opacity: 1,
            elevation: 0
        }
    }

    const variantsTextUp = {
        offscreenCard: {
            opacity: 0,
            y: -100
        },
        onscreenCard: {
            opacity: 1,
            y: 0
        }
    }

    const variantsButtonDown = {
        offscreenCard: {
            opacity: 0,
            y: 100
        },
        onscreenCard: {
            opacity: 1,
            y: 0
        }
    }

    const openDialog = (project) => {
        setProjectGlobal(project);
        setOpen(true);
    }

    const rowsFiltered = divs.map((number, index) =>
        <AnimatePresence key={index}>
            <div style={mainStyle}>
                {filteredProjects.map((project, projectIndex) => {
                    return (
                        (itemsPerDiv * number <= projectIndex && projectIndex < itemsPerDiv * (number + 1)) &&
                        <AnimatePresence key={projectIndex}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                layout
                                transition={{ duration: 0.8 }}
                            >
                                <motion.div
                                    initial='offscreenCard'
                                    whileHover='onscreenCard'
                                >
                                    <Card
                                        style={{
                                            height: pictHeight, width: pictWidth,
                                            backgroundImage: `url(${project.main})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition: ((matches550px || project.name !== 'Imagine Dragons Fan Page') && project.name !== 'Tournament App') ? 'center center' : (!matches550px && project.name === 'Tournament App') ? '10% center' : '25% center',
                                        }}
                                        elevation={0}
                                    >
                                        <motion.div
                                            variants={variantsCard}
                                            transition={{ duration: 0.3 }}
                                            className='CardBack'
                                        >
                                            <motion.div
                                                className='ProjectText'
                                                variants={variantsTextUp}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <div className='ProjectTitle'>{project.name}</div>
                                                <div className='ProjectStack'>{project.stack}</div>
                                            </motion.div>
                                            <motion.div
                                                className='LearnMore'
                                                transition={{ duration: 0.5 }}
                                                variants={variantsButtonDown}
                                                onClick={() => openDialog(project)}
                                            >
                                                LEARN MORE
                                            </motion.div>
                                        </motion.div>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    )
                })}
            </div>
        </AnimatePresence>
    );



    const rows = divs.map((number, index) =>
        <AnimatePresence key={index}>
            <div style={mainStyle}>
                {projects.map((project, projectIndex) => {
                    return (
                        (itemsPerDiv * number <= projectIndex && projectIndex < itemsPerDiv * (number + 1)) &&
                        <motion.div
                            key={projectIndex}
                            variants={variantsProjects}
                            transition={{ duration: 0.5, delay: (0.2 * projectIndex) }}
                        >
                            <motion.div
                                initial="offscreenCard"
                                whileHover="onscreenCard"
                            >
                                <Card
                                    style={{
                                        height: pictHeight, width: pictWidth,
                                        backgroundImage: `url(${project.main})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: ((matches550px || project.name !== 'Imagine Dragons Fan Page') && project.name !== 'Tournament App') ? 'center center' : (!matches550px && project.name === 'Tournament App') ? '10% center' : '25% center',
                                    }}
                                    elevation={0}
                                >
                                    <motion.div
                                        variants={variantsCard}
                                        className='CardBack'
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            className='ProjectText'
                                            variants={variantsTextUp}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className='ProjectTitle'>{project.name}</div>
                                            <div className='ProjectStack'>{project.stack}</div>
                                        </motion.div>
                                        <motion.div
                                            className='LearnMore'
                                            transition={{ duration: 0.5 }}
                                            variants={variantsButtonDown}
                                            onClick={() => openDialog(project)}
                                        >
                                            LEARN MORE
                                        </motion.div>
                                    </motion.div>
                                </Card>
                            </motion.div>
                        </motion.div>
                    )
                })}
            </div >
        </AnimatePresence >
    );

    const changeCat = (cat) => {
        setCategoriesViewed(true);
        setCategory(cat);
    }

    return (
        <div className='PortfolioContainer'>
            <motion.div className='Header'
                initial='offscreen'
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.7 }}
            >
                <motion.div transition={{ ease: 'easeIn', type: 'spring', duration: 0.8, bounce: 0.4 }} variants={variantsHeader} className='About'>PROJECTS</motion.div>
                <motion.div transition={{ ease: 'easeIn', type: 'spring', duration: 0.8, delay: 0.5, bounce: 0.4 }} variants={variantsHeader} className='Line'></motion.div>
            </motion.div>
            <motion.div
                className='Content'
                initial='offprojects'
                whileInView='onprojects'
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    className='Tab'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 1 }}
                >
                    {['All', 'Full-stack', 'Front-end', 'Mobile'].map((cat, index) => (
                        <div key={index} onClick={() => changeCat(cat)} className={category === cat ? 'Category ActiveCat' : 'Category'}>{cat}</div>
                    ))}
                </motion.div>
                {!categoriesViewed && rows}
                {categoriesViewed && rowsFiltered}
                <ProjectDialog open={open} setOpen={setOpen} project={projectGlobal} />
            </motion.div>
        </div>
    );
}

export default Portfolio;