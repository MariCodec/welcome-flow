import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ step, totalSteps = 5 }) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
