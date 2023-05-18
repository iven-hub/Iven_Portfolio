import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import ItemContact from '../../../components/ItemContact';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

const Content = styled.div`

  width: 500px;
  height: 100%;
  color: white;
  text-decoration: nome;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0px;

  padding: 20px;

@media (max-width: 600px) {
  padding: 10px;
}
`;

const Link = styled.a`
  color: grey;
  
`;

export const Img = styled.img``

export default function Contact() {
  return (
    <div>
      <h1>Alguns dos meus contatos disponiveis nos links abaixo:</h1>
    <Container>
      <Content>
        <ItemContact IconFa={FaLinkedin} href="https://www.linkedin.com" />
        <ItemContact IconFa={FaFacebook} href="https://www.facebook.com/Iven.Ramos.10" />
        <ItemContact IconFa={FaInstagram} href="https://www.instagram.com/iven__lopez/" />
        <ItemContact IconFa={FaEnvelope} href="mailto:ivenramos10@gmail.com" />
      </Content>
    </Container>
    </div>
  );
}

