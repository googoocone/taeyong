import React, { useState, useRef } from "react";
import styles from "./section-five.module.css";
import process from "../assets/process.svg";

const Section5 = React.forwardRef((props, ref) => {
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowModal(true);
      } else {
        console.error("이메일 전송 실패");
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          빚에서 해방될 수 있는 순간,{" "}
          <span className={styles.hightlight}>딱 한번</span>의 상담이면 됩니다.
        </div>
        <div className={styles.process}>
          <img src={process.src} alt="Process" />
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                placeholder="성함"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                placeholder="연락처"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputText}>
              <textarea
                className={styles.textarea}
                placeholder="문의 내용"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
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
            <p>상담신청이 완료되었습니다.</p>
            <button className={styles.modalButton} onClick={closeModal}>
              확인
            </button>
          </div>
        </div>
      )}
    </section>
  );
});

export default Section5;
