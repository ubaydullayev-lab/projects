import React from 'react';
import { Typography, Button, Avatar } from 'antd';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
import './About me.css'; 
import myPhoto from '../assets/myphoto.jpg';

function Menhaqimda() {
  const { t } = useTranslation();

  return (
    <section className="hero-section" id='menhaqimda'>
      <div className="hero-content">
        <Avatar
          className='laska'
          src={myPhoto}
          size={120}
          style={{ marginBottom: 20 }}
        />
        <Typography.Title style={{ color: 'white' }} level={2}>
          {t("about.title")}
        </Typography.Title>
        <Typography.Title style={{ color: '#00f5ff' }} level={4}>
          <Typewriter
            words={[
              t("about.role1"),
              t("about.role2"),
              t("about.role3")
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </Typography.Title>
        <p style={{ color: '#ddd', maxWidth: 800, marginTop: 10 }}>
          {t("about.description")}
        </p>
        <Button
          type="primary"
          size="large"
          style={{ marginTop: 30 }}
          href="#projects"
          className='fw-bolder text-decoration-none text-uppercase'
        >
          {t("about.button")}
        </Button>      
      </div>
    </section>
  );
}

export default Menhaqimda;
