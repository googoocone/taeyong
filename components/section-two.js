import React from "react";
import styles from "./section-two.module.css";

import Promise from "./promise";

const Section2 = React.forwardRef((props, ref) => {
  let textDummy = [
    {
      title: "최저 변제금을 약속합니다.",
      description:
        "개인회생에서 가장 중요한 것은 변제금을 조금이라도 줄이는 것입니다. 의뢰인에게 조금이라도 도움이 되고자 추가생계비 인정, 재산방어 등을 의무적으로 진행합니다.",
    },
    {
      title: "항상 의뢰인들과 소통합니다.",
      description:
        "개인회생을 처음 하시는 분들은 항상 불안하다는 것을 누구보다 잘 알고있습니다. 1:1 전담 직원이 배정되어 언제든지 의뢰인과 소통할 수 있도록 하고 있습니다.",
    },
    {
      title: "대표변호사가 서류를 직접 검토합니다.",
      description:
        "서류를 법원에 제출하기 전, 대표 변호사가 직접 서류를 검토하고 확인한 다음, 문제가 없을 경우 제출하는 것을 원칙으로 하고 있습니다. 저희 법무법인은 사무장이 없고, 변호사의 책임하에 운영되고 있습니다.",
    },
    {
      title: "일주일 이내, 접수합니다.",
      description:
        "의뢰인을 위해, 신속한 개인회생 개시를 원칙으로 하고자, 접수 서류가 준비되면 1주일 이내 접수를 원칙으로 하고 있습니다.",
    },

    {
      title: "수임료의 부담을 줄여드립니다.",
      description:
        "변호사 수임료가 부담된다는 사실을 저희는 너무나도 잘 알고있습니다. 변호사 수임료를 월 3~5회로 분할 결제가 가능합니다.",
    },
  ];

  const handleClick = (event) => {
    event.preventDefault();  // 기본 동작 방지
    event.stopPropagation(); // 이벤트 전파 방지
  };

  return (
    <section ref={ref} className={styles.section}>
      <div
        className={styles.mainText}
        style={{ fontFamily: "Song Myung, serif" }}
      ></div>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>
            저희는
            <br />
          </span>
          <span className={styles.highlight}>5가지</span>를<br />
          <span>약속합니다.</span>
        </div>
        {textDummy.map((item, index) => (
          <div
            key={index}
            className={styles.promiseContainer}
            onClick={handleClick} // 클릭 이벤트 핸들러 추가
          >
            <div className={styles.promiseTitle}>
              <span className={styles.highlight}>{item.title.split(" ")[0]}</span>{" "}
              {item.title.split(" ").slice(1).join(" ")}
            </div>

            <div className={styles.promiseDescription}>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

Section2.displayName = "Section2";

export default Section2;
