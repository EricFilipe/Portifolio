import React from "react";
import { ContentContainer, Link, PositionContainerLeft, PositionContainerRight, ProjectCard, ProjectCardReverse, ProjectContainer, ProjectContent, ProjectImage, ProjectImageReverse, ProjectText } from "./projectsCard-style";
import siteProject from '../../assets/Captura de Tela (4).png';
import ytProject from '../../assets/Captura de Tela YT.png';
import mvProject from '../../assets/Captura de Tela MA.png';
import swProject from '../../assets/stwProject.png';
import lpProject from '../../assets/lpProject.png';

function Projects() {

    return (
        <ContentContainer id='projetos'>
            <ProjectContainer>
                <ProjectContent>
                    <PositionContainerRight>
                        <ProjectCard>
                            <ProjectImage alt="project image" src={siteProject} />
                            <ProjectText>
                                Simulação de um site de venda de ingresso para um filme.
                            </ProjectText>
                        </ProjectCard>
                    </PositionContainerRight>

                    <PositionContainerLeft>
                        <ProjectCardReverse>
                            <ProjectImageReverse alt="project image" src={ytProject} /> 
                            <ProjectText>
                                Clone do YouTube com desenvolvimento do front e do back-end com suas devidas integrações, 
                                consumindo também a API pública do YouTube podendo pesquisar vídeos e trazendo suas informações
                                como nome do canal, views, data de lançamento... 
                            </ProjectText>
                        </ProjectCardReverse>
                    </PositionContainerLeft>

                    <PositionContainerRight>
                        <ProjectCard>
                            <ProjectImage alt="project image" src={mvProject} />
                            <ProjectText>
                                Projeto que consome uma API pública de filmes, onde o client faz a pesquisa 
                                de um filme e ele retorna diversas informações como poster, título, classificação, ano de lançamento...
                            </ProjectText>
                        </ProjectCard>
                    </PositionContainerRight>

                    <PositionContainerLeft>
                        <ProjectCardReverse>
                            <ProjectImageReverse alt="project image" src={swProject} /> 
                            <ProjectText>
                                Um site que traz todas as informações sobre o universo de Star Wars, personagens, planetas, naves, etc.
                                <p><Link href="https://starwars-guide-byericf.netlify.app" target="blank">https://starwars-guide-byericf.netlify.app</Link></p>
                            </ProjectText>
                        </ProjectCardReverse>
                    </PositionContainerLeft>

                    <PositionContainerRight>
                        <ProjectCard>
                            <ProjectImage alt="project image" src={lpProject} />
                            <ProjectText>
                                Design de uma landing page atraente e totalmente responsiva.
                                <p><Link href="https://landing-page-byericf.netlify.app" target="blank">https://starwars-guide-byericf.netlify.app</Link></p>
                            </ProjectText>
                        </ProjectCard>
                    </PositionContainerRight>

                </ProjectContent>
            </ProjectContainer>
        </ContentContainer>
    )
}

export default Projects;