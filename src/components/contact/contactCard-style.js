import styled from "styled-components";

export const ContentContainer = styled.div`
 height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: #131417;

 @media(max-width: 580px) {
   height: 150vh;
   transition: 0.5s;
 }
`;

export const ContactContainer = styled.div`
 height: 100%;
 width: 100%;
 display: flex;
 justify-content: center;

 @media (max-width: 768px) {
  flex-direction: column;
 }
`;

export const FormContent = styled.div`
 width: 45%;
 height: 85%;

 @media(max-width: 768px) {
   height: 55%;
   width: 100%;
}
`;

export const FormContainer = styled.form`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 gap: 10px;
 padding: 0 0 0 50px;
 box-sizing: border-box;

 @media(max-width: 1052px) {
   width: 60%;
}

@media(max-width: 768px) {
   width: 100%;
   height: 80%;
}
`;

export const Label = styled.label`
 font-family: "Poppins", sans-serif;
 color: #bfbfbf;
`;

export const Input = styled.input`
 height: 60px;
 width: 80%;
 border-radius: 5px;
 outline: none;
 border: ${({valid}) => valid? 'none' : '1px solid red'};
 padding: 12px;
 box-sizing: border-box;
 background-color: rgba(255, 255, 255, 0.07);
 color: #fff;
`;

export const MsgArea = styled.textarea`
 width: 80%;
 max-width: 80%;
 min-width: 80%;
 height: 120px;
 max-height: 120px;
 min-height: 120px;
 border-radius: 5px;
 outline: none;
 border: ${({valid}) => valid? 'none' : '1px solid red'};
 padding: 12px;
 box-sizing: border-box;
 background-color: rgba(255, 255, 255, 0.07);
 color: #fff;
`;

export const MessageContainer = styled.div`
 width: 70%;
`;

export const InputEmpty = styled.span`
 display: ${({valid}) => valid? 'none' : 'block'};
 font-size: 14px;
 color: red;
`;

export const Button = styled.button`
 height: 40px;
 width: 80%;
 border-radius: 5px;
 border: none;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: #DB5C37;
 color: #fff;
 font-size: 16px;
 font-family: "Poppins", sans-serif;
 font-weight: bold;
 cursor: pointer;
 margin-top: 20px;
`;

export const ContactContent = styled.div`
 width: 45%;
 height: 85%;
 
`;

export const ContactContentContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 height: 100%;
`;

export const SocialMediaContacts = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 column-gap: 15px;
 row-gap: 20px;
`;

export const Contacts = styled.div`
 width: 90%;
 height: 160px;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 5px;
 background-color: rgba(255, 255, 255, 0.07);

 .media-img{
   color: #DB5C37;
   width: 40px;
   height: 40px;
   cursor: pointer;
 }
`;

export const EmailContact = styled.div`
 width: 195%;
 height: 50px;
 display: flex;
 align-items: center;
 border-radius: 5px;
 background-color: rgba(255, 255, 255, 0.07);
 padding-left: 15px;
 box-sizing: border-box;
 cursor: pointer;

 .media-img{
   color: #DB5C37;
   width: 30px;
   height: 30px;
   margin-right: 10px;
 }

 span{
   color: #bfbfbf;
   font-family: "Poppins", sans-serif;
 }
`;

export const Map = styled.div`
 width: 95%;
 height: 240px;
 margin-top: 20px;
`;