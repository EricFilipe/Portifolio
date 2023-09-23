import React from "react";
import { ContentContainer, PositionContainerLeft, PositionContainerRight, ProjectCard, ProjectCardReverse, ProjectContainer, ProjectContent, ProjectImage, ProjectImageReverse, ProjectText } from "./projectsCard-style";
import FirProject from '../../assets/Captura de Tela (4).png'
import SecProject from '../../assets/Captura de Tela YT.png'
import ThiProject from '../../assets/Captura de Tela MA.png'

function Projects() {

    return (
        <ContentContainer id='projetos'>
            <ProjectContainer>
                <ProjectContent>
                    <PositionContainerRight>
                        <ProjectCard>
                            <ProjectImage alt="project image" src={FirProject} />
                            <ProjectText>
                                Simulação de um site de venda de ingresso para um filme.
                            </ProjectText>
                        </ProjectCard>
                    </PositionContainerRight>

                    <PositionContainerLeft>
                        <ProjectCardReverse>
                            <ProjectImageReverse alt="project image" src={SecProject} /> 
                            <ProjectText>
                                Clone do YouTube com desenvolvimento do front e do back-end com suas devidas integrações, 
                                consumindo também a API pública do YouTube podendo pesquisar vídeos e trazendo suas informações
                                como nome do canal, views, data de lançamento... 
                            </ProjectText>
                        </ProjectCardReverse>
                    </PositionContainerLeft>

                    <PositionContainerRight>
                        <ProjectCard>
                            <ProjectImage alt="project image" src={ThiProject} />
                            <ProjectText>
                                Projeto que consome uma API pública de filmes, onde o client faz a pesquisa 
                                de um filme e ele retorna diversas informações como poster, título, classificação, ano de lançamento...
                            </ProjectText>
                        </ProjectCard>
                    </PositionContainerRight>
                </ProjectContent>
            </ProjectContainer>
        </ContentContainer>
    )
}

export default Projects;