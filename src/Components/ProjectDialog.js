import '../styles/ProjectDialog.css';

import { Button, Dialog, DialogContent, Divider, Fade, IconButton, Menu, MenuItem, useMediaQuery } from "@mui/material";
import Carousel from "nuka-carousel/lib/carousel";
import React, { useState } from "react";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Fade
        timeout={{
            appear: 20000,
            enter: 20000,
            exit: 20000,
        }}
        ref={ref}
        {...props}
    />;
});


function ProjectDialog({ open, setOpen, project }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const matchesM = useMediaQuery('(min-width: 680px)');
    const matchesM2 = useMediaQuery('(min-width: 600px)');
    const matchesM3 = useMediaQuery('(min-width: 500px)');
    const matchesS = useMediaQuery('(min-width: 450px)');
    const matchesXS = useMediaQuery('(min-width: 410px)');
    const matchesXXS = useMediaQuery('(min-width: 380px)');
    const matchesAtom = useMediaQuery('(min-width: 350px)');
    const matchesAtom2 = useMediaQuery('(min-width: 330px)');

    const defineQuizHackerPictureHeight = () => {
        if (matchesM) {
            return '649px';
        } else if (matchesM2) {
            return '541px';
        } else if (matchesM3) {
            return '433px';
        } else if (matchesS) {
            return '379px';
        } else if (matchesXS) {
            return '351px';
        } else if (matchesXXS) {
            return '324px';
        } else if (matchesAtom) {
            return '297px';
        } else if (matchesAtom2) {
            return '270px';
        } else {
            return '216px';
        }
    }

    const definePictureWidth = () => {
        if (matchesM) {
            return '600px';
        } else if (matchesM2) {
            return '500px';
        } else if (matchesM3) {
            return '400px';
        } else if (matchesS) {
            return '350px';
        } else if (matchesXS) {
            return '325px';
        } else if (matchesXXS) {
            return '300px';
        } else if (matchesAtom) {
            return '275px';
        } else if (matchesAtom2) {
            return '250px';
        } else {
            return '200px';
        }
    }

    const definePictureHeight = () => {
        if (matchesM) {
            return '300px';
        } else if (matchesM2) {
            return '250px';
        } else if (matchesM3) {
            return '200px';
        } else if (matchesS) {
            return '175px';
        } else if (matchesXS) {
            return '162.5px';
        } else if (matchesXXS) {
            return '150px';
        } else if (matchesAtom) {
            return '137.5px';
        } else if (matchesAtom2) {
            return '125px';
        } else {
            return '100px';
        }
    }

    const defineCarouselWidth = () => {
        if (matchesM) {
            return 'auto';
        } else if (matchesM2) {
            return '500px'
        } else if (matchesM3) {
            return '400px'
        } else if (matchesS) {
            return '350px';
        } else if (matchesXS) {
            return '325px';
        } else if (matchesXXS) {
            return '300px';
        } else if (matchesAtom) {
            return '275px';
        } else if (matchesAtom2) {
            return '250px';
        } else {
            return '200px';
        }
    }

    const quizHackerPictureHeight = defineQuizHackerPictureHeight();
    const pictureWidth = definePictureWidth();
    const pictureHeight = definePictureHeight();
    const carouselWidth = defineCarouselWidth();
    const carouselAlign = matchesM ? {} : { display: 'flex', justifyContent: 'center' }
    const sizeButtons = matchesM2 ? 'medium' : 'small';

    const handleClose = () => {
        setOpen(false);
    }

    const photos = open ? project.pictures.map((picture, index) =>
        <img
            width={pictureWidth}
            height={project.name !== 'QuizHacker' ? pictureHeight : quizHackerPictureHeight}
            key={index}
            src={picture}
        />
    ) : (<></>);

    const renderCenterRightControls = ({
        nextSlide,
        currentSlide,
        slideCount,
        slidesToShow,
    }) => {
        if (!(currentSlide + slidesToShow === slideCount)) {
            return (
                <IconButton
                    style={{ right: 0, color: 'white', backgroundColor: 'black' }}
                    onClick={nextSlide}
                >
                    <ArrowForwardIosIcon />
                </IconButton>

            );
        }
    }

    const renderCenterLeftControls = ({
        previousSlide, currentSlide
    }) => {
        if (currentSlide !== 0) {
            return (
                <IconButton
                    style={{ right: 0, color: 'white', backgroundColor: 'black' }}
                    onClick={previousSlide}
                    color="white"
                >
                    <ArrowBackIosNewIcon />
                </IconButton>

            );
        }
    }

    const goToLink = (link) => {
        window.open(link);
    }

    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

    const gitButtons = open ? ((['Full-stack', 'Mobile'].includes(project.category)) ?
        (matchesM3 ? <div className='GitButtons'>
            <Button onClick={() => goToLink(project.github.backend)} size={sizeButtons} variant="outlined" sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }} startIcon={<GitHubIcon sx={{ color: '#1b242f' }} />}>back-end</Button>
            <Button onClick={() => goToLink(project.github.frontend)} size={sizeButtons} variant="outlined" sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }} startIcon={<GitHubIcon sx={{ color: '#1b242f' }} />}>front-end</Button>
        </div> :
            <div>
                <div className='GitButtons'>
                    <Button onClick={handleClickMenu} size={sizeButtons} variant="outlined" sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }} startIcon={<GitHubIcon sx={{ color: '#1b242f' }} />}>GitHub</Button>
                </div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleCloseMenu}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem>
                        <Button onClick={() => goToLink(project.github.backend)} size={sizeButtons} variant="outlined" sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }} startIcon={<GitHubIcon sx={{ color: '#1b242f' }} />}>back-end</Button>
                    </MenuItem>
                    <MenuItem>
                        <Button onClick={() => goToLink(project.github.frontend)} size={sizeButtons} variant="outlined" sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }} startIcon={<GitHubIcon sx={{ color: '#1b242f' }} />}>front-end</Button>
                    </MenuItem>
                </Menu>
            </div>) : (project.category === 'Front-end') ?
            <div>
                {matchesAtom2 && <Button onClick={() => goToLink(project.github.frontend)} size={sizeButtons} variant="outlined" sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }} startIcon={<GitHubIcon sx={{ color: '#1b242f' }} />}>github</Button>}
                {!matchesAtom2 && <IconButton onClick={() => goToLink(project.github.frontend)} size={sizeButtons} variant="outlined" sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }}><GitHubIcon sx={{ color: '#1b242f' }} /></IconButton>}
            </div> :
            <div>
                {matchesAtom2 && <Button onClick={() => goToLink(project.github.backend)} size={sizeButtons} variant="outlined" sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }} startIcon={<GitHubIcon sx={{ color: '#1b242f' }} />}>github</Button>}
                {!matchesAtom2 && <IconButton onClick={() => goToLink(project.github.backend)} size={sizeButtons} variant="outlined" sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }}><GitHubIcon sx={{ color: '#1b242f' }} /></IconButton>}
            </div>) : <></>;

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            transitionDuration={500}
        >
            {open && <DialogContent>
                <div style={carouselAlign}>
                    <div style={{ width: carouselWidth }}>
                        <Carousel
                            dragging={false}
                            speed={1250}
                            renderCenterRightControls={renderCenterRightControls}
                            renderCenterLeftControls={renderCenterLeftControls}
                            defaultControlsConfig={{
                                pagingDotsStyle: {
                                    display: 'none'
                                }
                            }}
                        >
                            {photos}
                        </Carousel>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="DialogTitle">
                        {project.name}
                    </div>
                    <div className='DialogInfo'>
                        {project.info.toUpperCase()}
                    </div>
                    <Divider />
                    <div className='DialogDescription'>
                        {project.description}
                    </div>
                    <div className='DialogButtons'>
                        <Button onClick={() => goToLink(project.demo)} size={sizeButtons} variant="contained" sx={{ "&:hover": { backgroundColor: '#e31b6d', filter: 'brightness(70%)' }, backgroundColor: '#e31b6d', color: '#fff', transition: '0.45s' }} startIcon={<LaunchIcon sx={{ color: '#fff' }} />}>{(!matchesM3 && project.category === 'Full-stack') || (!matchesXS) ? 'demo' : 'live demo'}</Button>
                        {gitButtons}
                    </div>
                </div>
            </DialogContent>}
        </Dialog >
    );
}

export default ProjectDialog;