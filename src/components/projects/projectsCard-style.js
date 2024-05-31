import styled from "styled-components";

export const ContentContainer = styled.div`
 height: 340vh;
 background-color: #131417;

 @media(max-width: 768px) {
   height: 550vh;
 }
`;

export const ProjectContainer = styled.div`
 width: 100%;
 height: 80%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

export const ProjectContent = styled.div`
 width: 75%;
 height: 80%;
 display: flex;
 flex-direction: column;
 row-gap: 40px;
 margin-bottom: 90px;

@media(max-width: 768px) {
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
}
`;

export const PositionContainer = styled.div`
 width: 100%;
 display: flex;

 @media(max-width: 768px) {
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  box-sizing: content-box;
}
`;

export const ProjectCard = styled.div`
 width: 50%;
 height: 325px;

 @media (max-width: 768px) {
  width: 95%;
 }
`;

export const ProjectImage = styled.img`
 width: 100%;
 height: 325px;
 border-radius: 8px 0 0 8px;

 @media(max-width: 768px) {
  
  height: 225px;
  border-radius: 8px 8px 0 0; 
 }
`;

export const ProjectText = styled.div`
 width: 50%;
 height: 100%;
 background-color: #1f1e1c;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding: 15px;
 box-sizing: border-box;

 @media(max-width: 768px){
    
    width: 95%;
}
`;

export const ProjectTitle = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;

 h2{
  font-size: 17px;
  color: #fff;
  font-family: "Poppins", sans-serif;
 }

 @media (max-width: 768px) {
  h2{
    font-size: 14px;
  }
 }
`;

export const UsedTecnologies = styled.div`
 display: flex;
 justify-content: flex-end;
 

 .used-tecnologies{
  width: 25px;
  height: 25px;
  margin: 0 5px 0 5px;
 }
`;

export const ProjectDescription = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #fff;
`;

export const ProjectBtns = styled.div`
 width: 50%;
 display: flex;
 justify-content: space-around;

 @media (max-width: 768px) {
  width: 75%;
 }
`;

export const FirstBtn = styled.button`
 width: 120px;
 height: 40px;
 border-radius: 5px;
 background-color: #fff;
 border: none;
 outline: none;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 font-family: "Poppins", sans-serif;
 font-size: 15px;

 @media (max-width: 768px) {
  width: 110px;
  font-size: 14px;
 }
`;

export const SecondBtn = styled.button`
 width: 135px;
 height: 40px;
 border-radius: 5px;
 background-color: #131417;
 color: #fff;
 border: none;
 outline: none;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 font-family: "Poppins", sans-serif;
 font-size: 15px;
 font-weight: bold;
`;

export const Link = styled.a`
 text-decoration: none;
`;