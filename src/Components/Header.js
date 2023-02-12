import '../styles/Header.css'
import stars from '../pictures/stars.png'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { motion } from 'framer-motion';

import { HashLink } from 'react-router-hash-link';

import useMediaQuery from '../Hooks/useMediaQuery';

export default function Header() {
    const iconVariants = {
        default: { rotate: 0 },
        hover: { rotate: 90 },
    }

    const matchesFirst = useMediaQuery("(min-width: 750px)");
    const matchesSecond = useMediaQuery("(min-width: 620px)");
    const matchesThird = useMediaQuery("(min-width: 520px)");
    const matchesFourth = useMediaQuery("(min-width: 360px)");


    const defineArrowSize = () => {
        return matchesFirst ? '18pt' : matchesSecond ? '16pt' : matchesThird ? '14pt' : matchesFourth ? '12pt' : '10pt';
    }
    const arrowSize = defineArrowSize();


    return (
        <div>
            <div className='Container'>
                <img className='Stars' src={stars} />
                <img className='Stars' src={stars} />
            </div>
            <div className='Flex'>
                <div className='Text'>
                    Hello, I'm <span className='Highlight'>Aleksei Shevelenkov</span>.<br />
                    I'm a full-stack developer.
                </div>
                <motion.div
                    initial='default'
                    whileHover='hover'
                >
                    <HashLink smooth to="#About" className='button'>
                        About me
                        <motion.div style={{ display: 'flex', alignItems: 'center' }} transition={{ duration: 0.4 }} variants={iconVariants}><ArrowForwardIcon sx={{ fontSize: arrowSize }} /></motion.div>
                    </HashLink>
                </motion.div>
            </div>
        </div>
    );
}