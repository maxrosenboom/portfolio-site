import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../components/navbar.module.css';

export default function Header() {
    return (
      <nav className={styles['navbar']}>
        <ul>
          <li className={styles['nav-button']}><a className={styles['nav-link']} href="#">HOME</a></li>
          <li className={styles['nav-button']}><Link className={styles['nav-link']} href="#experience">EXPERIENCE</Link></li>
          <li className={styles['nav-button']}><a className={styles['nav-link']} href="#projects">PROJECTS</a></li>
          <li className={styles['nav-button']}><a className={styles['nav-link']} href="#contact">CONTACT</a></li>
        </ul>
        <div className={styles['nav-icons']}>
          <a href="https://www.linkedin.com/in/max-rosenboom/" className={styles['nav-icon']}>
            <FaLinkedin />
          </a>
          <a href="https://github.com/maxrosenboom" className={styles['nav-icon']}>
            <FaGithub />
          </a>
        </div>
      </nav>
    );
  }