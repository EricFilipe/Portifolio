import styled from "styled-components";

export const ContentContainer = styled.div`
 height: 100vh;
 background-color: #333;

 @media(max-width: 580px) {
   height: 150vh;
   transition: 0.5s;
 }
`;

export const ContactContainer = styled.div`
 height: 100%;
 background-color: #333;
 display: flex;
 justify-content: center;
 align-items: center;
 background-image: url('https://images5.alphacoders.com/132/1325121.png');
 background-size: cover;
 background-attachment: fixed;
 background-repeat: no-repeat;
 background-position: center;
`;

export const FormContent = styled.div`
 width: 65%;
 height: 75%;
 display: flex;
 justify-content: center;
 align-items: center;
 border: 2px solid rgba(255, 255, 255, 0.1);
 background-color: rgba(255, 255, 255, 0.07);
 backdrop-filter: blur(8px);
 box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);

 @media(max-width: 580px) {
   height: 55%;
   width: 70%;
}

@media(max-width: 414px) {
   height: 55%;
 }

 @media(max-width: 360px){
    width: 75%;
}
`;

export const FormContainer = styled.div`
 width: 50%;
 height: 75%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 justify-content: space-between;
 align-items: center;
 padding: 30px 0;
 box-sizing: border-box;

 @media(max-width: 1052px) {
   width: 60%;
}

@media(max-width: 880px) {
   width: 70%;
   height: 80%;
}

@media(max-width: 414px) {
   width: 90%;
   height: 70%;
 }

 @media(max-width: 360px){
    width: 100%;
}
`;

export const Text = styled.div`
 width: 70%;
 display: flex;
 justify-content: flex-start;
 font-family: 'Mooli', sans-serif;
 font-size: 26px;
 color: #fff;

 @media(max-width: 1024px) {
   text-align: center;
}
`;

export const Input = styled.input`
 height: 50px;
 width: 70%;
 border-radius: 5px;
 outline: none;
 border: ${({valid}) => valid? 'none' : '1px solid red'};
 padding: 12px;
 box-sizing: border-box;
 background-color: rgba(255, 255, 255, 0.07);
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
 height: 50px;
 width: 70%;
 border-radius: 5px;
 border: none;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: #3B3382;
 color: #fff;
 font-size: 16px;
 font-family: 'Mooli', sans-serif;
 cursor: pointer;
`;

