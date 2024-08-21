import Head from "next/head";

import React from "react";
import styles from "./section-four.module.css";


import lawyer2 from "../assets/lawyer.svg";

const Section4 = React.forwardRef((props, ref) => {
  return (
    <>
      <Head>
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <section ref={ref} className={styles.section}>
        <div
          className={styles.mainText}
          style={{ fontFamily: "Song Myung, serif" }}
        >
          Lawyer
        </div>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <div className={styles.textContainer}>
              <div
                className={styles.title}
                style={{ fontFamily: "Spoqa Han Sans Neo, sans-serif" }}
              >
                당신의 새 삶을 찾아줄<br/>
                검증된 <span className={styles.highlight}>전문가</span>
              </div>
              <div className={styles.name} ><span className={styles.highlight}>김태용</span>  변호사</div>
            </div>
            <img src={lawyer2.src}></img>
          </div>
        </div>
      </section>
    </>
  );
});

export default Section4;
