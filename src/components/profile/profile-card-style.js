import styled from "styled-components";

export const ContentContainer = styled.div`
 height: 100vh;
 background-color: #131417;
 background-size: cover;
 display: flex;
 justify-content: center;
 align-items: center;

 @media (max-width: 768px) {
  height: 150vh;
 }
`;

export const ProfileContainer = styled.div`
 height: 100%;
 width: 85%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;


 @media(max-width: 768px) {
  
  width: 90%;
}
`;

export const Title = styled.h1`
 color: #fff;
 font-size: 32px;
 font-family: "Poppins", sans-serif;
 margin: 0 ;
`;

export const ProfileContentContainer = styled.div`
 display: flex;

 @media(max-width: 768px) {
  display: flex;
  flex-direction: column;
}
`;

export const ProfileContent = styled.div`
 width: 30%;
 height: 100%;
 display: flex;
 justify-content: center;

 @media(max-width: 768px) {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
}
`;

export const ProfileImage = styled.img`
 height: 100%;
 width: 85%;
 border-radius: 8px;
`;

export const IconsContainer = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-around;
`;

export const IconItem = styled.img`
 width: 80px;
 height: auto;
`;

export const ProfileInfo = styled.div`
 display: flex;
 flex-direction: column;
 width: 70%;
 padding: 0 0 0 40px;

 @media(max-width: 768px) {
  width: 100%;
  padding: 0;
}
`;

export const Devider = styled.div`
 border-bottom: 1px solid #5D5D5D;
 width: 45%;
 margin: 30px 0 40px 0;

 @media(max-width: 768px) {
  width: 65%;
}
`;

export const SinopseTitle = styled.div`
 display: flex;

 h1{
  color: #fff;
  margin: 0 10px 0 0;
  font-size: 30px;
  font-style: italic;
  font-family: "Poppins", sans-serif;
 }

 span{ 
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  font-style: italic;
  color: #DB5C37;
 }

 @media(max-width: 768px) {
  h1{
    font-size: 14px;
  }
   
  span{
    font-size: 14px;
  }
}
`;

export const ProfileSinopse = styled.p`
 font-family: 'Poppins', sans-serif;
 font-size: 18px;
 color: #bfbfbf;

 @media(max-width: 768px) {
  font-size: 14px;
}
`;

export const CvButton = styled.button`
  width: 150px;
  height: 40px;
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
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover{
  transform: scale(1.1);
  }
`;

export const Languages = styled.div`
 width: 150px;
 display: flex;
 flex-direction: column;
 font-family: 'Poppins', sans-serif;
 font-size: 15px;
 color: #fff;
 margin-top: 15px;
`;

export const Flags = styled.div`
 display: flex;
 width: 100%;

 img{
  width: 60px;
  height: 60px;
 }

`;

export const LangLevel = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 height: 60px;
 margin-left: 10px;

 .lang{
  color: #bfbfbf;
  font-size: 16px;
 }

 .level{
  font-size: 12px;
  color: #5D5D5D;
 }
`;