import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, ContactContainer, ContactContent, ContactContentContainer, Contacts, ContentContainer, EmailContact, FinalMessage, FormContainer, FormContent, Input, InputEmpty, Label, Map, MediaContactContent, MessageContainer, MsgArea, SocialMediaContacts, Text } from "./contactCard-style";
import { UserContext } from "../../context/userContext";
import { Devider, Title } from "../profile/profile-card-style";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import { Link } from "../projects/projectsCard-style";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function Contact() {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    
    const [nameValid, setNameValid] = useState(true)
    const [emailValid, setEmalValid] = useState(true)
    const [phoneNumberValid, setPhoneNumberValid] = useState(true)
    const [messageValid, setMessageValid] = useState(true)

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneNumberRef = useRef()
    const messageRef = useRef()

    const {handelSubmit} = useContext(UserContext)

    const send = () => {
        if(name.trim() !== '') {
            setNameValid(true)
        }
        if(email.trim() !== '') {
            setEmalValid(true)
        }
        if(message.trim() !== '') {
            setMessageValid(true)
        }
        if(name.trim() === '' && email.trim() === '' && message.trim() === '') {
            setNameValid(false)
            setEmalValid(false)
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
        else if(message.trim() === '') {
            setMessageValid(false)
            if(messageRef.current) {
                messageRef.current.focus()
            }
        }
        else {
            handelSubmit(name, email, message);
            clearInputs();
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
        if(messageRef.current) {
            messageRef.current.value = '';
            messageRef.current.focus();
            setMessage('');
        }
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDGqNN2rr_JSfE8JQDrMDcCLbn47Zp168c"
    });

    const position = {
        lat: -8.468621, 
        lng: -35.731106
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
                        <Map>
                            { isLoaded ? (
                            <GoogleMap
                                mapContainerStyle={{width: '100%', height: '100%', borderRadius: '5px'}}
                                center={position}
                                zoom={17}
                            >
                            <Marker position={position}/>
                            </GoogleMap>
                            ) : <></>}
                        </Map>
                        
                    </ContactContentContainer>
                </ContactContent>

                <FormContent>
                    <FormContainer>
                        <Label>Nome</Label>
                        <Input 
                        type="text" 
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
                        placeholder="(00) 0 0000-0000" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        ref={emailRef}
                        valid={emailValid}
                        required
                        />                       

                        <Label>Mensagem</Label>
                        <MsgArea
                        type="text" 
                        placeholder="Escreva sua messagem aqui..." 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        ref={messageRef}
                        valid={messageValid}
                        required
                        />                      

                        <Button onClick={send}>ENVIAR</Button>
                    </FormContainer>
                </FormContent>
            </ContactContainer>
        </ContentContainer>
    )
}

export default Contact;