import styled from "styled-components";
import {FaTimes} from "react-icons/fa";
import {Link as LinkS} from "react-scroll";

export const SidebarContainer = styled.aside`
 position: fixed;
 z-index: 999;
 width: 100%;
 height: 100%;
 background: #0d0d0d;
 display: grid;
 align-items: center;
 left: 0;
 transition: 0.3s ease-in-out;
 top: ${({ isOpen }) => isOpen? '0' : '-100%'};
 opacity: ${({ isOpen }) => isOpen? '100%' : '0'};
`;

export const CloseIcon = styled(FaTimes)`
 color: #fff;
`;

export const Icon = styled.div`
 position: absolute;
 top: 1.2rem;
 right: 1.5rem;
 background: transparent;
 font-size: 2rem;
 cursor: pointer;
 outline: none;
`;

export const SidebarWraper = styled.div`
 color: #fff;
`;

export const SidebarMenu = styled.ul`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(3, 80px);
 text-align: center;

 @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 90px);
 }
`;

export const SidebarLink = styled(LinkS)`
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 1.5rem;
 text-decoration: none;
 list-style: none;
 transition: 0.2s ease-in-out;
 text-decoration: none;
 color: #fff;
 margin-right: 50px;
 cursor: pointer;

 &:hover{
  color: #DB5C37;
  transition: 0.2s ease-in-out;
 }
`;

