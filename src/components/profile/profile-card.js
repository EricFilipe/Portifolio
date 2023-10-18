import { React } from "react";
import { ContentContainer, Divider, IconItem, IconsContainer, ProfileButton, ProfileCard, ProfileContainer, ProfileContent, ProfileImage, ProfileSinopse, ProfileText } from "./profile-card-style";
import Picture from '../../assets/myFt.jpeg'
import JS from '../../assets/js.png'
import Node from '../../assets/node.png'
import ReactIcon from '../../assets/react.png'
import { Link } from "react-router-dom";

function Profile() {

    return (
       <ContentContainer id='tecnologias'>
            <ProfileContainer>
                <ProfileContent>
                    <ProfileCard>
                        <ProfileImage src={Picture}/>
                        <span>Éric Filipe</span>
                        <ProfileText>
                            Focado em aprender e melhorar cada vez mais!
                        </ProfileText>
                        <Link to={'https://www.instagram.com/eric_fiilipe/'}>
                            <ProfileButton>Contato pelo instagram!</ProfileButton>
                        </Link>
                        <Divider />
                        <IconsContainer>
                            <IconItem src={JS}/>
                            <IconItem src={Node}/>
                            <IconItem src={ReactIcon}/>
                        </IconsContainer>
                    </ProfileCard>
                </ProfileContent>

                <ProfileSinopse>
                    Sempre fui fascinado pela tecnologia e inovações que ela pode fazer trazendo melhorias e resolução de problemas, hoje em dia busco o desenvolvimento e crescimento profissional e tecnológico. Foco no desenvolvimento web com ecossistema Javascript, React, Node.
                    Experiência com projetos pessoais e desafios, tais como um projeto clone do YouTube com desenvolvimento da interface e integrações com back-end, site de compra de ingressos de um filme, calculadora simples de IMC, site de pesquisa de filmes onde faz integração com uma API pública e traz diversas informações sobre o filme pesquisado.
                </ProfileSinopse>
            </ProfileContainer>
       </ContentContainer>
    )
}

export default Profile;