import React, { useEffect, useRef, useState } from "react";
import {HeroContainer, MobileIcon, HelloBox, Buttons, Media, MediaIcons, Span, ToPortifolio, ToContact } from "./home-style";
import Profile from "../../components/profile/profile-card";
import Projects from "../../components/projects/projectsCard";
import Contact from "../../components/contact/contactCard";
import HeaderComponent from "../../components/header/Header";
import SideBar from "../../components/sideBar";
import {FaBars} from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import Typed from "typed.js";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import Skills from "../../components/skills/skills";
import { Link } from "../../components/projects/projectsCard-style";
import Footer from "../../components/footer/footer";

function Home() {

    const [isOpen, setIsOpen] = useState(false);
    const el = useRef(null);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Desenvolvedor web', 'Freelancer', 'Programador', ],
            typeSpeed: 50,
            loop: true,
            loopCount: Infinity,
            backSpeed: 50
        })

        return() => {
            typed.destroy();
        }
    }, [])

    return (
        <>
        <HeaderComponent />
        <HeroContainer>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <HelloBox>
                <h3>Olá, meu nome é</h3>
                <h1>Éric Filipe</h1>
                <div className="txt-wrapper">
                    <h2>e eu sou</h2> 
                    <span  ref={el}/>
                </div>
                <Buttons>
                    <ToContact
                    to='contato'
                    smooth={true}
                    duration={500}
                    exact='true'><IoMdMailUnread />Contratar</ToContact>

                    <ToPortifolio 
                    to='projetos'
                    smooth={true}
                    duration={500}
                    exact='true'
                    >Ver Portifolio</ToPortifolio>
                </Buttons>
            </HelloBox>

            <Media>
                <span>Mídia: </span>
                <MediaIcons>
                    <Link href="https://www.instagram.com/eric_fiilipe/?next=%2F" target="blank">
                        <SlSocialInstagram />
                    </Link>
                    <Link href="https://www.linkedin.com/in/éric-barros-305621290/" target="_blank" >
                        <SlSocialLinkedin />
                    </Link>
                    <Link href="https://github.com/EricFilipe" target="_blank">
                        <SlSocialGithub />
                    </Link>
                </MediaIcons>
            </Media>
        </HeroContainer>


        
        <Profile />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        </>
    )
}

export default Home;