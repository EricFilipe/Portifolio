import styled from "styled-components";

export const ContentContainer = styled.div`
 height: 100vh;
 background-color: #333;

 @media(max-width: 580px) {
   height: 150vh;
   transition: 0.5s;
 }
`;

export const ProjectContainer = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-image: url('https://www.mackenzie.br/fileadmin/ARQUIVOS/Public/top/midias_noticias/noticias/2020/NOT%C3%8DCIAS_GEST%C3%83O_DE_CONTE%C3%9ADO_2020/Faculdade_de_Computac%CC%A7a%CC%83o_e_Informa%CC%81tica_realiza_evento_sobre_desenvolvimento_Low_Code.jpg');
 background-size: cover;
 background-attachment: fixed;
 background-repeat: no-repeat;
 background-position: center;
`;

export const ProjectContent = styled.div`
 width: 75%;
 height: 80%;
 display: grid;
 grid-template-rows: repeat(1fr, 3);
 row-gap: 35px;
 margin-bottom: 90px;

@media(max-width: 669px) {
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
}
`;

export const PositionContainerRight = styled.div`
 width: 100%;
 display: flex;
 justify-content: flex-end;

 @media(max-width: 669px) {
   justify-content: center;
}
`;

export const PositionContainerLeft = styled.div`
 width: 100%;
 display: flex;
 justify-content: flex-start;

 @media(max-width: 669px) {
 justify-content: center;
}
`;

export const ProjectCard = styled.div`
 width: 550px;
 height: 200px;
 background-color: #000;
 box-shadow: 10px 10px 5px #000;
 border-radius: 8px;
 display: flex;
 align-items: center;

 @media(max-width: 669px) {
   width: 450px;
}

@media(max-width: 414px) {
   box-shadow: none;
   flex-direction: column;
   justify-content: space-between;
   height: 300px;
   width: 400px;
 }
`;

export const ProjectCardReverse = styled.div`
 width: 550px;
 height: 200px;
 background-color: #000;
 box-shadow: 10px 10px 5px #000;
 border-radius: 8px;
 display: flex;
 flex-direction: row-reverse;
 align-items: center;

 @media(max-width: 414px) {
   box-shadow: none;
   flex-direction: column;
   justify-content: space-between;
   height: 350px;
   width: 400px;
 }
`;

export const ProjectImage = styled.img`
 width: 300px;
 height: auto;
 border-radius: 8px;
 position: relative;
 right: 20px;
 top: 40px;

 @media(max-width: 414px) {
   right: 0;
 }
`;

export const ProjectImageReverse = styled.img`
 width: 300px;
 height: auto;
 border-radius: 8px;
 position: relative;
 left: 20px;
 top: 40px;

 @media(max-width: 414px) {
   left: 0;
 }
`;

export const ProjectText = styled.p`
 color: #fff;
 font-family: 'Mooli', sans-serif;
`;