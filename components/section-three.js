import React from "react";
import styles from "./section-three.module.css";

import { useState } from "react";

import coin1 from "../assets/section3/coin1.png";
import coin2 from "../assets/section3/coin2.png";
import coin3 from "../assets/section3/coin3.png";
import coin4 from "../assets/section3/coin4.png";
import coin5 from "../assets/section3/coin5.png";

import business1 from "../assets/section3/business1.png";
import business2 from "../assets/section3/business2.png";
import business3 from "../assets/section3/business3.png";
import business4 from "../assets/section3/business4.png";
import business5 from "../assets/section3/business5.png";

import life1 from "../assets/section3/life1.png";
import life2 from "../assets/section3/life2.png";
import life3 from "../assets/section3/life3.png";
import life4 from "../assets/section3/life4.png";
import life5 from "../assets/section3/life5.png";

import gamble1 from "../assets/section3/gamble1.png";
import gamble2 from "../assets/section3/gamble2.png";
import gamble3 from "../assets/section3/gamble3.png";
import gamble4 from "../assets/section3/gamble4.png";
import gamble5 from "../assets/section3/gamble5.png";

import fraud1 from "../assets/section3/fraud1.png";
import fraud2 from "../assets/section3/fraud2.png";
import fraud3 from "../assets/section3/fraud3.png";
import fraud4 from "../assets/section3/fraud4.png";
import fraud5 from "../assets/section3/fraud5.png";

let coin = [coin1, coin2, coin3, coin4, coin5];
let business = [business1, business2, business3, business4, business5];
let life = [life1, life2, life3, life4, life5];
let gamble = [gamble1, gamble2, gamble3, gamble4, gamble5];
let fraud = [fraud1, fraud2, fraud3, fraud4, fraud5];

const Section3 = React.forwardRef((props, ref) => {
  const [prove, setProve] = useState(coin);

  const handleNav = (num, event) => {
    event.preventDefault();

  
    if (num === 1) {
      setProve(coin);
    } else if (num === 2) {
      setProve(business);
    } else if (num === 3) {
      setProve(life);
    } else if (num === 4) {
      setProve(gamble);
    } else {
      setProve(fraud);
    }
  
  };
  
  
  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.title}>
            <span className={styles.highlight}>성공사례</span>
            <span className={styles.remove}>
              {" "}
              대표 변호사가 직접 관리하면 성과도 다릅니다.
            </span>
          </div>
          <div className={styles.nav}>
            <button onClick={(e) => handleNav(1, e)}>주식,코인</button>
            <button onClick={(e) => handleNav(2, e)}>사업실패</button>
            <button onClick={(e) => handleNav(3, e)}>생활비</button>
            <button onClick={(e) => handleNav(4, e)}>도박</button>
            <button onClick={(e) => handleNav(5, e)}>부동산 투자</button>
          </div>
          <div className={styles.proveContainer}>
            {prove.map((el) => {
              return (
                <div className={styles.prove}>
                  <img src={el.src}></img>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Section3;
