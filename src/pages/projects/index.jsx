import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Container, Content, Ul, Li, TitleProject, Url, Created_at } from './style'

Url = styled.p`
  a {
    color: white; /* Definir a cor desejada para o link */
  
  }
`;

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([])// que declara uma variável de estado itemsApi que é um array vazio

  useEffect(() => {
    let abortController = new AbortController();
// que realiza uma chamada para a API do GitHub usando fetch e atualiza o estado itemsApi com o resultado da solicitação.
// A atualização do estado dispara uma nova renderização do componente Projects.
    function getGitHubAPI() {
      fetch('https://api.github.com/users/iven-hub/repos')
        .then(async res => {
          if (!res.ok) {
            throw new Error(res.status)
          }
          var data = await res.json()
          setItemsApi(data)//resultado da solicitacao guardado aqui
        })
        .catch(e => console.log(e))
    }

    getGitHubAPI()

    return () => abortController.abort(); //AbortController é usado para interromper a solicitação fetch caso o componente seja desmontado antes da conclusão da solicitação
  }, [])
//para criar uma lista de itens de projeto a partir do array itemsApi atualizado pelo efeito useEffect.
  return (
    <div>
      <h1>Alguns dos meu projetos disponiveis no Github:</h1>

      <Container>
        <Content>
          <Ul>
            {itemsApi.map(item => (
              <Li key={item.id}>
                <TitleProject>{item.name.toUpperCase()}</TitleProject>
                <Url><a href={item.html_url}>{item.html_url}</a></Url>
                <Created_at>Data Criação: {Intl.DateTimeFormat('pt-PT')
                  .format(new Date(item.created_at))}
                </Created_at>
              </Li>
            ))}
          </Ul>
        </Content>
      </Container>
    </div>
  )
}