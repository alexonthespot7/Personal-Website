import '../styles/ProjectDialog.css';

import { Button, Dialog, DialogContent, Divider, Fade, IconButton, Menu, MenuItem, useMediaQuery } from "@mui/material";
import Carousel from "nuka-carousel/lib/carousel";
import { forwardRef, useState } from "react";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SiGoogleplay } from 'react-icons/si';

const Transition = forwardRef(function Transition(props, ref) {
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

    const matches680px = useMediaQuery('(min-width: 680px)');
    const matches600px = useMediaQuery('(min-width: 600px)');
    const matches500px = useMediaQuery('(min-width: 500px)');
    const matches450px = useMediaQuery('(min-width: 450px)');
    const matches410px = useMediaQuery('(min-width: 410px)');
    const matches380px = useMediaQuery('(min-width: 380px)');
    const matches350px = useMediaQuery('(min-width: 350px)');
    const matches330px = useMediaQuery('(min-width: 330px)');

    const definePictureWidth = () => {
        if (matches680px) {
            return 600;
        } else if (matches600px) {
            return 500;
        } else if (matches500px) {
            return 400;
        } else if (matches450px) {
            return 350;
        } else if (matches410px) {
            return 325;
        } else if (matches380px) {
            return 300;
        } else if (matches350px) {
            return 275;
        } else if (matches330px) {
            return 250;
        } else {
            return 200;
        }
    }
    const pictureWidth = definePictureWidth();

    const carouselAlign = matches680px ? {} : { display: 'flex', justifyContent: 'center' }
    const sizeButtons = matches600px ? 'medium' : 'small';

    const handleClose = () => {
        setOpen(false);
    }

    const photos = open ? project.pictures.map((picture, index) =>
        <img
            width={`${pictureWidth}px`}
            height={
                !['QuizHacker', 'HEG Race Challenge'].includes(project.name)
                    ? `${pictureWidth / 2}px`
                    : project.name !== 'QuizHacker'
                        ? `${pictureWidth / 1.35}px`
                        : `${pictureWidth * 1.082}px`
            }
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

    const gitButtons = (open && project.name !== 'HEG Race Challenge')
        ? ((['Full-stack', 'Mobile'].includes(project.category))
            ? (matches500px
                ? <div className='GitButtons'>
                    <Button onClick={() => goToLink(project.github.backend)} size={sizeButtons} variant="outlined" sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }} startIcon={<GitHubIcon sx={{ color: '#1b242f' }} />}>back-end</Button>
                    <Button onClick={() => goToLink(project.github.frontend)} size={sizeButtons} variant="outlined" sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }} startIcon={<GitHubIcon sx={{ color: '#1b242f' }} />}>front-end</Button>
                </div>
                : <div>
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
                </div>
            )
            : (project.category === 'Front-end') ?
                <div>
                    {matches330px && <Button onClick={() => goToLink(project.github.frontend)} size={sizeButtons} variant="outlined" sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }} startIcon={<GitHubIcon sx={{ color: '#1b242f' }} />}>github</Button>}
                    {!matches330px && <IconButton onClick={() => goToLink(project.github.frontend)} size={sizeButtons} variant="outlined" sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }}><GitHubIcon sx={{ color: '#1b242f' }} /></IconButton>}
                </div>
                : <div>
                    {matches330px && <Button onClick={() => goToLink(project.github.backend)} size={sizeButtons} variant="outlined" sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }} startIcon={<GitHubIcon sx={{ color: '#1b242f' }} />}>github</Button>}
                    {!matches330px && <IconButton onClick={() => goToLink(project.github.backend)} size={sizeButtons} variant="outlined" sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }}><GitHubIcon sx={{ color: '#1b242f' }} /></IconButton>}
                </div>
        )
        : <></>;

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            transitionDuration={500}
        >
            {open && <DialogContent>
                <div style={carouselAlign}>
                    <div style={{ width: matches680px ? 'auto' : `${pictureWidth}px` }}>
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
                        <Button startIcon={project.name === 'HEG Race Challenge' ? <SiGoogleplay /> : <LaunchIcon sx={{ color: '#fff' }} />} onClick={() => goToLink(project.demo)} size={sizeButtons} variant="contained" sx={{ "&:hover": { backgroundColor: '#e31b6d', filter: 'brightness(70%)' }, backgroundColor: '#e31b6d', color: '#fff', transition: '0.45s' }}>{project.name !== 'HEG Race Challenge' ? 'demo' : 'google play'}</Button>
                        {gitButtons}
                    </div>
                </div>
            </DialogContent>}
        </Dialog >
    );
}

export default ProjectDialog;