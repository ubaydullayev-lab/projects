import React from 'react';
import { FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#111', color: 'white', padding: '30px 20px', textAlign: 'center' }}>
      <p>&copy; {year} Ubaydullayev Lochinbek. {t('footer.rights')}</p>

      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        {['menhaqimda', 'projects', 'skills', 'contact'].map((id) => (
          <motion.a
            key={id}
            href={`#${id}`}
            style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', position: 'relative' }}
            whileHover={{ color: '#00f5ff' }}
            transition={{ duration: 0.3 }}
          >
            {t(`navbar.${id}`)}
          </motion.a>
        ))}
      </div>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '25px' }}>
        <motion.a
          href="https://www.instagram.com/_ubaydullayev_l_/#"
          target="_blank"
          rel="noreferrer"
          whileHover={{ rotate: 15, scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaInstagram size={22} color="#E1306C" />
        </motion.a>

        <motion.a
          href="https://t.me/Ubaydullayev_L"
          target="_blank"
          rel="noreferrer"
          whileHover={{ rotate: -15, scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaTelegram size={22} color="#229ED9" />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/laziz-ubaysullayev-11389536a"
          target="_blank"
          rel="noreferrer"
          whileHover={{ rotate: 10, scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaLinkedin size={22} color="#0077B5" />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
