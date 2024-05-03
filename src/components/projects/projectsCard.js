import React from "react";
import { ContentContainer, FirstBtn, Link, PositionContainer, ProjectBtns, ProjectCard, ProjectContainer, ProjectContent, ProjectDescription, ProjectImage, ProjectText, ProjectTitle, SecondBtn, UsedTecnologies } from "./projectsCard-style";
import siteProject from '../../assets/Captura de Tela (4).png';
import ytProject from '../../assets/Captura de Tela YT.png';
import mvProject from '../../assets/Captura de Tela MA.png';
import swProject from '../../assets/stwProject.png';
import lpProject from '../../assets/lpProject.png';
import { Devider, Title } from "../profile/profile-card-style";
import JS from "../../assets/js.png";
import RCT from "../../assets/react.png";
import SC from "../../assets/styled-components.png";
import HTML from "../../assets/HTML5.png";
import CSS from "../../assets/CSS3.png";
import TS from "../../assets/ts.png";
import MySQL from "../../assets/mysql.png";
import ChatApp from "../../assets/Captura de tela chat.png";

function Projects() {

    return (
        <ContentContainer id='projetos'>
            <ProjectContainer>
                <Title>PROJETOS</Title>
                <Devider />
                <ProjectContent>
                    <PositionContainer>
                        <ProjectCard>
                            <ProjectImage alt="project image" src={siteProject} />
                        </ProjectCard>
                        <ProjectText>
                            <ProjectTitle>
                                <h2>Site venda de ingresso</h2>
                                <UsedTecnologies>
                                    <img className="used-tecnologies" src={RCT} alt=""/>
                                    
                                </UsedTecnologies>
                            </ProjectTitle>
                            <ProjectDescription>
                                O meu primeiro projeto em react, um site que simula
                                o anúncio e a venda de ingresso para um filme.
                            </ProjectDescription>
                            <ProjectBtns>
                                <Link href="https://batman-project-pearl.vercel.app" target="blank">
                                    <FirstBtn>Ver Projeto</FirstBtn>
                                </Link>
                                <Link href="https://github.com/EricFilipe/Batman_Project" target="blank">
                                    <SecondBtn> Repositório </SecondBtn>
                                </Link>
                            </ProjectBtns>
                        </ProjectText>
                    </PositionContainer>

                    <PositionContainer>
                        <ProjectCard>
                            <ProjectImage alt="project image" src={ytProject} /> 
                        </ProjectCard>
                        <ProjectText>
                            <ProjectTitle>
                                <h2>Clone do YouTube</h2>
                                <UsedTecnologies>
                                    <img className="used-tecnologies" src={RCT} alt=""/>
                                    <img className="used-tecnologies" src={SC} alt=""/>
                                    <img className="used-tecnologies" src={JS} alt=""/>
                                    <img className="used-tecnologies" src={TS} alt=""/>
                                    <img className="used-tecnologies" src={MySQL} alt=""/>
                                </UsedTecnologies>
                            </ProjectTitle>
                            <ProjectDescription>
                                Um projeto fullstack, ele se baseia na interface do YouTube
                                trazendo o desenvolvimento do frontend com React e TypeScript e do backend
                                com Node e MySQL para o banco de dados, com funcionalidades como cadastro e login de usuário 
                                com token de autenticaçâo JWT, cadastro de vídeo e também integrção com 
                                a API pública do YouTube.
                            </ProjectDescription>
                            <ProjectBtns>
                                <Link href="https://you-tube-project-phi.vercel.app" target="blank">
                                    <FirstBtn>Ver Projeto</FirstBtn>
                                </Link>
                                <Link href="https://github.com/EricFilipe/YouTube-Project" target="blank">
                                    <SecondBtn> Repositório </SecondBtn>
                                </Link>
                            </ProjectBtns>
                        </ProjectText>
                    </PositionContainer>

                    <PositionContainer>
                        <ProjectCard>
                            <ProjectImage alt="project image" src={mvProject} />
                        </ProjectCard>
                        <ProjectText>
                            <ProjectTitle>
                                <h2>Pesquisa de Filmes</h2>
                                <UsedTecnologies>
                                    <img className="used-tecnologies" src={HTML} alt=""/>
                                    <img className="used-tecnologies" src={CSS} alt=""/>
                                    <img className="used-tecnologies" src={JS} alt=""/>
                                </UsedTecnologies>
                            </ProjectTitle>
                            <ProjectDescription>
                                Projeto que consome uma API pública de filmes, onde o cliente faz a pesquisa 
                                de um filme e ele retorna diversas informações como poster, título, classificação, ano de lançamento...
                            </ProjectDescription>
                            <ProjectBtns>
                                <Link href="https://movie-app-eight-kappa.vercel.app" target="blank">
                                    <FirstBtn>Ver Projeto</FirstBtn>
                                </Link>
                                <Link href="https://github.com/EricFilipe/Movie-app" target="blank">
                                    <SecondBtn> Repositório </SecondBtn>
                                </Link>
                            </ProjectBtns>
                        </ProjectText>
                    </PositionContainer>

                    <PositionContainer>
                        <ProjectCard>
                            <ProjectImage alt="project image" src={swProject} /> 
                        </ProjectCard>
                        <ProjectText>
                            <ProjectTitle>
                                <h2>Guia Visual de Star Wars</h2>
                                <UsedTecnologies>
                                    <img className="used-tecnologies" src={HTML} alt=""/>
                                    <img className="used-tecnologies" src={CSS} alt=""/>
                                    <img className="used-tecnologies" src={JS} alt=""/>
                                </UsedTecnologies>
                            </ProjectTitle>
                            <ProjectDescription>
                                O Guia visual de Star Wars é um projeto desenvolvido com HTML, CSS e JavaScript puro
                                que integra a uma API onde pode-se encontrar os dados sobre a franquia. 
                                Um site que traz todas as informações sobre o universo de Star Wars, personagens, planetas, naves, etc.
                            </ProjectDescription>
                            <ProjectBtns>
                                <Link href="https://starwars-guide-byericf.netlify.app" target="blank">
                                    <FirstBtn>Ver Projeto</FirstBtn>
                                </Link>
                                <Link href="https://github.com/EricFilipe/StarWars-Guide" target="blank"> 
                                    <SecondBtn> Repositório </SecondBtn>
                                </Link>
                            </ProjectBtns>
                        </ProjectText>
                    </PositionContainer>

                    <PositionContainer>
                        <ProjectCard>
                            <ProjectImage alt="project image" src={lpProject} />
                        </ProjectCard>
                        <ProjectText>
                            <ProjectTitle>
                                <h2>Landing Page</h2>
                                <UsedTecnologies>
                                    <img className="used-tecnologies" src={RCT} alt=""/>
                                    <img className="used-tecnologies" src={SC} alt=""/>
                                    <img className="used-tecnologies" src={JS} alt=""/>
                                </UsedTecnologies>
                            </ProjectTitle>
                            <ProjectDescription>
                                Uma landing page desenvolvida com React e StyledComponents, 
                                com um design atrativo e totalmente responsiva.  
                            </ProjectDescription>
                            <ProjectBtns>
                                <Link href="https://landing-page-byericf.netlify.app" target="blank">
                                    <FirstBtn>Ver Projeto</FirstBtn>
                                </Link>
                                <Link href="https://github.com/EricFilipe/LandingPage" target="blank">
                                    <SecondBtn> Repositório </SecondBtn>
                                </Link>
                            </ProjectBtns>
                        </ProjectText>
                    </PositionContainer>

                    <PositionContainer>
                        <ProjectCard>
                            <ProjectImage alt="project image" src={ChatApp} />
                        </ProjectCard>
                        <ProjectText>
                            <ProjectTitle>
                                <h2>Chat App</h2>
                                <UsedTecnologies>
                                    <img className="used-tecnologies" src={RCT} alt=""/>
                                    <img className="used-tecnologies" src={SC} alt=""/>
                                    <img className="used-tecnologies" src={JS} alt=""/>
                                </UsedTecnologies>
                            </ProjectTitle>
                            <ProjectDescription>
                                Chat em tempo real utilizando comunicaçâo full duplex com Socket.io, que
                                fornece uma comunicação bidirecional entre o transmissor e o receptor.
                            </ProjectDescription>
                            <ProjectBtns>
                                <Link href="https://chatleague.vercel.app" target="blank">
                                    <FirstBtn>Ver Projeto</FirstBtn>
                                </Link>
                                <Link href="https://github.com/EricFilipe/Chat-frontend" target="blank">
                                    <SecondBtn> Repositório </SecondBtn>
                                </Link>
                            </ProjectBtns>
                        </ProjectText>
                    </PositionContainer>

                </ProjectContent>
            </ProjectContainer>
        </ContentContainer>
    )
}

export default Projects;