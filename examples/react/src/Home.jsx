import Card from "./Card";
import CardBack from "./CardBack";
import Item from "./Item";
import QRCode from "./QRCode";
import styles from "./Home.module.css";
import { centre } from "scale-view";

const Hello = () => {
  const title = "React Mobile Viewport";
  const letters = ['✨', ' '].concat(title.split(''), '🐰');
  const lettersSpan = letters.map((t, i) => <span key={i} style={{ transform: `rotate(${i * 5}deg)` }}>{t}</span>)
  const centreRes = centre(32, "px");
  return <div className={styles.appInnerRoot}>
    <div></div>
    {/* <nav className={styles.nav}>
      <div>icon</div>
      <div>title</div>
      <div>menu</div>
    </nav> */}
    <main className={styles.main}>
      <div className={styles.top}>
        <div className={styles.bgTitleWrapper + ' ' + styles.DEMO_MODE}><div className={styles.bgTitle}>{lettersSpan}</div></div>
        <div className={styles.cardWrapper}>
          <Card />
          <CardBack />
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>TAROTCARD</h1>
      </div>
      <div className={styles.content}>
        {new Array(12).fill().map((_, i) => <Item key={i} note={i === 0} />)}
      </div>
      <button className={styles.backToTop}>
        <p className={styles.note}>right = centre(32, "px") = {centreRes}</p>
        TOP
      </button>
    </main>
    <footer className={styles.footer}>
      <QRCode />
    </footer>
  </div>;
};

export default Hello;