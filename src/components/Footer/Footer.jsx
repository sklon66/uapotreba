import React from 'react';

//redux
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/AppReducer/selectors";

// styles
import styles from './Footer.module.css';

// components
import Text from "../Text";
import SelectLanguage from "../SelectLanguage";

//img
import facebook from '../../assets/img/iconsFacebook.svg'
import arrow from '../../assets/img/Arrow.svg'

//config
import { getContent } from "./config";

function Footer () {
    const language = useSelector(selectLanguage);

    const cardsContent = getContent(language);

    return (
        <footer className={styles.footer}>
            <div className={styles.topContent}>
                <div className={styles.fullLogoWrap}>
                    <Text text='Need.ua'/>
                </div>
                <SelectLanguage />
            </div>
            <div className={styles.ideaSection}>
                <div className={styles.ideaTextBlock}>
                    <p className={styles.footerTitle}><Text text='Маєте ідею?'/></p>
                    <p className={styles.footerSubtitle}><Text text='Допоможіть нам покращити платформу'/></p>
                </div>
                <a className={styles.feedbackBtn} target='_blank' rel="noreferrer" href='https://forms.gle/ZZy6MEBxejUTkKe27'>
                    <Text text='Залишити відгук'/>
                </a>
            </div>
            <div className={styles.linksSection}>
                <p className={styles.linkTitle}><Text text='Інші корисні сервіси'/></p>
                <div className={styles.cardsBlock}>
                    {
                        cardsContent.map((card)=>(
                            <div className={styles.footerCard}>
                                <p className={styles.cardTitle}>
                                    <Text text={card.title} />
                                </p>
                                <p className={styles.cardBottom}>
                                    <a className={styles.linkText} target='_blank' rel="noreferrer" href={card.link}>
                                        {card.link}
                                    </a>
                                    <img alt='arrow' src={arrow}/>
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.bottomContent}>
                <div className={styles.bottomContentLeft}>
                    <a className={styles.facebook} target='_blank' rel="noreferrer" href='https://www.google.com/'>
                        <img alt='facebook' src={facebook} />
                    </a>
                    <a className={styles.phone} href="tel:+380 (073) 574 45 33">+380 (073) 574 45 33</a>
                </div>
                <p className={styles.footerText}>2022</p>
            </div>
        </footer>
    );
};

export default Footer;
