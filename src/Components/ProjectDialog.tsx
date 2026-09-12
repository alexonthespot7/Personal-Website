import '../styles/ProjectDialog.css';

import { Button, Dialog, DialogContent, Divider, Fade, IconButton, Menu, MenuItem, useMediaQuery } from "@mui/material";
import { Carousel, useCarousel } from "nuka-carousel";
import React, { forwardRef, useState } from "react";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SiGoogleplay } from 'react-icons/si';
import { Project } from '../types';
import { FadeProps } from '@mui/material/Fade';

const Transition = forwardRef<HTMLDivElement, FadeProps>(function Transition(props, ref) {
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

interface ProjectDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    project: Project | null;
}

// Rendered as the Carousel's `arrows` node, so it sits inside the
// CarouselProvider tree and can read/drive paging via useCarousel().
function CarouselArrows() {
    const { currentPage, totalPages, goBack, goForward } = useCarousel();

    return (
        <>
            {currentPage !== 0 && (
                <IconButton
                    style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: 'white', backgroundColor: 'black' }}
                    onClick={goBack}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>
            )}
            {currentPage !== totalPages - 1 && (
                <IconButton
                    style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', color: 'white', backgroundColor: 'black' }}
                    onClick={goForward}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            )}
        </>
    );
}

function ProjectDialog({ open, setOpen, project }: ProjectDialogProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const openMenu = Boolean(anchorEl);

    const matches680px = useMediaQuery('(min-width: 680px)');
    const matches600px = useMediaQuery('(min-width: 600px)');
    const matches500px = useMediaQuery('(min-width: 500px)');
    const matches450px = useMediaQuery('(min-width: 450px)');
    const matches410px = useMediaQuery('(min-width: 410px)');
    const matches380px = useMediaQuery('(min-width: 380px)');
    const matches350px = useMediaQuery('(min-width: 350px)');
    const matches330px = useMediaQuery('(min-width: 330px)');

    if (!project) return null;

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

    const goToLink = (link: string) => {
        window.open(link);
    }

    const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
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
                        slotProps={{
                            list: {
                                'aria-labelledby': 'basic-button',
                            },
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
                    {!matches330px && <IconButton onClick={() => goToLink(project.github.frontend)} size={sizeButtons} sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }}><GitHubIcon sx={{ color: '#1b242f' }} /></IconButton>}
                </div>
                : <div>
                    {matches330px && <Button onClick={() => goToLink(project.github.backend)} size={sizeButtons} variant="outlined" sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }} startIcon={<GitHubIcon sx={{ color: '#1b242f' }} />}>github</Button>}
                    {!matches330px && <IconButton onClick={() => goToLink(project.github.backend)} size={sizeButtons} sx={{ "&:hover": { backgroundColor: '#fff', filter: 'brightness(70%)' }, borderColor: '#e31b6d', color: '#1b242f', transition: '0.45s' }}><GitHubIcon sx={{ color: '#1b242f' }} /></IconButton>}
                </div>
        )
        : <></>;

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            slots={{ transition: Transition }}
            transitionDuration={500}
        >
            {open && <DialogContent>
                <div style={carouselAlign}>
                    <div style={{ width: matches680px ? 'auto' : `${pictureWidth}px` }}>
                        <Carousel
                            swiping={false}
                            wrapMode="nowrap"
                            showArrows="always"
                            arrows={<CarouselArrows />}
                            showDots={false}
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
                        {!['Book Store', 'Tournament App'].includes(project.name) &&
                            <Button startIcon={project.name === 'HEG Race Challenge' ? <SiGoogleplay /> : <LaunchIcon sx={{ color: '#fff' }} />} onClick={() => goToLink(project.demo)} size={sizeButtons} variant="contained" sx={{ "&:hover": { backgroundColor: '#e31b6d', filter: 'brightness(70%)' }, backgroundColor: '#e31b6d', color: '#fff', transition: '0.45s' }}>{project.name !== 'HEG Race Challenge' ? 'demo' : 'google play'}</Button>
                        }
                        {gitButtons}
                    </div>
                </div>
            </DialogContent>}
        </Dialog >
    );
}

export default ProjectDialog;