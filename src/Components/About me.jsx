import React from 'react';
import { Typography, Button, Avatar } from 'antd';
import { Typewriter } from 'react-simple-typewriter';
import './About me.css'; 

import myPhoto from '../assets/myphoto.jpg'; 

function Menhaqimda() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <Avatar
        className='laska'
          src={myPhoto}
          size={120}
          style={{ marginBottom: 20 , }}
        />
        <Typography.Title style={{ color: 'white' }} level={2}>
          Salom, mening to'liq ismim Ubaydullayev Lochinbek👋
        </Typography.Title>
        <Typography.Title style={{ color: '#00f5ff' }} level={4}>
        
          <Typewriter
            words={['Frontend Developer', 'React Enthusiast', 'Web Designer']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </Typography.Title>
        <p style={{ color: '#ddd', maxWidth: 800, marginTop: 10 , }} >
          Men zamonaviy va funksional veb-ilovalar ishlab chiqishga qiziqaman. Quyidagi bo‘limda loyihalarim bilan tanishishingiz mumkin.
        </p>
        <Button
          type="primary"
          size="large"
          style={{ marginTop: 30 }}
          href="#projects"
          className=' fw-bolder text-decoration-none text-uppercase'
        >
          Projects
        </Button>
      </div>
    </section>
  );
}

export default Menhaqimda;
