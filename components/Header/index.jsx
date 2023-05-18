import React, { useState } from 'react'
import { Container, Title, NavLinks, Ancora, Content, Menu, CloseSidebar, ContentTitle, SubTitle } from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)//barra aberta ou fechada /menu de navegação responsivo
  const { asPath } = useRouter()//rota atual do usuário propriedd path

  const showSiderbar = () => setSidebar(!sidebar)//barra de navegação responsiva que pode ser aberta e fechada por um ícone de menu.

  function activeLink(path) {
    return asPath === `/${path}` ? 'active' : ''
  }
//componente link do next.js/ Ancora é usado para estilizar o link e o className é definido com base na função activeLink
  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>
            Iven Ramos
          </Title>
          <SubTitle>
            Portfolio Pessoal
          </SubTitle>
        </ContentTitle>
        <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
        <NavLinks sidebar={sidebar}>
          <CloseSidebar onClick={showSiderbar}><FaTimes /></CloseSidebar>
          <Link href="/">
            <Ancora className={activeLink('')} onClick={showSiderbar}>Home</Ancora>
          </Link>
          <Link href="projects">
            <Ancora className={activeLink('projects')} onClick={showSiderbar}>Projetos</Ancora>
          </Link>
          <Link href="contact">
            <Ancora className={activeLink('contact')} onClick={showSiderbar}>Contato</Ancora>
          </Link>
        </NavLinks>
      </Content>
    </Container>
  )
}
