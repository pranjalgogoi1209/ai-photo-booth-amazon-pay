import React from "react";
import styles from "./homePage.module.css";

import { Link } from "react-router-dom";
// import { cardsArr } from "../../utils/avatar/cards";
import logo from './../../assets/header/logo-white.png';

import one from "./../../assets/home/card01.jpeg";
import two from "./../../assets/home/card02.jpeg";
import three from "./../../assets/home/card03.jpeg";
import four from "./../../assets/home/card04.jpeg";
import Header from "../../components/header/Header";

export default function HomePage() {
  const imgsArr = [one, two, three, four];

  return (
    <div className={`flex-col-center ${styles.HomePage}`}>
      <Header />
      <div className={`flex-col-center ${styles.avatarContainer}`}>
        {imgsArr?.map((item, idx) => (
          <div
            key={idx}
            className={`flex-row-center ${styles.singleImg} ${
              idx == 2 ? "" : ""
            }`}
          >
            <img src={item} alt="avatar" />
          </div>
        ))}
      </div>

      <Link to={"/gender"}>
        <button className={`btn1`}>START</button>
      </Link>
    </div>
  );
}
