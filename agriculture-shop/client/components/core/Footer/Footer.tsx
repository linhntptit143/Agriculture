import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© 2022 Agriculture Shop. All rights reserved.</p>
        <ul className={styles.links}>
          <li>
            <a href="#">
              <FaFacebook size={22} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram size={22} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
