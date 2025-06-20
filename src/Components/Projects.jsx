import React from 'react';
import { Card, Typography, Row, Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

import firstCode from '../assets/My-first-code.jpg'; // Rasmingizni shu manzilda saqlang

const { Title, Paragraph } = Typography;

function Projects() {
  return (
   <section id="projects" className="projects-section mx-5 mt-5">
  <Title level={2} style={{ textAlign: 'center', color: '#00f5ff', marginTop: '-30px' }}>
    Loyiha va Dasturlash Yo‘lim
  </Title>

  <Row gutter={[24, 24]} justify="center">
    {/* Birinchi yozgan kodlar */}
    <Col xs={24} sm={12} md={8}>
      <Card 
        className='bg-transparent text-center'
        hoverable
        cover={
          <img
            alt="My First Code"
            src={firstCode}
            style={{ 
              height: '300px',
              objectFit: 'contain',
              padding: '20px'
            }}
          />
        }
      >
        <Card.Meta
          title={<h3 style={{ fontWeight: 'bold' }}>Birinchi yozgan kodlarim!🫡</h3>}
          description={
            <p style={{ fontWeight: 'bold', color: '#00f5ff' }}>
              Bu mening dasturlashdagi ilk qadamlardan biri. HTML va CSS bilan
              oddiy sahifa yasagandim. Kodga bo‘lgan qiziqishim shu yerda boshlandi.
            </p>
          }
        />
      </Card>
    </Col>

    <Col xs={24} sm={12} md={8}>
      <Card
        hoverable
        cover={
          <img
            alt="Oxirgi loyiha"
        
            style={{ 
              height: '300px',
              objectFit: 'contain',
              padding: '20px'
            }}
          />
        }
      >
        <Card.Meta
          title={<h3 style={{ fontWeight: 'bold' }}>🚀 Portfolio Web App</h3>}
          description={
            <p>
              React, AntD va animatsiyalar yordamida yaratilgan portfolio sayti.
              Fully responsive, zamonaviy va professional.
            </p>
          }
        />
      </Card>
    </Col>
  </Row>
</section>
  );
}

export default Projects;
