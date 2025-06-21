import React from 'react';
import { Progress, Typography, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from 'react-icons/fa';
import { AntDesignOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

function Skills() {
  const { t } = useTranslation();

  const skills = [
    { name: t('skills.html'), percent: 100, color: 'orange', icon: <FaHtml5 size={24} color="orange" /> },
    { name: t('skills.css'), percent: 100, color: 'blue', icon: <FaCss3Alt size={24} color="blue" /> },
    { name: t('skills.js'), percent: 60, color: 'gold', icon: <FaJs size={24} color="gold" /> },
    { name: t('skills.react'), percent: 50, color: 'cyan', icon: <FaReact size={24} color="cyan" /> },
    { name: t('skills.bootstrap'), percent: 100, color: 'purple', icon: <FaBootstrap size={24} color="purple" /> },
    { name: t('skills.antd'), percent: 40, color: 'red', icon: <AntDesignOutlined style={{ fontSize: 24, color: 'red' }} /> },
  ];

  return (
    <section id="skills" className="mx-5 mt-5 gap-5 ">
      <Title level={2} style={{ textAlign: 'center', color: '#1c1c1c', fontSize:'40px ', fontWeight:'800', textTransform:'uppercase', fontFamily:'italic'}}>
        {t('skills.title')}
      </Title>

      <Row gutter={[32, 32]} justify="center" className='mt-5 gap-5' >
        {skills.map((skill, idx) => (
          <Col xs={24} sm={12} md={8} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="p-3 border rounded shadow-lg"
              style={{ background: '#1c1c1c ', color:'white', borderRadius: '16px' }}
            >
              <div className="d-flex align-items-center mb-2 gap-2">
                {skill.icon}
                <h4 style={{ color: '#ccc', margin: 0 }}>{skill.name}</h4>
              </div>
              <Progress
                percent={skill.percent}
                strokeColor={skill.color}
                showInfo={true}
                format={percent => (
                  <span style={{ color: 'white', fontWeight: 'bold' }}>{percent}%</span>
                )}
              />
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Skills;
