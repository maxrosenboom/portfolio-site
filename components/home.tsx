import React from 'react';
import Image from 'next/image';
import styles from './home.module.css';

export default function Page() {
    return (
        <div>
            <div className={styles['background-home']}>
                <div className={styles['header']}>
                    <h1 className={styles['intro-header']}>Hi, my name is Max Rosenboom</h1>
                    <p className={styles['intro-paragraph']}>I'm a computer science graduate from CU Boulder based in Colorado. I'm bilingual in Dutch, and outside of software technologies I have a passion for aviation and aerospace. I'm also interested in the world of finance, and am always down to talk about fintech and trading on the stock markets.</p>
                    <div>
                        <div className={styles['resume']}>
                            <p className={styles['resume-text']}>No time to look around?</p>
                            <a className={styles['resume-button']} href="/maxrosenboom_resume.pdf">View my résumé</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="experience" className={styles['background-experience']}>
                <h1>Experience</h1>
                <div className={styles['cu-experience']}>
                    <Image className={styles['cu-logo']} src="/cu-logo.png" height={100} width={100} alt="CU Boulder Logo"></Image>
                    <div className={styles['cu-text']}>
                        <h2>Student System Administrator</h2>
                        <h3>University of Colorado, Boulder // June 2022 - May 2023</h3>
                        <ul className={styles['cu-description']}>
                            <li className={styles['cu-item']}><Image src="/bullet-point.png" height={20} width={20} alt="Bracket"></Image><span className={styles['line']}>Maintained servers using Chef and Ansible technologies.</span></li>
                            <li className={styles['cu-item']}><Image src="/bullet-point.png" height={20} width={20} alt="Bracket"></Image><span className={styles['line']}>Built Jenkins pipelines in a Linux/Unix environment.</span></li>
                            <li className={styles['cu-item']}><Image src="/bullet-point.png" height={20} width={20} alt="Bracket"></Image><span className={styles['line']}>Designed, deployed, and managed scalable servers and networks.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="projects" className={styles['background-projects']}>
                <h1>Projects</h1>
            </div>
            <div id="contact" className={styles['background-contact']}>
                <div className={styles['contact-box']}>
                    <h1>Get in touch!</h1>
                    <h3>I'm always open to new opportunities or just starting a conversation. Feel free to reach out!</h3>
                    <div className={styles['contact-email']}>
                        <a href="mailto:maxrosenboom@gmail.com">maxrosenboom@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}