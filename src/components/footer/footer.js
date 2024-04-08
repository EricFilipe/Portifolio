import React from 'react'
import { ButtonContainer, ButtonIcon, FirstColumn, FooterContainer, FooterContent, FooterDevider, FooterInfo, FooterMedia, Logo, SecColumn, SocialMedia, Text, ThirdColumn } from './footerStyle'
import myLogo from '../../assets/logo-Icon.png';
import { HeaderButton } from '../header/Header-styles';
import { IoMdSend } from 'react-icons/io';
import { Link } from '../projects/projectsCard-style';
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import ButtonArrow from '../../assets/setas-para-cima.png';
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

  return (
    <FooterContainer>
        <FooterContent>
            <FooterInfo>
                <FirstColumn>
                    <Logo>
                        <img src={myLogo} alt='logo'/>
                        <Text>
                            <p>CODIFICANDO O FUTURO</p>
                            <p> COM PAIXÃO E</p>
                            <p> INOVAÇÃO</p>
                        </Text>
                        
                    </Logo>
                    <p>&copy; Éric Filipe</p>
                    <p>Todos os direitos reservados</p>
                </FirstColumn>
                <SecColumn>
                    <h4>Mapa</h4>
                    <li>Início</li>
                    <li>Sobre</li>
                    <li>Tecnologias</li>
                    <li>Projetos</li>
                </SecColumn>
                <ThirdColumn>
                    <h4>Contato</h4>
                    <HeaderButton><IoMdSend /> ENTRAR EM CONTATO</HeaderButton>
                </ThirdColumn>
            </FooterInfo>
            <FooterDevider />
            <FooterMedia>
                <SocialMedia>
                    <Link href="https://www.instagram.com/eric_fiilipe/?next=%2F" target="blank">
                        <SlSocialInstagram className='socialmedia-icons'/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/éric-barros-305621290/" target="_blank" >
                        <SlSocialLinkedin className='socialmedia-icons'/>
                    </Link>
                    <Link href="https://github.com/EricFilipe" target="_blank">
                        <SlSocialGithub className='socialmedia-icons'/>
                    </Link>
                </SocialMedia>

                <ButtonContainer onClick={toggleHome}>
                    <ButtonIcon alt="" src={ButtonArrow} />
                </ButtonContainer>
            </FooterMedia>
        </FooterContent>
    </FooterContainer>
  )
}

export default Footer