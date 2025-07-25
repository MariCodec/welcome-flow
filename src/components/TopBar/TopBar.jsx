import styles from "./TopBar.module.scss";
import logo from "../../assets/logo.svg";

const TopBar = ({ step }) => {
  return (
    <header className={styles.topBar}>
      {step === 1 ? (
        <>
          <img src={logo} alt="Logo" className={styles.logo} />
          <div className={styles.buttonStyle}>
            <p className={styles.description}> Already have an account?</p>
            <button className={styles.signIn}>Sign In</button>
          </div>
        </>
      ) : (
        <img src={logo} alt="Logo" className={styles.logoCentered} />
      )}
    </header>
  );
};

export default TopBar;
