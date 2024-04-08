import styled from "styled-components";
import WallPaper from '../../assets/fundoP.png';
import { Link as LinkScroll } from 'react-scroll';

export const HeroContainer = styled.div`
 height: 100vh;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 background-image: url(${WallPaper});
 background-size: cover;
 background-repeat: no-repeat;
 background-position: center;

 @media(max-width: 768px){
    align-items: center;
 }
`;

export const MobileIcon = styled.div`
 display: none;


 @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
 }
`;

export const HelloBox = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 width: 30%;
 height: 55%;
 color: #fff;
 font-family: "Poppins", sans-serif;
 margin-left: 80px;
 
 h1{
   margin: 0;
   font-size: 65px;
 }

 h2{
   margin-top: 0;
   margin-right: 10px;
   font-size: 28px;
 }

 h3{
   margin-bottom: 0;
   font-size: 20px;
 }

 .txt-wrapper span{
  font-size: 28px;
  font-family: "Poppins", sans-serif;
  color: #DB5C37;
 }

 .txt-wrapper{
   display: flex;
 }

 @media(max-width: 768px){
    width: 100%;
    margin-left: 25px;

    h1{
      font-size: 50px;
    }

    h2{
      font-size: 22px;
    }

    h3{
      font-size: 18px;
    }

    .txt-wrapper span{
      font-size: 22px;
    }
}
`;

export const Media = styled.div`
 display: flex;
 width: 150px;
 font-family: "Poppins", sans-serif;
 color: #fff;
 font-size: 18px;
 margin: 0 0 100px 80px;

 @media(max-width: 768px){
  margin: 0 0 100px 0;
 }
`;

export const MediaIcons = styled.div`
 width: 100%;
 cursor: pointer;
 display: flex;
 justify-content: space-around;
 align-items: center;
 
 a{
   color: #bfbfbf;

    &:hover{
      color: #DB5C37;
    }
 }
`;

export const Buttons = styled(LinkScroll)`
 display: flex;
 align-items: center;
 width: 70%;
`;

export const ToContact = styled(LinkScroll)`
  width: 110px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  color: #fff;
  background-color: #DB5C37;
  border: none;
  outline: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease-in-out ;

  &:hover{
  transform: scale(1.1);
}
`;

export const ToPortifolio = styled(LinkScroll)`
  font-size: 14px;
  border-bottom: 1px solid #fff;
  cursor: pointer;
  margin-left: 30px;
`;



