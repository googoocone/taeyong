import { useState } from "react";
import styles from "./promise.module.css";

export default function Promise({ textDummy }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const handleTitleClick = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };
  handleTitleClick.displayName = "handleTitleClick";


  return (
    <>
      <div className={styles.container}>
        <div 
          className={styles.title} 
          onClick={handleTitleClick}
          style={{ cursor: 'pointer' }} // 클릭 가능한 느낌을 주기 위해 커서를 포인터로 설정
        >
          {textDummy.title}
        </div>
        {isDescriptionVisible && (
          <div className={styles.description}>{textDummy.description}</div>
        )}
      </div>
    </>
  );
}

