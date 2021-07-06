
import React, { useState } from 'react';
import { Grid, TextField, makeStyles } from '@material-ui/core';
import { MainLayout, InnerLayout } from '../global-styles/layout-styles';
import TitleComponent from '../components/title.component/title.component';
import styled from 'styled-components';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../components/contactitem/contactitem';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';


const ContactPage = () => {
    const phone = <PhoneIcon />
    const emailid = <EmailIcon />
    const location = <LocationOnIcon />

    const useStyle = makeStyles(theme => ({
        root: {
            '& .MuiFormControl-root': {
                width: '100%',
                margin: theme.spacing(3),
                padding: '0 0',

            },
            '&:hover fieldset': {
                borderColor: '#007bff',
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: '#007bff'
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "#6c757d"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#a4acc4"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
                color: "#a4acc4"
            },

            "& .MuiOutlinedInput-input": {
                color: "#a4acc4"
            },


        },
        textarea: {
            resize: "both"
        },

        button: {
            margin: theme.spacing(1),
            alignItems: 'left'
        }

    }))

    // const PaperStyle = makeStyles(theme =>({
    //     pageContent: {
    //         margin: theme.spacing(4),
    //         padding: theme.spacing(1),
    //         backgroundColor: "#191D2B",
    //         width : '100%'
    //     }
    // }))

   
    //const [values, setValues] = useState(initialFieldValues);
    const classes = useStyle();
    //const paperClass=PaperStyle();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');



    

    function sendEmail(e) {
        console.log(e);
        e.preventDefault();
        console.log(e);
        emailjs.sendForm('service_qkej8yb', 'template_xg83t8k', e.target, 'user_x2Ih41uv9z8Js7zWp9MNI')
        .then((result) => {
            console.log(result.text + 'funciona');
        }, (error) => {
            console.log(error.text + 'no funciona');
        });
    }
    

    return (

        <MainLayout>
            <TitleComponent title={'Contact'} span={'Contact'} />
            <InnerLayout>
            <h5>Get In Touch...</h5>
                <FormMainContent>
                    <div className="left-content">

                        <FormStyled className={classes.root} onSubmit={sendEmail}>
                            <Grid container direction='column'>
                                <Grid item xs={10}>
                                    <TextField
                                        variant='outlined'
                                        label='Your Name'
                                        value={name}
                                        onInput={ e => setName(e.target.value)}
                                        className='text-field'
                                        name="name"
                                        InputLabelProps={{ className: "textfield__label" }}

                                    />
                                    <TextField
                                        variant='outlined'
                                        label='Your Email'
                                        value={email}
                                        onChange={ e => setEmail(e.target.value)}
                                        name="email"
                                        InputLabelProps={{ className: "textfield__label" }}
                                    />
                                    <TextField
                                        variant='outlined'
                                        label='Message About'
                                        value={subject}
                                        onInput={ e => setSubject(e.target.value)}
                                        name="subject"
                                        InputLabelProps={{ className: "textfield__label" }}
                                    />
                                    <TextField
                                        variant='outlined'
                                        label='Message'
                                        value={message}
                                        onInput={ e => setMessage(e.target.value)}
                                        name="message"
                                        multiline
                                        InputLabelProps={{ className: "textfield__label" }}
                                        inputProps={{ className: classes.textarea }}
                                    />

                                </Grid>
                            </Grid>
                            <div className='butts-styled'>
                            <Button type= "submit"  variant="contained" color="primary" style={{ maxWidth: '150px', maxHeight: '50px', minWidth: '150px', minHeight: '50px' }}>
                            <b>SEND</b>
                        </Button>
                            </div>
                        </FormStyled>
                        
                    </div>

                    <RightStyled className='right-content'>
                        <ContactItem title={'Phone'} icon={phone} cont1={'+91-9513225260'} />
                        <ContactItem title={'Email'} icon={emailid} cont1={'nsgarafaite@gmail.com'} />
                        <ContactItem title={'Address'} icon={location} cont1={'KrishnaKripa, Kondazhy PO '} cont2={'Thrissur, Kerala 679106'} />

                    </RightStyled>

                </FormMainContent>
            </InnerLayout>

        </MainLayout>
    );
};



const FormMainContent = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-around;
    background-color: var(--background-dark-grey);
    .left-content {
        width: 40%;
        .butts-styled {
            align-content: left;
            display: flex;
            padding-left: 1.2rem;
            padding-top: 1rem;
            position: relative;
        }
       
    }
    @media screen and (max-width: 502px){
        .left-content {
        width: 40%;
        }
    }

`;



const FormStyled = styled.form`

    margin-top: 1rem;
    //width: 50%auto;
   .textfield__label {
        color: var(--primary-color) !important;
   };
  
   @media screen and (max-width: 502px){
             width: 70%;
    }


`
const RightStyled = styled.div`
     display: grid;
     grid-template-columns: repeat(1, 1fr);
    @media screen and (max-width: 502px){
             width: 70%;
    }

`;

export default ContactPage;