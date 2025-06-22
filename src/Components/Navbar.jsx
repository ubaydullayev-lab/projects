import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import './Navbar.css'; 
import { FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top" className="custom-navbar">
        <NavbarBrand href="#about me" className="brand-name">
          Ubaydullayev Lochinbek
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav-links ms-auto d-flex flex-column flex-md-row align-items-md-center justify-content-center" navbar>
            <NavItem><NavLink href="#menhaqimda">{t('navbar.home')}</NavLink></NavItem>
            <NavItem><NavLink href="#projects">{t('navbar.projects')}</NavLink></NavItem>
            <NavItem><NavLink href="#skills">{t('navbar.skills')}</NavLink></NavItem>
            <NavItem><NavLink href="#contact">{t('navbar.contact')}</NavLink></NavItem>
<motion.a
  href="/cv_lochinbek.pdf"
  download
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="btn btn-outline"
>
 {t('navbar.fayl')}
</motion.a>

            {/* Mobile viewda ko‘rinadigan - social icons */}
            <div className="d-md-none d-flex flex-column align-items-start mt-3 ms-2 gap-2">
              <motion.a href="https://www.instagram.com/_ubaydullayev_l_/#" target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                <FaInstagram size={22} color="#E1306C" />
              </motion.a>
              <motion.a href="https://t.me/Ubaydullayev_L" target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                <FaTelegram size={22} color="#229ED9" />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/laziz-ubaysullayev-11389536a" target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                <FaLinkedin size={22} color="#0077B5" />
              </motion.a>

              {/* Language selector mobil */}
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
                className="language-selector mt-2"
              >
                <option value="uz">UZ</option>
                <option value="en">EN</option>
              </select>
            </div>
          </Nav>
        </Collapse>

        {/* Desktop viewda - social icons va lang selector */}
        <div className="spinners d-none d-md-flex ms-3 align-items-center gap-3">
          <motion.a href="https://www.instagram.com/_ubaydullayev_l_/#" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
            <FaInstagram size={25} color="#E1306C" />
          </motion.a>
          <motion.a href="https://t.me/Ubaydullayev_L" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
            <FaTelegram size={25} color="#229ED9" />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/laziz-ubaysullayev-11389536a" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.2, rotate: 3 }} whileTap={{ scale: 0.9 }}>
            <FaLinkedin size={25} color="#0077B5" />
          </motion.a>

          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            className="language-selector"
          >
            <option value="uz">UZ</option>
            <option value="en">EN</option>
          </select>
        </div>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
