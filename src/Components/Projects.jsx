import React from 'react';
import { Card, Typography, Row, Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css'; 
import firstCode from '../assets/My-first-code.jpg'; // Rasmingizni shu manzilda saqlang
import projectVid from '../assets/my_vidio.mp4'
import {
Button
} from 'reactstrap';
import ModalFullscreenExample from '../Alohida/FULLSCREEN';






const { Title, } = Typography;

function Projects() {
  return (
   <section id="projects" className="projects-section mx-5 mt-5">
  <Title level={2} style={{ textAlign: 'center', color: '#00f5ff', marginTop: '-30px' }}>
    <span >
    Loyiha va Dasturlash Yo‘lim</span>
  </Title>

  <Row gutter={[24, 24]} justify="center" className='mt-5'>
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
        <span><ModalFullscreenExample/></span>
      </Card>
    </Col>

    <Col xs={24} sm={12} md={8} className='bg-transparent'>
      <Card className='bg-transparent'
        hoverable
        cover={
          <video width={"800px"}
          controls 
          muted
          border
          autoplay
            alt="Oxirgi loyiha"
        src={projectVid}
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
            <p  style={{ fontWeight: 'bold', color: '#00f5ff', textAlign:'center' }}>
              Faqat HTML, CSS, JavaScript va Bootsrap yordamida yaratilgan portfolio sayti.
              Fully responsive, zamonaviy va professional.

            </p>
            
          }
        />
<div>
  <Button justify='center'
    
    color="success"
    
  >
    <a href="https://onlinefood2025.netlify.app/" target='_blank' rel="noreferrer" className='text-reset text-decoration-none fw-bolder'>SAYTIM</a>
    
  </Button>
</div>
      </Card>
    </Col>
  </Row>
</section>
  );
}

export default Projects;
