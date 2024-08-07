import React, { useRef, useState } from "react";
import { Button, ContactContainer, ContactContent, ContactContentContainer, Contacts, ContentContainer, EmailContact, FormContainer, FormContent, Input, Label, Map, MsgArea, MsgSent, SocialMediaContacts } from "./contactCard-style";
import { Devider, Title } from "../profile/profile-card-style";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import { Link } from "../projects/projectsCard-style";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import emailjs from "@emailjs/browser"

function Contact() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    
    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmalValid] = useState(true);
    const [phoneNumberValid, setPhoneNumberValid] = useState(true);
    const [messageValid, setMessageValid] = useState(true);
    const [msgSent, setMsgSent] = useState('')

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneNumberRef = useRef();
    const messageRef = useRef();


    const send = () => {
        if(name.trim() !== '') {
            setNameValid(true)
        }
        if(email.trim() !== '') {
            setEmalValid(true)
        }
        if(phoneNumber.trim() !== '') {
            setPhoneNumberValid(true)
        }
        if(message.trim() !== '') {
            setMessageValid(true)
        }
        if(name.trim() === '' && email.trim() === '' && phoneNumber.trim() === '' && message.trim() === '') {
            setNameValid(false)
            setEmalValid(false)
            setPhoneNumberValid(false)
            setMessageValid(false)
            if(nameRef.current) {
                nameRef.current.focus()
            }
        }
        else if(name.trim() === '') {
            setNameValid(false)
            if(nameRef.current) {
                nameRef.current.focus()
            }
        }
        else if(email.trim() === '') {
            setEmalValid(false)
            if(emailRef.current) {
                emailRef.current.focus()
            }
        }
        else if(phoneNumber.trim() === '') {
            setPhoneNumberValid(false)
            if(phoneNumberRef.current) {
                phoneNumberRef.current.focus()
            }
        }
        else if(message.trim() === '') {
            setMessageValid(false)
            if(messageRef.current) {
                messageRef.current.focus()
            }
        }
        else {
            const templateParams = {
                from_name: name,
                message: message,
                email: email,
                phoneNumber: phoneNumber,
            }
            emailjs.send("service_rla45xm","template_e2gwx6i", templateParams, 'c6m6Y2WpGgFGnOlV6',
              ).then((response) => {
                console.log("email enviado", response.status, response.text)
            }, (err) => {
                console.log("errr", err)
            })
            clearInputs();
            setMsgSent('Mensagem enviada!');
        }
    }

    const clearInputs = () => {
        if(nameRef.current) {
            nameRef.current.value = '';
            nameRef.current.focus();
            setName('');
        }
        if(emailRef.current) {
            emailRef.current.value= '';
            emailRef.current.focus();
            setEmail('');
        }
        if(phoneNumberRef.current) {
            phoneNumberRef.current.value= '';
            phoneNumberRef.current.focus();
            setPhoneNumber('');
        }
        if(messageRef.current) {
            messageRef.current.value = '';
            messageRef.current.focus();
            setMessage('');
        }
    }

    return (
        <ContentContainer id='contato'>
            <Title>CONTATO</Title>
            <Devider />
            <ContactContainer>

                <ContactContent>
                    <ContactContentContainer>
                        <SocialMediaContacts>
                            <Contacts>
                                <Link href="https://www.instagram.com/eric_fiilipe/?next=%2F" target="blank">
                                    <SlSocialInstagram className="media-img"/>
                                </Link>
                            </Contacts>
                            <Contacts>
                                <Link href="https://www.linkedin.com/in/éric-barros-305621290/" target="_blank">
                                    <SlSocialLinkedin className="media-img"/>
                                </Link>
                            </Contacts>
                            <EmailContact>
                                <MdEmail className="media-img"/><span> ericfilipe125@gmail.com</span>
                            </EmailContact>
                        </SocialMediaContacts>
                        
                    </ContactContentContainer>
                </ContactContent>

                <FormContent>
                    <FormContainer onSubmit={send}>
                        <Label>Nome</Label>
                        <Input 
                        type="text" 
                        name="text"
                        placeholder="Ex: Jose" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        ref={nameRef}
                        valid={nameValid}
                        required
                        />                      
                       
                        <Label>E-mail</Label>
                        <Input 
                        type="email" 
                        name="email"
                        placeholder="Ex: jose@email.com" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        ref={emailRef}
                        valid={emailValid}
                        required
                        />                       

                        <Label>Whatsapp com DDD</Label>
                        <Input 
                        type="text" 
                        name="phoneNumber"
                        placeholder="(00) 0 0000-0000" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        ref={phoneNumberRef}
                        valid={phoneNumberValid}
                        required
                        />                       

                        <Label>Mensagem</Label>
                        <MsgArea
                        type="text" 
                        name="text"
                        placeholder="Escreva sua messagem aqui..." 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        ref={messageRef}
                        valid={messageValid}
                        required
                        />                      

                        <Button type="submit" onClick={() => send()}>ENVIAR</Button>
                        <MsgSent>{msgSent}</MsgSent>
                    </FormContainer>
                </FormContent>
            </ContactContainer>
        </ContentContainer>
    )
}

export default Contact;