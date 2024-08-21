import styles from './header.module.css';

import logo from '../assets/logo2.svg';

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <img src={logo.src}></img>
      </div>
    </>
  )
}