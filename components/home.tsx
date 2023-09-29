/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import styles from './home.module.css';

function BulletPoint() {
    return (
        <Image
        src="https://maxrosenboom.github.io/portfolio-site/bullet-point.png"
        height={20} 
        width={20} 
        alt="Bullet"
        ></Image>
    );
}

function Chain() {
    return (
        <Image 
        src="https://maxrosenboom.github.io/portfolio-site/chain.png"
        height={40} 
        width={40} 
        alt="Link to Source"
        ></Image>
    );
}

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
                            <a className={styles['resume-button']} href="https://maxrosenboom.github.io/portfolio-site/maxrosenboom_resume.pdf">View my résumé</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="experience" className={styles['background-experience']}>
                <h1>Experience</h1>
                <div className={styles['cu-experience']}>
                    <Image className={styles['cu-logo']} src="https://maxrosenboom.github.io/portfolio-site/cu-logo.png" height={100} width={100} alt="CU Boulder Logo"></Image>
                    <div className={styles['cu-text']}>
                        <h2>Student System Administrator</h2>
                        <h3>University of Colorado, Boulder // June 2022 - May 2023</h3>
                        <ul className={styles['cu-description']}>
                            <li className={styles['cu-item']}><BulletPoint /><span className={styles['line']}>Maintained servers using Chef and Ansible technologies.</span></li>
                            <li className={styles['cu-item']}><BulletPoint /><span className={styles['line']}>Built Jenkins pipelines in a Linux/Unix environment.</span></li>
                            <li className={styles['cu-item']}><BulletPoint /><span className={styles['line']}>Designed, deployed, and managed scalable servers and networks.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="projects" className={styles['background-projects']}>
                <h1>Projects</h1>
                <div className={styles['cards']}>
                    <div className={styles['card-1']}>
                        <div className={styles['chain']}>
                            <a href="https://github.com/maxrosenboom/cocktail-recommender">
                                <Chain />
                            </a>
                        </div>
                        <h2>Cocktail Recommender</h2>
                        <h3>A website that recommends a cocktail by looking at similar ingredients to a cocktail submitted by the user.</h3>
                        <p>REST API, scikit-learn, Flask</p>
                    </div>
                    <div className={styles['card-2']}>
                        <div className={styles['chain']}>
                            <a href="https://github.com/maxrosenboom/portfolio-site">
                                <Chain />
                            </a>
                        </div>
                        <h2>Portfolio Website</h2>
                        <h3>You're looking at it! A simple website I've put together to showcase past and current projects and interests.</h3>
                        <p>NodeJS, React, Next.js</p>
                    </div>
                    <div className={styles['card-3']}> 
                        <div className={styles['chain']}>
                            <a href="https://github.com/maxrosenboom/catan-game">
                                <Chain />
                            </a>
                        </div>
                        <h2>Settlers of Catan Clone</h2>
                        <h3>A recreation of the Settlers of Catan game to learn design patterns and Object-Oriented programming.</h3>
                        <p>Java, JavaFX</p>
                    </div>
                </div>
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