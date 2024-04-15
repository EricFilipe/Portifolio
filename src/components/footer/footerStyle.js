import styled from "styled-components";

export const FooterContainer = styled.div`
 height: 250px;
 background-color: #0c0d10;
`;

export const FooterContent = styled.footer`
 display: flex;
 flex-direction: column;
`;

export const FooterInfo = styled.div`
 width: 100%;
 height: 180px;
 display: grid;
 grid-template-columns: repeat(3, 1fr);

 @media (max-width: 768px) {
   grid-template-columns: repeat(2, 1fr);
 }
`;

export const FooterMedia = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0 70px 0 70px;
 box-sizing: border-box;

 @media (max-width: 768px) {
   padding: 0 30px 0 20px;
 }
`;

export const FirstColumn = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 p{
    color: #bfbfbf;
    font-size: 14px;
    margin: 0;
 }

 @media (max-width: 768px) {
   margin-left: 10px;
  p{
   font-size: 12px;
  }
 }
`;

export const SecColumn = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;

 h4{
    color: #fff;
    font-family: "Poppins", sans-serif;
    margin: 0 0 8px 0;
 }

 li{
    list-style: none;
    font-family: "Poppins", sans-serif;
    color: #bfbfbf;
    font-size: 14px;
 }
`;

export const ThirdColumn = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 
 h4{
    color: #fff;
    font-family: "Poppins", sans-serif;
    margin: 0 0 8px 0;
 }

 @media (max-width: 768px) {
   display: none;
 }
`;

export const Logo = styled.div`
 display: flex;
 align-items: center;

 img{
    width: 100px;
 }

 @media (max-width: 768px) {
  img{
   width: 80px;
  }
 }
`;

export const Text = styled.div`
 display: block;

 p{
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
 }

 @media (max-width: 768px) {
   p{
      font-size: 10px;
   }
 }
`;

export const FooterDevider = styled.div`
 width: 99.9%;
 border: 1px solid #5D5D5D;
`;

export const SocialMedia = styled.div`
 width: 150px;
 height: 70px;
 display: flex;
 justify-content: center;
 align-items: center;
 justify-content: space-around;

 .socialmedia-icons{
    color: #fff;
    width: 20px;
    height: 20px;
 }
`;

export const ButtonContainer = styled.div`
 height: 40px;
 width: 40px;
 border-radius: 5px;
 background-color: #DB5C37;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const ButtonIcon = styled.img`
 width: 25px;
`;