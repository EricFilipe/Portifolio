import React, { useRef, useState } from "react";
import { Button, ContactContainer, ContentContainer, FormContainer, FormContent, Input, InputEmpty, MessageContainer, Text } from "./contactCard-style";

function Contact() {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    const [nameValid, setNameValid] = useState(true)
    const [emailValid, setEmalValid] = useState(true)
    const [messageValid, setMessageValid] = useState(true)

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

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
            console.log('ok')
        }
    }

    return (
        <ContentContainer id='contato'>
            <ContactContainer>
                <FormContent>
                    <FormContainer>
                        <Text>Me envie uma mensagem</Text>
        
                        <Input 
                        type="text" 
                        placeholder="Nome" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        ref={nameRef}
                        valid={nameValid}
                        />
                        <MessageContainer>
                            <InputEmpty valid={nameValid}>
                                Insira as informações, por favor!
                            </InputEmpty>
                        </MessageContainer>
                    
                        <Input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        ref={emailRef}
                        valid={emailValid}
                        />
                        <MessageContainer>
                            <InputEmpty valid={emailValid}>
                                Insira as informações, por favor!
                            </InputEmpty>
                        </MessageContainer>

                        <Input 
                        type="text" 
                        placeholder="Mensagem" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        ref={messageRef}
                        valid={messageValid}
                        style={{height: '100px'}}
                        />
                        <MessageContainer>
                            <InputEmpty valid={messageValid}>
                                Insira as informações, por favor!
                            </InputEmpty>
                        </MessageContainer>

                        <Button onClick={send}>Enviar</Button>
                    </FormContainer>
                </FormContent>
            </ContactContainer>
        </ContentContainer>
    )
}

export default Contact;