import styles from "./AgreementCheckbox.module.scss";
import confettiIcon from "../../assets/confettiIcon@2x.png";
import confettiIconTablet from "../../assets/confettiIcon-tablet@2x.png";

const AgreementCheckbox = ({ agreement, onChange }) => {
  return (
    <section className={styles.joinSection}>
      <img
        className={styles.confettiIcon}
        src={confettiIcon}
        srcSet={`${confettiIcon} 240w, ${confettiIconTablet} 400w`}
        sizes="(max-width: 375px) 120px, (max-width: 743px) 120px, 200px"
        alt="confetti image"
      />

      <h2 className={styles.title}>Thanks for your answers!</h2>

      <p className={styles.subTitle}>
        Please check the box below to accept our rules. You’re all set!
      </p>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={agreement}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className={styles.customBox}></span>
        <span className={styles.labelText}>
          I have read, understand and agree
          <span className={styles.lineBreak}> to Terms of Use, Privacy </span>
          <span className={styles.lineKeep}> to Terms of Use, Privacy </span>
          <span className={styles.lineBreakMobile}> Policy, </span>
          <span className={styles.lineKeepDesktop}> Policy, </span>
          Cookie Policy, Billing & Refund Policy, Disclosures & Disclaimers
        </span>
      </label>
    </section>
  );
};

export default AgreementCheckbox;
