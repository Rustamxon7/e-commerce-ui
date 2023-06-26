import React from 'react';
import styles from './CompanyLogoSlider.module.css';
import nike from '../../assets/companies/nike.png';
import aa from '../../assets/companies/aa.png';
import bb from '../../assets/companies/bb.png';
import ab from '../../assets/companies/aa.png';
const CompanyLogoSlider = () => {
  return (
    <div className={styles.company_logos}>
      <div className={styles.container}>
        <div className={styles.logos}>
          <>
            <img src={nike} alt='' />
            <img src={aa} alt='' />
            <img src={bb} alt='' />
            <img src={ab} alt='' />
            <img src={nike} alt='' />
          </>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogoSlider;
