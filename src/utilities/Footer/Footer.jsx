import React from 'react';
import SubscribeToNewsLetter from './SubscribeToNewsLetter';
import styles from './Footer.module.css';
import { SlSocialGoogle } from 'react-icons/sl';
import { ImFacebook2 } from 'react-icons/im';
import { BsWhatsapp } from 'react-icons/bs';
import asu from '../../assets/companies/asu.png';
import { GoPrimitiveDot } from 'react-icons/go';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        {/* <SubscribeToNewsLetter /> */}
        <div className={styles.container}>
          <div className={styles.address}>
            <img className={styles.picture} src={asu} alt='' />
            <p className={styles.address_info}>
              64 st james boulevard <br /> hoswick , ze2 7zj
            </p>
            <hr />
            <div className={styles.icons}>
              <SlSocialGoogle className={styles.icon} />
              <ImFacebook2 className={styles.icon} />
              <BsWhatsapp className={styles.icon} />
            </div>
          </div>

          <div className={styles.info}>
            <h1 className={styles.title}>Find Product</h1>
            <ul className={styles.links}>
              <li>
                <GoPrimitiveDot className={styles.dot} />
                <a href='#'>Brownze arnold</a>
              </li>
              <li>
                <GoPrimitiveDot className={styles.dot} />
                <a href='#'>Chronograph blue</a>
              </li>
              <li>
                <GoPrimitiveDot className={styles.dot} />
                <a href='#'>Smart phones</a>
              </li>
              <li>
                <GoPrimitiveDot className={styles.dot} />
                <a href='#'>Automatic watch</a>
              </li>
              <li>
                <GoPrimitiveDot className={styles.dot} />
                <a href='#'>Hair Straighteners</a>
              </li>
            </ul>
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>Get help</h1>

            <ul className={styles.links}>
              <li>
                <GoPrimitiveDot className={styles.dot} />
                <a href='#'>About us</a>
              </li>
              <li>
                <GoPrimitiveDot className={styles.dot} />
                <a href='#'>Contact us</a>
              </li>
              <li>
                <GoPrimitiveDot className={styles.dot} />
                <a href='#'>Return policy</a>
              </li>
              <li>
                <GoPrimitiveDot className={styles.dot} />
                <a href='#'>Privacy policy</a>
              </li>
              <li>
                <GoPrimitiveDot className={styles.dot} />
                <a href='#'>Payment policy</a>
              </li>
            </ul>
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>About us</h1>

            <ul className={styles.links}>
              <li>
                <GoPrimitiveDot className={styles.dot} />
                <a href='#'>News</a>
              </li>
              <li>
                <GoPrimitiveDot className={styles.dot} />
                <a href='#'>Service</a>
              </li>
              <li>
                <GoPrimitiveDot className={styles.dot} />
                <a href='#'>Our policy</a>
              </li>
              <li>
                <GoPrimitiveDot className={styles.dot} />
                <a href='#'>Custmer care</a>
              </li>
              <li>
                <GoPrimitiveDot className={styles.dot} />
                <a href='#'>Faq's'</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
