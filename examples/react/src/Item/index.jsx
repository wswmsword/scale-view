import styles from "./index.module.css";
import { clampVw } from "scale-view";

const Item = ({ note }) => {
  const clampVwRes = clampVw(186);
  return <div className={styles.wrapper}>
    <div className={styles.img}>
      {note && <p className={styles.note}>height = clampVw(186) = {clampVwRes}</p>}
    </div>
    <div className={styles.txt}></div>
  </div>;
};

export default Item;