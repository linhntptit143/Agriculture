import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import DesktopMenu from '../DesktopMenu';
import MobileMenu from '../MobileMenu';
import Logo from '../../../images/logo.png';

import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <ul className={styles.headerWrapper}>
          <Link href="/">
            <a className={styles.siteTitle}>
              <Image src={Logo} width={50} height={50} />
              Agriculture Shop
            </a>
          </Link>
          <div className={styles.headerRight}>
            <DesktopMenu />
            <MobileMenu />
          </div>
        </ul>
      </header>
    </>
  );
};

export default Header;
