import React from 'react';
import { IoMdSend } from 'react-icons/io';
import myLogo from '../../assets/logo-Icon.png';
import Logo from '../../assets/2.png'
import { MyLogo, Header, HeaderButton, List, Li, LogoContainer, LogoN } from './Header-styles';

function HeaderComponent() {
  return (
    <Header>
      <LogoContainer>
        <MyLogo src={myLogo} alt="logo"/>
        <LogoN src={Logo} alt="logo-name" />
      </LogoContainer>

        <List>
            <Li 
            to=''
            smooth={true}
            duration={500}
            exact='true'
            >INÍCIO</Li>

            <Li 
            to='sobre'
            smooth={true}
            duration={500}
            exact='true'
            >SOBRE</Li>
            
            <Li 
            to='tecnologias'
            smooth={true}
            duration={500}
            exact='true'
            >TECNOLOGIAS</Li>

            <Li 
            to='projetos'
            smooth={true}
            duration={500}
            exact='true'
            >PROJETOS</Li>
        </List>

        <HeaderButton
         to='contato'
         smooth={true}
         duration={500}
         exact='true'
        ><IoMdSend /> ENTRAR EM CONTATO</HeaderButton>
    </Header>
  )
}

export default HeaderComponent;