import React, { useEffect, useState } from "react";
import { Header, HeroContainer, List, Li, Arrow, ButtonContainer, ButtonIcon, MobileIcon } from "./home-style";
import Profile from "../../components/profile/profile-card";
import Projects from "../../components/projects/projectsCard";
import Contact from "../../components/contact/contactCard";
import { animateScroll as scroll } from "react-scroll";
import ButtonArrow from '../../assets/setas-para-cima.png'
import SideBar from "../../components/sideBar";
import {FaBars} from "react-icons/fa";

function Home() {

    const [scrollBtn, setScrollBtn] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const showBtn = () => {
        if(window.scrollY >= 800) {
            setScrollBtn(true)
        } else {
            setScrollBtn(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', showBtn)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
        <HeroContainer>
        <MobileIcon onClick={toggle}>
            <FaBars />
        </MobileIcon>
        <SideBar isOpen={isOpen} toggle={toggle} />
            <Header>
                <List>
                    <Li 
                    to='tecnologias'
                    smooth={true}
                    duration={500}
                    exact='true'
                    >Tecnologias</Li>
                    
                    <Li 
                    to='projetos'
                    smooth={true}
                    duration={500}
                    exact='true'
                    >Projetos</Li>
                    
                    <Li 
                    to='contato'
                    smooth={true}
                    duration={500}
                    exact='true'
                    >Contato</Li>
                </List>
            </Header>
            <h1>Procurando um desenvolvedor fullstack?</h1>
            <Arrow>
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </Arrow>

        </HeroContainer>

        <ButtonContainer scrollBtn={scrollBtn} onClick={toggleHome}>
            <ButtonIcon alt="" src={ButtonArrow} />
        </ButtonContainer>
        
        <Profile />
        <Projects />
        <Contact />
        </>
    )
}

export default Home;