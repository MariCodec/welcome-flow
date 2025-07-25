import styles from "./Button.module.scss";

const Button = ({ onClick, text = "CONTINUE →" }) => {
  return (
    <button className={styles.nextBtn} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
