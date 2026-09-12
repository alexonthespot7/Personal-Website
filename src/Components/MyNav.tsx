import '../styles/MyNav.css'

import { AppBar, IconButton, Slide, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HashLink } from 'react-router-hash-link';
import useMediaQuery from '../Hooks/useMediaQuery';

import React, { useState } from 'react';

interface MyNavProps {
    active: string;
    position: 'fixed' | 'sticky';
    inView: boolean;
}

export default function MyNav({ active, position, inView }: MyNavProps) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    const handleClose = () => {
        setOpen(false);
    }

    const matches600px = useMediaQuery("(min-width: 600px)");

    if (matches600px) {
        if (position !== 'fixed') {
            return (
                <div>
                    <AppBar sx={{ zIndex: 1, height: 50, backgroundColor: '#1b242f', borderBottom: '3px solid #04c2c9' }} position={position}>
                        <Toolbar sx={{ display: 'flex', alignItems: 'center', gap: { sm: 2, md: 4, lg: 10 }, justifyContent: 'center' }} >
                            <HashLink smooth to="#" className={active === 'Home' ? 'active' : 'link'}>HOME</HashLink>
                            <HashLink smooth to="#About" className={active === 'About' ? 'active' : 'link'}>ABOUT</HashLink>
                            <HashLink smooth to="#Experience" className={active === 'Experience' ? 'active' : 'link'}>EXPERIENCE</HashLink>
                            <HashLink smooth to="#Education" className={active === 'Education' ? 'active' : 'link'}>EDUCATION</HashLink>
                            <HashLink smooth to="#Projects" className={active === 'Portfolio' ? 'active' : 'link'}>PORTFOLIO</HashLink>
                            <HashLink smooth to="#Contact" className={active === 'Contact' ? 'active' : 'link'}>CONTACT</HashLink>
                        </Toolbar>
                    </AppBar>
                </div>
            );
        } else {
            return (
                <div>
                    <Slide appear={true} direction="down" in={!inView}>
                        <AppBar sx={{ zIndex: 1, height: 50, backgroundColor: '#1b242f', borderBottom: '3px solid #04c2c9' }} position={position}>
                            <Toolbar sx={{ display: 'flex', alignItems: 'center', gap: { sm: 2, md: 4, lg: 10 }, justifyContent: 'center' }} >
                                <HashLink smooth to="#Home" className={active === 'Home' ? 'active' : 'link'}>HOME</HashLink>
                                <HashLink smooth to="#About" className={active === 'About' ? 'active' : 'link'}>ABOUT</HashLink>
                                <HashLink smooth to="#Experience" className={active === 'Experience' ? 'active' : 'link'}>EXPERIENCE</HashLink>
                                <HashLink smooth to="#Education" className={active === 'Education' ? 'active' : 'link'}>EDUCATION</HashLink>
                                <HashLink smooth to="#Projects" className={active === 'Portfolio' ? 'active' : 'link'}>PORTFOLIO</HashLink>
                                <HashLink smooth to="#Contact" className={active === 'Contact' ? 'active' : 'link'}>CONTACT</HashLink>
                            </Toolbar>
                        </AppBar>
                    </Slide>
                </div>
            );
        }
    } else {
        if (position === 'fixed') {
            return (
                <div>
                    <AppBar sx={{ zIndex: 100000, height: 50, backgroundColor: '#1b242f', borderBottom: '3px solid #04c2c9' }} position={position}>
                        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 5 }} >
                            <IconButton onClick={handleClick}>
                                <MenuIcon sx={{ fontSize: '32pt', color: 'white' }} />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <div className={`Nav ${open && "Active"}`}>
                        <HashLink onClick={handleClose} smooth to="#Home" className={active === 'Home' ? 'active Mini Home' : 'link Mini Home'}>HOME</HashLink>
                        <HashLink onClick={handleClose} smooth to="#About" className={active === 'About' ? 'active Mini' : 'link Mini'}>ABOUT</HashLink>
                        <HashLink onClick={handleClose} smooth to="#Experience" className={active === 'Experience' ? 'active Mini' : 'link Mini'}>EXPERIENCE</HashLink>
                        <HashLink onClick={handleClose} smooth to="#Education" className={active === 'Education' ? 'active Mini' : 'link Mini'}>EDUCATION</HashLink>
                        <HashLink onClick={handleClose} smooth to="#Projects" className={active === 'Portfolio' ? 'active Mini' : 'link Mini'}>PORTFOLIO</HashLink>
                        <HashLink onClick={handleClose} smooth to="#Contact" className={active === 'Contact' ? 'active Mini' : 'link Mini'}>CONTACT</HashLink>
                    </div>
                </div>
            );
        }
    }
}