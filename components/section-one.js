import React from "react";
import styles from "./section-one.module.css";

const Section1 = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className={styles.section}
      style={{ backgroundColor: "transparent" }}
    >
      <video
        src="/main_video2.mp4"
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        src="/main_video_mobile2.mp4"
        className={styles.videoMobile}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.mainText} style={{ fontFamily: 'Spoqa Han Sans Neo, sans-serif' }}>
        <div>감당하기 힘든 빚, 더이상 희망이 없다고 느낄 때,</div>
        <div className={styles.highlight}>잘 찾아오셨습니다.</div>
      </div>
    </section>
  );
});

Section1.displayName = 'Section1';

export default Section1;
