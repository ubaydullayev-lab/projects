import React, { useEffect } from 'react';
import { Card, Typography, Row, Col, Tag } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

import firstCode from '../assets/My-first-code.jpg';
import projectVid from '../assets/my_vidio.mp4';
import projectVidio2 from '../assets/my_vidio2.mp4';
import { Button } from 'reactstrap';
import ModalFullscreenExample from '../Alohida/FULLSCREEN';
import WeatherProjectCard from '../Alohida/WEATHERPTOJECTCARD';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const { Title } = Typography;

function Projects() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="projects-section mx-5 mt-5">
      <Title level={2} style={{ textAlign: 'center', color: '#00f5ff', marginTop: '-30px' }}>
        {t('projects.title')}
      </Title>

      <Row gutter={[24, 24]} justify="center" className='mt-5'>
        {/* Birinchi loyiha */}
        <Col xs={24} sm={12} md={8} data-aos="fade-up">
          <Card 
            className='bg-transparent text-center'
            hoverable
            cover={
              <img
                alt="My First Code"
                src={firstCode}
                style={{ 
                  borderRadius:'100px',
                  height: '300px',
                  objectFit: 'contain',
                  padding: '20px'
                }}
              />
            }
          >
            <div className="tech-badges text-center mb-2">
              <Tag color="blue">HTML</Tag>
            </div>
            <p className='text-secondary'><strong>{t('projects.learned')}:</strong> {t('projects.firstLearned')}</p>
            <Card.Meta
              title={<h3 style={{ fontWeight: 'bold', textTransform:'capitalize' }}>{t('projects.firstTitle')}</h3>}
              description={
                <p style={{ fontWeight: 'bold', color: '#00f5ff' }}>
                  {t('projects.firstDesc')}
                </p>
              }
            />
            <span><ModalFullscreenExample/></span>
          </Card>
        </Col>

        {/* Ikkinchi loyiha */}
        <Col xs={24} sm={12} md={8} className='bg-transparent' data-aos="zoom-in">
          <Card className='bg-transparent'
            hoverable
            cover={
              <video width="800px" controls muted autoPlay
                src={projectVid}
                style={{ borderRadius:'50px', height: '300px', objectFit: 'contain', padding: '20px' }}
              />
            }
          >
            <div className="tech-badges text-center mb-2">
              <Tag color="blue">HTML</Tag>
              <Tag color="cyan">CSS</Tag>
              <Tag color="purple">Bootstrap</Tag>
              <Tag color="red">Clone App</Tag>
            </div>
            <p className='text-secondary'><strong>{t('projects.learned')}:</strong> {t('projects.secondLearned')}</p>
            <Card.Meta
              title={<h3 style={{ fontWeight: 'bold', color:'orange' }}>🚀 Portfolio Web App</h3>}
              description={
                <p style={{ fontWeight: 'bold', color: '#00f5ff', textAlign:'center' }}>
                  {t('projects.secondDesc')}
                </p>
              }
            />
            <div>
              <Button style={{ backgroundColor:'rgb(247, 134, 36)' }}>
                <a href="https://onlinefood2025.netlify.app/" target='_blank' rel="noreferrer" className='text-reset text-decoration-none fw-bolder'>{t('projects.button')}</a>
              </Button>
            </div>
          </Card>
        </Col>

        {/* Uchinchi loyiha */}
        <Col xs={24} sm={12} md={8} className='bg-transparent' data-aos="fade-left">
          <Card className='bg-transparent'
            hoverable
            cover={
              <video width="800px" controls muted autoPlay
                src={projectVidio2}
                style={{ borderRadius:'50px', height: '300px', objectFit: 'contain', padding: '20px' }}
              />
            }
          >
            <div className="tech-badges text-center mb-2">
              <Tag color="blue">HTML</Tag>
              <Tag color="cyan">CSS</Tag>
              <Tag color="gold">Portfolio</Tag>
            </div>
            <p><strong>{t('projects.learned')}:</strong> {t('projects.thirdLearned')}</p>
            <Card.Meta
              title={<h3 style={{ fontWeight: 'bold' }}>🚀 Portfolio Web App</h3>}
              description={
                <p style={{ fontWeight: 'bold', color: '#00f5ff', textAlign:'center' }}>
                  {t('projects.thirdDesc')}
                </p>
              }
            />
            <div>
              <Button className='bg-dark outline-none' color="success">
                <a href="https://planplatform.netlify.app/" target='_blank' rel="noreferrer" className='text-secondary text-decoration-none fw-bolder'>{t('projects.button')}</a>
              </Button>
            </div>
          </Card>
        </Col>

        <Col span={24}>
          <h1 className='text-capitalize text-center mt-5 mb-2 ' style={{color:'#00f5ff'}}>{t('projects.bigTitle')}</h1>
          <WeatherProjectCard/>
        </Col>
      </Row>
    </section>
  );
}

export default Projects;
