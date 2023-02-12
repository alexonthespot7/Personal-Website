import '../styles/Footer.css';

import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { HashLink } from 'react-router-hash-link';
import { RiLinkedinFill } from 'react-icons/ri';
import { RiGithubFill } from 'react-icons/ri';
import { SiTelegram } from 'react-icons/si';
import { RiInstagramLine } from 'react-icons/ri';
import useMediaQuery from '../Hooks/useMediaQuery';

export default function Footer() {
    const openLink = (link) => {
        window.open(link);
    }

    const matchesXXS = useMediaQuery("(min-width: 350px)");

    const iconSize = matchesXXS ? 24 : 19.2;

    return (
        <div className="FooterContainer">
            <HashLink smooth to="#Home" className='ArrowsButton'>
                <KeyboardDoubleArrowUpIcon fontSize='large' />
            </HashLink>
            <div className='Media'>
                <div onClick={() => openLink('https://www.linkedin.com/in/alexonthespot')} className='SocialLink'>
                    <RiLinkedinFill size={24} />
                </div>
                <div onClick={() => openLink('https://github.com/alexonthespot7')} className='SocialLink'>
                    <RiGithubFill size={24} />
                </div>
                <div onClick={() => openLink('https://t.me/axosinc')} className='SocialLink'>
                    <SiTelegram size={24} />
                </div>
                <div onClick={() => openLink('https://www.instagram.com/mark_eto_leha_dobav')} className='SocialLink'>
                    <RiInstagramLine size={24} />
                </div>
            </div>
            <div className='FooterInfo'>
                ALEKSEI SHEVELENKOV <span className='Year'>©2023</span>
            </div>
        </div >
    );
}