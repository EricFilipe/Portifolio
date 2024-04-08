import React from "react";
import { ContentContainer, FirstBtn, Link, PositionContainer, PositionContainerLeft, PositionContainerRight, ProjectBtns, ProjectCard, ProjectCardReverse, ProjectContainer, ProjectContent, ProjectDescription, ProjectImage, ProjectImageReverse, ProjectText, ProjectTitle, SecondBtn, UsedTecnologies } from "./projectsCard-style";
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
                                sdgfsdfsdf hpasdhfpasuhdpf hsdpafhpsdhfpsahdfpashdpfhpsad pfshdp fhspdfh pshfd
                            </ProjectDescription>
                            <ProjectBtns>
                                <FirstBtn>Ver Projeto</FirstBtn>
                                <SecondBtn> Repositório </SecondBtn>
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
                                Clone do YouTube com desenvolvimento do front e do back-end com suas devidas integrações, 
                                consumindo também a API pública do YouTube podendo pesquisar vídeos e trazendo suas informações
                                como nome do canal, views, data de lançamento... 
                            </ProjectDescription>
                            <ProjectBtns>
                                <FirstBtn>Ver Projeto</FirstBtn>
                                <SecondBtn> Repositório </SecondBtn>
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
                                Projeto que consome uma API pública de filmes, onde o client faz a pesquisa 
                                de um filme e ele retorna diversas informações como poster, título, classificação, ano de lançamento...
                            </ProjectDescription>
                            <ProjectBtns>
                                <FirstBtn>Ver Projeto</FirstBtn>
                                <SecondBtn> Repositório </SecondBtn>
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
                                Um site que traz todas as informações sobre o universo de Star Wars, personagens, planetas, naves, etc.
                            </ProjectDescription>
                            <ProjectBtns>
                                <Link href="https://starwars-guide-byericf.netlify.app" target="blank">
                                    <FirstBtn>Ver Projeto</FirstBtn>
                                </Link>
                                <SecondBtn> Repositório </SecondBtn>
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
                                dslfhsdhfh sfdshfhsfheohfwoeifhohefoh pow ehpowpeohpweofh pohpewoh ohiewfh h poewfh pewofhp 
                            </ProjectDescription>
                            <ProjectBtns>
                                <Link href="https://landing-page-byericf.netlify.app" target="blank">
                                    <FirstBtn>Ver Projeto</FirstBtn>
                                </Link>
                                <SecondBtn> Repositório </SecondBtn>
                            </ProjectBtns>
                        </ProjectText>
                    </PositionContainer>

                </ProjectContent>
            </ProjectContainer>
        </ContentContainer>
    )
}

export default Projects;