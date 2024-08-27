import React from "react";
import styles from "./genderPage.module.css";
import { useNavigate } from "react-router-dom";

import selectGenderTxt from "./../../assets/gender/selectGenderTxt.svg";
import maleBtn from "./../../assets/gender/maleBtn.svg";
import femaleBtn from "./../../assets/gender/femaleBtn.svg";

import maleIcon from './../../assets/gender/male_icon.png';
import femaleIcon from './../../assets/gender/female_icon.png';
import selectIcon from './../../assets/gender/select2.png'

export default function GenderPage({ setGender }) {
  const navigate = useNavigate();

  return (
    <div className={`flex-col-center ${styles.GenderPage}`}>
      <div className={`imgContainer ${styles.selectGenderTxt}`}>
        {/* <img src={selectGenderTxt} alt="select-gender-text" /> */}
        <h2>Select Your Gender</h2>
      </div>

      <div className={`flex-row-center ${styles.genderContainer}`}>
        <div className={`${styles.imgContainer} ${styles.maleImg}`} onClick={()=>setGender('male')}>
          {/* 
            add here select gender=='male
          */}
          <img src={maleIcon} alt="" />
        </div>
        <div className={` ${styles.imgContainer} ${styles.femaleImg}`} onClick={()=>setGender('female')}>
          <img src={femaleIcon} alt="" />
        </div>
      </div>

      <button onClick={()=>navigate('/camera')}>submit</button>
      {/* <div className={`flex-col-center ${styles.genderBtn}`}>
        <div
          onClick={() => {
            setGender("male");
            navigate("/camera");
          }}
          className={`imgContainer ${styles.femaleBtn}`}
        >
          <img src={maleBtn} alt="male" />
        </div>
        <div
          onClick={() => {
            setGender("female");
            navigate("/camera");
          }}
          className={`imgContainer ${styles.femaleBtn}`}
        >
          <img src={femaleBtn} alt="female" />
        </div>
      </div> */}
    </div>
  );
}
