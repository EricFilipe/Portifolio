import React from 'react'
import { Devider, ProfileContentContainer, ProfileSinopse, SinopseTitle, Title } from '../profile/profile-card-style';
import { ContentContainer, ProfileContainer, SkillsTxt, TecnologiesImg, TecnologiesImgContainer } from './skillsElements';
import JS from "../../assets/js.png";
import NODE from "../../assets/node.png";
import RCT from "../../assets/react.png";
import HTML from "../../assets/HTML5.png";
import CSS from "../../assets/CSS3.png";
import TS from "../../assets/ts.png";
import SC from "../../assets/styled-components.png";
import GH from "../../assets/github.png";
import MySQL from "../../assets/mysql.png";

const Skills = () => {
  return (
    <ContentContainer id='tecnologias'>
        <ProfileContainer>
            <Title>TECNOLOGIAS</Title>
            <Devider />
            <ProfileContentContainer>
                <SkillsTxt>
                    <ProfileSinopse>
                        <SinopseTitle>
                            <h1>Tecnologias</h1> 
                            
                        </SinopseTitle>
                        Sempre fui fascinado pela tecnologia e inovações que ela pode fazer trazendo melhorias e resolução de problemas, hoje em dia busco o desenvolvimento e crescimento profissional e tecnológico. 
                        Venho sempre buscando aprender sobre novas tecnologias e me atualizar no mercado de trabalho. Foco no desenvolvimento web com as tecnologias HTML, CSS, JavaScript, TypeScript, React, Node.

                    </ProfileSinopse>
                </SkillsTxt>
                <TecnologiesImgContainer>
                    <TecnologiesImg>
                        <img src={JS} alt='js'/>
                    </TecnologiesImg>
                    <TecnologiesImg>
                        <img src={NODE} alt='node'/>
                    </TecnologiesImg>
                    <TecnologiesImg>
                        <img src={RCT} alt='react'/>
                    </TecnologiesImg>
                    <TecnologiesImg>
                        <img src={HTML} alt='html'/>
                    </TecnologiesImg>
                    <TecnologiesImg>
                        <img src={CSS} alt='css'/>
                    </TecnologiesImg>
                    <TecnologiesImg>
                        <img src={TS} alt='typescript'/>
                    </TecnologiesImg>
                    <TecnologiesImg>
                        <img src={SC} alt='styled-components'/>
                    </TecnologiesImg>
                    <TecnologiesImg>
                        <img src={GH} alt='github'/>
                    </TecnologiesImg>
                    <TecnologiesImg>
                        <img src={MySQL} alt='mysql'/>
                    </TecnologiesImg>
                </TecnologiesImgContainer>
            </ProfileContentContainer>
        </ProfileContainer>
    </ContentContainer>
  )
}

export default Skills;