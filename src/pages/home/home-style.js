import styled from "styled-components";
import { Link as LinkScroll } from 'react-scroll';

export const HeroContainer = styled.div`
 height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 background-image: url('https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80');
 background-size: cover;
 background-attachment: fixed; /*efeito paralax*/
 background-repeat: no-repeat;
 background-position: center; 
 padding-top: 10px;

 h1{
 font-family: 'Mooli', sans-serif;
 color: #fff;
 font-size: 60px;

 @media(max-width: 1190px){
    font-size: 50px;
}

@media(max-width: 996px){
    font-size: 40px;
    text-align: center;
}
 }

 @media(max-width: 412px){
    width: 100%;
 }
`;

export const Header = styled.nav`
 width: 50%;
 display: flex;

 @media(max-width: 768px){
    width: 80%;
    transition: 0.5s;
}
`;

export const List = styled.ul`
 width: 80%;
 display: flex;
 justify-content: space-between;
 
 :hover{
    color: #D870DB;
 }

 @media(max-width: 768px){
    justify-content: space-around;
}
`;

export const Li = styled(LinkScroll)`
 font-family: 'Mooli', sans-serif;
 font-size: 21px;
 color: #fff;
 cursor: pointer;
 list-style: none;

 @media(max-width: 940px){
    justify-content: space-around;
    font-size: 17px;
}
`;

export const Arrow = styled.svg`
 width: 60px;
 height: 172px;
 bottom: 20px;

 @keyframes Arrow {
    0% {opacity: 0;}
    40% {opacity: 1;}
    80% {opacity: 0;}
    100% {opacity: 0;}
}

 @-webkit-keyframes Arrow {
    0% {opacity: 0;}
    40% {opacity: 1;}
    80% {opacity: 0;}
    100% {opacity: 0;}
}

path{
    stroke: #fff;
    stroke-width: 1px;
    fill: transparent;
    animation: Arrow 2s infinite;
    -webkit-animation: Arrow 2s infinite;
}

.a1{
    animation-delay: -1s;
    -webkit-animation-delay: -1s;
}

.a2{
    animation-delay: -0.5s;
    -webkit-animation-delay: -0.5s;
}

.a3{
    animation-delay: 0s;
    -webkit-animation-delay: 0s;
}
`;

export const ButtonContainer = styled.div`
 height: 40px;
 width: 40px;
 border-radius: 50%;
 background-color: #D870DB;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 top: 700px;
 left: ${({scrollBtn}) => scrollBtn? '1480px' : '1600px'};
 position: fixed;
 transition: 0.5s ease-in-out;

 @media(max-width: 1024px) {
    left: ${({scrollBtn}) => scrollBtn? '830px' : '1600px'};
    top: 690px;
 }

 @media(max-width: 760px) {
    left: ${({scrollBtn}) => scrollBtn? '600px' : '1600px'};
    top: 690px;
 }

 @media(max-width: 414px) {
    left: ${({scrollBtn}) => scrollBtn? '360px' : '1600px'};
    top: 840px;
 }
`;

export const ButtonIcon = styled.img`
 width: 25px;
`;