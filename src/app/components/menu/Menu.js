import React from 'react'
import { Row, Col, Button, Typography } from 'antd';

import { ProfileOutlined } from '@ant-design/icons';

import './Menu.css'

const {Title} = Typography

const Menu = () => {

  return (

    <Row justify="space-around" align="middle" className="menu">
      <Col span={8}> <Title className="title" style={{paddingTop: "7px"}}> Context Flow </Title> </Col>
      <Col style={{textAlign: "center"}} span={8}>
        <Button type="link" className="link" size="large">
          Main
        </Button>
        <Button type="link" className="link" size="large">
          Page 2
        </Button>
        <Button type="link" className="link" size="large">
          About
        </Button>
      </Col>
      <Col style={{textAlign: "right", paddingTop: "7px"}} span={8}>
          <ProfileOutlined style={{ fontSize: '35px', color: "black"}} />
      </Col>
    </Row>


  )

}

export default Menu;