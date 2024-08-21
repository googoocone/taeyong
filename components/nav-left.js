import Style from './nav-left.module.css';

export default function NavLeft({ onSectionClick, activeIndex }) {
  return (
    <div className={Style.container} style={{ fontFamily: 'Spoqa Han Sans Neo, sans-serif' }}>
      <ul>
        <li
          onClick={() => onSectionClick(0)}
          className={activeIndex === 0 ? Style.active : ''}
        >
          Main
        </li>
        <li
          onClick={() => onSectionClick(1)}
          className={activeIndex === 1 ? Style.active : ''}
        >
          약속
        </li>
        <li
          onClick={() => onSectionClick(2)}
          className={activeIndex === 2 ? Style.active : ''}
        >
          결과의 증명
        </li>
        <li
          onClick={() => onSectionClick(3)}
          className={activeIndex === 3 ? Style.active : ''}
        >
          변호사 소개
        </li>
        <li
          onClick={() => onSectionClick(4)}
          className={activeIndex === 4 ? Style.active : ''}
        >
          상담 신청
        </li>
      </ul>
    </div>
  );
}
