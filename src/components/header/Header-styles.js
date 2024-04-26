import styled from "styled-components";
import { Link as LinkScroll } from 'react-scroll';

export const Header = styled.nav`
 width: 100%;
 height: 65px;
 background-color: #131417;
 display: flex;
 justify-content: space-around;
 align-items: center;

 @media(max-width: 768px){
    display: flex;
    justify-content: space-between;
}
`;

export const LogoContainer = styled.div`
 width: 120px;
 height: 60px;
 display: flex;
 align-items: center;
`;

export const MyLogo = styled.img`
 width: 80px;
 height: 70px;
`;

export const LogoN = styled.img`
 height: 60px;

 @media(max-width: 768px){
    display: none;
}
`;

export const HeaderButton = styled(LinkScroll)`
 width: 200px;
 height: 35px;
 background: transparent;
 color: #bfbfbf;
 font-family: "Poppins", sans-serif;
 font-size: 14px;
 font-weight: bold;
 border: 1px solid #bfbfbf;
 border-radius: 8px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 justify-content: space-evenly;

 &:hover{
 border: 1px solid #DB5C37;
 }

 @media(max-width: 768px){
    display: none;
}
`;

export const List = styled.ul`
 width: 30%;
 display: flex;
 justify-content: space-between;

@media(max-width: 1130px){
    width: 40%;
}

@media(max-width: 768px){
    display: none;
}
`;

export const Li = styled(LinkScroll)`
 font-family: "Poppins", sans-serif;
 font-size: 17px;
 color: #bfbfbf;
 cursor: pointer;
 list-style: none;
 height: 55px;
 display: flex;
 align-items: center;

 &:hover{
    color: #fff;
    transition: 0.5s ease-in-out;
 }
`;