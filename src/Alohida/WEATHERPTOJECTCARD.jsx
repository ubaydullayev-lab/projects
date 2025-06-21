import React from 'react';
import { Card, Tag } from 'antd';
import { Button } from 'reactstrap';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import weatherImg from '../assets/Weather-preview.png';

const { Meta } = Card;

function WeatherProjectCard() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Card
        hoverable
        className="bg-transparent text-white"
        cover={
          <img
            alt={t('weather.alt')}
            src={weatherImg}
            style={{ borderRadius: '25px', height: '300px', objectFit: 'cover' }}
          />
        }
      >
        <div className="text-center mb-2">
          <Tag color="blue">React</Tag>
          <Tag color="cyan">Vite</Tag>
          <Tag color="purple">API</Tag>
          <Tag color="green">CSS</Tag>
          <Tag color="green">Real Project</Tag>
        </div>

        <p className='text-dark text-center'>
          <strong>{t('weather.learned')}:</strong> {t('weather.skills')}
        </p>

        <Meta
          title={<h3 style={{ fontWeight: 'bold', textAlign: 'center', color: 'yellow' }}>{t('weather.title')}</h3>}
          description={
            <p style={{ fontWeight: 'bold', color: 'aqua', textAlign: 'center', fontSize: '15px' }}>
              {t('weather.description')}
            </p>
          }
        />

        <div className='text-center mt-3'>
          <Button
            color="info"
            className='fw-bolder'
            style={{ backgroundColor: '#00f5ff', border: 'none' }}
          >
            <a
              href="https://weatherchange2025.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className='text-dark text-decoration-none'
            >
              {t('weather.button')}
            </a>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

export default WeatherProjectCard;
