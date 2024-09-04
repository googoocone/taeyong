import styles from "./nav-right.module.css";

import chat from "../assets/section1/chat.svg";
import phone from "../assets/section1/phone.svg";
import visit from "../assets/section1/visit.svg";

export default function NavRight() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <a href="http://pf.kakao.com/_gxiDhn" target="_blank">
          <img src={chat.src}></img>
        </a>
      </div>
      <div className={styles.mid}>
        <a href="tel:031-215-0508">
          <img src={phone.src}></img>
        </a>
      </div>
      <div className={styles.bottom}>
        <a
          href="https://map.naver.com/p/search/%EC%88%98%EC%9B%90%20%EA%B0%9C%EC%9D%B8%ED%9A%8C%EC%83%9D/place/1355945703?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh"
          target="_blank"
        >
          <img src={visit.src}></img>
        </a>
      </div>
    </div>
  );
}
