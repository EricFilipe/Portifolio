import styled from "styled-components";

export const ContentContainer = styled.div`
 height: 100vh;
 background-color: #333;
 background-image: url('https://images3.alphacoders.com/131/1318505.jpeg');
 background-size: cover;
 background-attachment: fixed;
 background-repeat: no-repeat;
 background-position: center;
 display: flex;
 justify-content: center;
 align-items: center;

 @media(max-width: 1062px) {
   height: 160vh;
   transition: 0.5s;
 }
`;

export const ProfileContainer = styled.div`
 height: 100%;
 width: 70%;
 display: flex;
 justify-content: center;
 align-items: center;
 
 justify-content: space-around;
 

 @media(max-width: 1400px) {
   width: 90%;
   justify-content: space-evenly;
}

 @media(max-width: 1062px) {
   flex-direction: column;
 }
`;

export const ProfileContent = styled.div`
 width: 40%;
 display: flex;
 justify-content: center;
`;

export const ProfileCard = styled.div`
 width: 100%;
 background-color: #fff;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 30px;
 border-radius: 8px;

 span{
   margin-top: 15px;
   font-family: 'Mooli', sans-serif;
   font-size: 21px;
 }

 @media(max-width: 464px) {
   width: 150%;
 }
`;

export const ProfileImage = styled.img`
 height: auto;
 width: 150px;
 border-radius: 50%;
 border: 4px solid #D870DB;
`;

export const ProfileText = styled.div`
 font-family: 'Mooli', sans-serif;
 font-size: 17px;
 text-align: center;
 width: 80%;
 margin-top: 10px;
`; 

export const ProfileButton = styled.button`
 width: 150px;
 height: 50px;
 border-radius: 15px;
 border: none;
 background-color: #D870DB;
 color: #fff;
 font-family: 'Mooli', sans-serif;
 margin-top: 35px;
 cursor: pointer;
`;

export const Divider = styled.div`
 width: 100%;
 border-top: .5px solid #bfbfbf;
 margin: 20px 0;
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

export const ProfileSinopse = styled.p`
 width: 430px;
 font-family: 'Mooli', sans-serif;
 font-size: 23px;
 color: #fff;

 @media(max-width: 414px) {
   width: 380px;
 }

 @media(max-width: 360px){
    width: 330px;
    font-size: 20px;
}
`;