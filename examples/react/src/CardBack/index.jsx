import styles from "./index.module.css";
import { clampVw } from "scale-view";

const CardBack = () => {
  const clampVwRes = clampVw(192);
  return <div className={styles.cardBack}>
    <p className={styles.note}>width = clampVw(192) = {clampVwRes}</p>
    <div className={styles.content} />
  </div>
};

export default CardBack;