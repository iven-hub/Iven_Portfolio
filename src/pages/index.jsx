import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Iven Ramos</Name>
        <Function>Engenharia Informática e Sistemas Computacionais</Function>
        <Intro>4º Ano de Licenciatura, 
          programo em algumas linguagens de 
          programação (React, JS e outros), mobile.
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS<FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/iven.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
