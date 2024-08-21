"use client";

import React, { useState, useRef } from "react";
import styles from "./section-five.module.css";
import process from "../assets/process.svg";
import { sendEmail } from "../lib/action";

const Section5 = React.forwardRef((props, ref) => {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    try {
      const response = await sendEmail(formData);
      if (response.message === '이메일 전송 성공') {
        formRef.current.reset(); // 폼 초기화
        setShowModal(true); // 이메일 전송 성공 시 모달 표시
      }
    } catch (error) {
      console.error('폼 제출 오류:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false); // 모달 닫기
  };

  closeModal.displayName = 'closeModal';

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          빚에서 해방될 수 있는 순간, <span className={styles.hightlight}>딱 한번</span>의 상담이면 됩니다.
        </div>
        <div className={styles.process}>
          <img src={process.src} alt="수원개인회생" />
        </div>
        <div className={styles.formContainer}>
          <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <input className={styles.input} placeholder="성함" name="name" required />
            </div>
            <div className={styles.inputContainer}>
              <input className={styles.input} placeholder="연락처" type="number" name="number" required />
            </div>
            <div className={styles.inputText}>
              <textarea className={styles.input} name="consult" placeholder="문의 내용" required></textarea>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.button} type="submit">
                상담 신청
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent}>
            <p>상담 신청이 완료되었습니다.</p>
            <button className={styles.modalButton} onClick={closeModal}>
              확인
            </button>
          </div>
        </div>
      )}
    </section>
  );
});

Section5.displayName = 'Section5';

export default Section5;
