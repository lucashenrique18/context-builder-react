import React from "react"
import './App.css'
import { Layout, Typography, Divider, Row, Col, Button } from 'antd';
import Menu from './components/menu/Menu'

const { Text, Title } = Typography

const { Header, Content, Footer } = Layout;

const App = () => {

  return (

    <Layout className="layout">
      <Header style={{background: "#ffffff"}}>
        <Menu />
      </Header>
      <Content className="container">

        <div style={{ textAlign: 'center', padding: "30px", fontFamily: "Open Sans" }}>
          <Title level={2} style={{ marginBottom: "0px"}}> <i>Flow Design</i></Title>
          <Text type="secondary">Criação de contexto, inserir as principais configurações abaixo.</Text>
        </div>

        <Row justify="space-around" align="middle" className="builderOptions" style={{background: "#ffffff", padding: "30px"}}>
          <Col style={{textAlign: "center"}} span={8}>
            <Button type="link" className="link" size="large">
              {"Add Modulo"}
            </Button>
            <Button type="link" className="link" size="large">
              {"Buscar Modulo"}
            </Button>
            <Button type="link" className="link" size="large">
              {"Deletar Modulo"}
            </Button>
          </Col>
        </Row>

        <Divider style={{fontFamily: "Pacifico"}}>Build Your Flow</Divider>

        <div className="layoutContent">
          O que é Lorem Ipsum?
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
        </div>

      </Content>
      <Footer style={{ textAlign: 'center' }}> Created by Lucas Henrique ©2020 </Footer>
    </Layout>

  )

}

export default App;