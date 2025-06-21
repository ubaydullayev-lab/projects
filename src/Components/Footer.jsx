import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import emailjs from '@emailjs/browser';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, SendOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { FaInstagram, FaTelegram, FaLinkedin, FaYoutube, FaTiktok, FaXTwitter } from 'react-icons/fa6';

const { Title } = Typography;

function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    emailjs.send('service_19ivujb', 'template_3luxu7w', values, 'uG2XcMP-fpnpVmY8C')
      .then(() => {
        form.resetFields();
        console.log('Email yuborildi');
      })
      .catch((error) => {
        console.error('Xatolik:', error);
      });
  };

  return (
    <section id="contact" style={{ padding: '80px 20px', background: 'linear-gradient(145deg, #111, #1a1a1a)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', color: 'white' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

          <Title level={2} style={{ textAlign: 'center', color: '#00f5ff' }}>Bog‘lanish</Title>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', marginTop: '50px' }}>

            {/* FORM */}
            <div style={{ flex: 1, minWidth: '300px', background: '#222', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
              <Form layout="vertical" onFinish={onFinish} form={form}>
                <Form.Item name="name" rules={[{ required: true, message: 'Ismingizni kiriting!' }]} label={<span style={{ color: '#00f5ff' }}>Ismingiz</span>}>
                  <Input placeholder="Ismingiz" size="large" />
                </Form.Item>

                <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Emailni kiriting!' }]} label={<span style={{ color: '#00f5ff' }}>Email</span>}>
                  <Input placeholder="Email manzilingiz" size="large" />
                </Form.Item>

                <Form.Item name="message" rules={[{ required: true, message: 'Xabaringizni yozing!' }]} label={<span style={{ color: '#00f5ff' }}>Xabar</span>}>
                  <Input.TextArea rows={5} placeholder="Xabaringiz..." />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" icon={<SendOutlined />} htmlType="submit" size="large" style={{ background: '#00f5ff', borderColor: '#00f5ff', color:'black' }}>
                    Yuborish
                  </Button>
                </Form.Item>
              </Form>
            </div>

            {/* CONTACT INFO */}
            <div style={{ flex: 1, minWidth: '250px', background: '#222', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
              <h3 style={{ color: '#00f5ff', marginBottom: '20px' }}>Kontaktlar</h3>
              <p><PhoneOutlined style={{ color: '#00f5ff' }} /> &nbsp; +998-91-521-92-90  <span style={{color:'#00f5ff'}} > yoki </span>  +998-90-100-95-81</p>
              <p><MailOutlined style={{ color: '#00f5ff' }} /> &nbsp; lochinbekubaydullayev2008@gmail.com</p>
              <p><EnvironmentOutlined style={{ color: '#00f5ff' }} /> &nbsp; Samarqand, O‘zbekiston</p>

              <div style={{ marginTop: '30px' }}>
                <h4 style={{ color: '#00f5ff', marginBottom: '15px', textTransform:'capitalize' }}>Ijtimoiy tarmoqlar 🌐</h4>
                <div style={{ display: 'flex', gap: '90px', marginTop: '50px', flexWrap: 'wrap' }}>
                  <motion.a href="https://www.instagram.com/_ubaydullayev_l_/#" target="_blank" rel="noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <FaInstagram size={30} color="#E1306C" />
                  </motion.a>
                  <motion.a href="https://t.me/Ubaydullayev_L" target="_blank" rel="noreferrer" whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <FaTelegram size={30} color="#229ED9" />
                  </motion.a>
                  <motion.a href="https://www.linkedin.com/in/laziz-ubaysullayev-11389536a" target="_blank" rel="noreferrer" whileHover={{ scale: 1.2, rotate: 3 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <FaLinkedin size={30} color="#0077B5" />
                  </motion.a>
                  <motion.a href="https://youtube.com/@youtube_lochinbek?si=pzx2Y4MRr4Luiufi" target="_blank" rel="noreferrer" whileHover={{ scale: 1.2, rotate: -4 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <FaYoutube size={30} color="#FF0000" />
                  </motion.a>
                  <motion.a href="https://www.tiktok.com/@........12........l?..." target="_blank" rel="noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <FaTiktok size={26} color="white" />
                  </motion.a>
                  <motion.a href="https://x.com/Lochin008?s=09" target="_blank" rel="noreferrer" whileHover={{ scale: 1.2, rotate: -3 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <FaXTwitter size={30} color="white" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
