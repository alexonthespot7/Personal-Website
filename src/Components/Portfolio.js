import '../styles/Portfolio.css';

import { motion } from 'framer-motion';

function Portfolio() {

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
        </div>
    );
}

export default Portfolio;