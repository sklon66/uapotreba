import React from 'react';

//redux
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/AppReducer/selectors";

// styles
import styles from './Footer.module.css';

// components
import Text from "../../components/Text";
import SelectLanguage from "../../components/SelectLanguage";

//img
import facebook from '../../assets/img/iconsFacebook.svg'
import arrow from '../../assets/img/Arrow.svg'
import comeBack from '../../assets/img/comeBackAlive.svg'

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
                    <p className={styles.footerTitle}><Text text='have_idea'/></p>
                    <p className={styles.footerSubtitle}><Text text='help_us'/></p>
                </div>
                <a className={styles.feedbackBtn} target='_blank' rel="noreferrer" href={language==='ua' ? 'https://forms.gle/4atY5Vx6Ro1anJea7' : 'https://forms.gle/DMcVaKZ6Sy551jGo7'}>
                    <Text text='leave_feedback'/>
                </a>
            </div>
            <div className={styles.donateSection}>
                <div className={styles.donateTextBlock}>
                    <p className={styles.footerTitle}><Text text='protect_together'/></p>
                </div>
                <a className={styles.donateBtn} target='_blank' rel="noreferrer" href={language==='ua' ? 'https://www.comebackalive.in.ua/uk/donate' : 'https://www.comebackalive.in.ua/donate'}>
                    <img className={styles.comeBackImg} alt='come_back_alive' src={comeBack} />
                    <Text text='donate_afu'/>
                </a>
            </div>
            <div className={styles.linksSection}>
                <p className={styles.linkTitle}><Text text='other_services'/></p>
                <div className={styles.cardsBlock}>
                    {
                        cardsContent.map((card, index)=>(
                            <div className={styles.footerCard} key={index}>
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
                    <a className={styles.facebook} target='_blank' rel="noreferrer" href='https://www.facebook.com/needuacom'>
                        <img alt='facebook' src={facebook} />
                    </a>
                    <a className={styles.phone} href="mailto:support@need-ua.com">support@need-ua.com</a>
                </div>
                <p className={styles.footerText}>2022</p>
            </div>
        </footer>
    );
};

export default Footer;
