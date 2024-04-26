import { React, useEffect, useRef } from "react";
import { ContentContainer, CvButton, Devider, Flags, LangLevel, Languages, ProfileContainer, ProfileContent, ProfileContentContainer, ProfileImage, ProfileInfo, ProfileSinopse, ProfileText, SinopseTitle, Title } from "./profile-card-style";
import Picture from '../../assets/myFt.jpeg'
import Typed from "typed.js";
import { FaWpforms } from "react-icons/fa";
import PTflag from "../../assets/brasil.png";
import ENflag from "../../assets/estados-unidos.png";

function Profile() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Desenvolvedor web', 'Freelancer', 'Programador', ],
            typeSpeed: 50,
            loop: true,
            loopCount: Infinity,
            backSpeed: 50
        })

        return() =>{
            typed.destroy();
        }
    }, [])

    return (
       <ContentContainer id='sobre'>
            <ProfileContainer>
                <Title>SOBRE MIM</Title>
            <Devider />
                <ProfileContentContainer>
                    <ProfileContent>
                        <ProfileImage src={Picture}/>
                    </ProfileContent>
                    <ProfileInfo>
                        <ProfileSinopse>
                            <SinopseTitle>
                                <h1>Sou Éric Filipe e eu sou</h1> 
                                <span ref={el} />
                            </SinopseTitle>
                            Sempre fui fascinado pela tecnologia e inovações que ela pode fazer trazendo melhorias e resolução de problemas, hoje em dia busco o desenvolvimento e crescimento profissional e tecnológico. 
                            Venho sempre buscando aprender sobre novas tecnologias e me atualizar no mercado de trabalho. Foco no desenvolvimento web com as tecnologias HTML, CSS, JavaScript, TypeScript, React, Node.

                        </ProfileSinopse>
                        
                            <CvButton><FaWpforms /> Download CV</CvButton>
                        
                        
                        <Languages>
                            <h3>Idiomas</h3>
                            <Flags>
                                <img src={PTflag} alt="bandeira"/> 
                                <LangLevel>
                                    <span className="lang">Português</span>
                                    <span className="level">NATIVO</span>
                                </LangLevel>
                            </Flags>
                            <Flags>
                                <img src={ENflag} alt="bnadeira" />
                                <LangLevel>
                                    <span className="lang">Inglês</span>
                                    <span className="level">AVANÇADO</span>
                                </LangLevel>
                            </Flags>
                        </Languages>
                    </ProfileInfo>
                </ProfileContentContainer>
            </ProfileContainer>
       </ContentContainer>
    )
}

export default Profile;