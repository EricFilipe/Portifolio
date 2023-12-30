import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWraper } from './sideBarElements';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWraper>
            <SidebarMenu>
                <SidebarLink to="tecnologias" onClick={toggle}>Tecnologias</SidebarLink>
                <SidebarLink to="projetos" onClick={toggle}>Projetos</SidebarLink>
                <SidebarLink to="contato" onClick={toggle}>Contato</SidebarLink>
            </SidebarMenu>
        </SidebarWraper>
    </SidebarContainer>
  )
}

export default SideBar;