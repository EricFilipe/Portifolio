import styled from "styled-components";

export const ContentContainer = styled.div`
 height: 100vh;
 background-color: #131417;
 background-size: cover;
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const ProfileContainer = styled.div`
 height: 100%;
 width: 85%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;


 @media(max-width: 768px) {
  margin-top: 50px;
  width: 90%;
}
`;

export const SkillsTxt = styled.div`
 width: 45%;
 height: 100%;
 display: flex;
 justify-content: center;
 justify-content: space-between;
 margin-bottom: 60px;

 @media (max-width: 768px) {
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
 }
`;

export const TecnologiesImgContainer = styled.div`
 width: 50%;
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 padding: 0 70px;
 box-sizing: border-box;

 @media (max-width: 768px) {
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
 }
`;

export const TecnologiesImg = styled.div`
 width: 80px;
 height: 80px;
 border-radius: 8px;
 background-color: #383838;
 display: flex;
 justify-content: center;
 align-items: center;

 img{
 width: 70%;
 }
`;