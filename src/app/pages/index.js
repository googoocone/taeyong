"use client";

import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/index.module.css";

import NavLeft from "../../../components/nav-left";
import Section1 from "../../../components/section-one";
import Section2 from "../../../components/section-two";
import Section3 from "../../../components/section-three";
import Section4 from "../../../components/section-four";
import Section5 from "../../../components/section-five";

import Header from "../../../components/haeder";

export default function Index() {
  const sectionRefs = useRef([]);
  const isScrolling = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const scrollToSection = (index) => {
    console.log("z");
    isScrolling.current = true;
    const targetSection = sectionRefs.current[index];
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setActiveIndex(index);

      setTimeout(() => {
        isScrolling.current = false;
      }, 50);
    }
  };

  useEffect(() => {
    let currentSectionIndex = 0;

    const handleScroll = (deltaY) => {
      console.log("e");
      if (isScrolling.current) return;
      console.log("deltaY", deltaY);

      if (deltaY > 0) {
        if (currentSectionIndex < sectionRefs.current.length - 1) {
          currentSectionIndex++;
          scrollToSection(currentSectionIndex);
        }
      } else {
        if (currentSectionIndex > 0) {
          currentSectionIndex--;
          scrollToSection(currentSectionIndex);
        }
      }
    };

    const handleWheel = (e) => {
      console.log("a");
      handleScroll(e.deltaY);
    };

    const handleTouchStart = (e) => {
      console.log("b");
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      console.log("c");
      touchEndY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      console.log("d");
      const deltaY = touchStartY.current - touchEndY.current;

      if (Math.abs(deltaY) > 150) {
        handleScroll(deltaY);
      }
    };
    handleTouchEnd.displayName = 'handleTouchEnd';

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      <Head>
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=My+Soul&family=Song+Myung&display=swap"
          rel="stylesheet"
          type="text/css"
        ></link>

        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.container}>
        <NavLeft onSectionClick={scrollToSection} activeIndex={activeIndex} />
        <Header></Header>
        <Section1 ref={(el) => (sectionRefs.current[0] = el)} />
        <Section2 ref={(el) => (sectionRefs.current[1] = el)} />
        <Section3 ref={(el) => (sectionRefs.current[2] = el)}></Section3>
        <Section4 ref={(el) => (sectionRefs.current[3] = el)}></Section4>
        <Section5 ref={(el) => (sectionRefs.current[4] = el)}></Section5>
      </div>
    </>
  );
}
