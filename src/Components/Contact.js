import '../styles/Contact.css'

import { motion } from 'framer-motion';
import { forwardRef, useState } from 'react';
import { Input, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { send } from '@emailjs/browser';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const initialSms = {
    name: '',
    message: '',
    email: ''
}

function Contact() {
    const [sms, setSms] = useState(initialSms);
    const [action, setAction] = useState(false);
    const [type, setType] = useState('');
    const [msg, setMsg] = useState('');

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

    const inputChanged = (event) => {
        setSms({ ...sms, [event.target.name]: event.target.value });
    }

    const sendMail = () => {
        send('service_5a0z8r3', 'contact_form', sms, process.env.EMAIL_PUBLIC_KEY)
            .then(response => {
                if (!response.status === 200) {
                    setAction(true);
                    setType('error');
                    setMsg('Your message cannot be sent at the moment');
                    return null;
                }
                setSms({ ...initialSms });
                setAction(true);
                setType('success');
                setMsg('Your message was successfully sent');
            }, error => {
                console.error('FAILED...', error);
                setAction(true);
                setType('error');
                setMsg('Your message cannot be sent at the moment');
            });
    }

    const isValidEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    const submitMessage = () => {
        for (const field of Object.keys(sms)) {
            if (sms[field] === '') {
                setAction(true);
                setType('info');
                setMsg(`${field.charAt(0).toUpperCase() + field.slice(1)} field cannot be empty`);
                return null;
            }
        }

        if (!isValidEmail(sms.email)) {
            setAction(true);
            setType('info');
            setMsg(`Please provide a valid email`);
            return null;
        }

        sendMail();
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
                    transition={{ ease: 'easeIn', type: 'spring', duration: 0.8, bounce: 0.4 }}
                    variants={variantsHeader}
                    className='About'
                >
                    CONTACT
                </motion.div>
                <motion.div
                    transition={{ ease: 'easeIn', type: 'spring', duration: 0.8, delay: 0.5, bounce: 0.4 }}
                    variants={variantsHeader} className='Line ContactLine'
                />
                <motion.div
                    variants={variantsSubHeader}
                    transition={{ ease: 'easeIn', type: 'spring', duration: 0.8, delay: 1, bounce: 0.4 }}
                    className='SubHeader'>
                    Have a question or want to work together?
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="Form"
            >
                <div className='InputDiv'>
                    <Input value={sms.name} disableUnderline style={{ color: '#fff' }} onChange={inputChanged} className='Input' placeholder='Name' type='text' name='name' />
                    <Input value={sms.email} disableUnderline style={{ color: '#fff' }} onChange={inputChanged} className='Input' placeholder='Your Email' type='email' name='email' />
                    <Input value={sms.message} multiline disableUnderline style={{ display: 'flex', alignItems: 'flex-start', color: '#fff', padding: '10px 15px', marginBottom: '5px', minHeight: '150px' }} onChange={inputChanged} className='Input' placeholder='Your message' type='text' name='message' />
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button onClick={submitMessage} className='Send'>SEND</button>
                    </div>
                </div>
            </motion.div>
            <Snackbar open={action} autoHideDuration={3000} onClose={() => setAction(false)}>
                <Alert onClose={() => setAction(false)} severity={type} sx={{ width: '100%' }}>
                    {msg}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Contact;