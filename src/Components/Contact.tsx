import '../styles/Contact.css'

import { motion, Transition } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
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

    const variantsSubHeader = {
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
        <div className="ContactContainer">
            <div className='triangle' />
            <motion.div style={{ paddingTop: '40px' }} className='Header'
                initial='offscreen'
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.7 }}
            >
                <motion.div
                    transition={{ ease: 'easeIn', type: 'spring', duration: 0.8, bounce: 0.4 } as Transition}
                    variants={variantsHeader}
                    className='About'
                >
                    CONTACT
                </motion.div>
                <motion.div
                    transition={{ ease: 'easeIn', type: 'spring', duration: 0.8, delay: 0.5, bounce: 0.4 } as Transition}
                    variants={variantsHeader} className='Line ContactLine'
                />
                <motion.div
                    variants={variantsSubHeader}
                    transition={{ ease: 'easeIn', type: 'spring', duration: 0.8, delay: 1, bounce: 0.4 } as Transition}
                    className='SubHeader'>
                    Have a question or want to work together?
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="ContactDetails"
            >
                <a href="tel:+358417934141" className='ContactItem'>
                    <PhoneIcon />
                    <span>+358 41 793 4141</span>
                </a>
                <a href="mailto:aleksei.shevelenkov@gmail.com" className='ContactItem'>
                    <EmailIcon />
                    <span>aleksei.shevelenkov@gmail.com</span>
                </a>
            </motion.div>
        </div>
    );
}

export default Contact;
