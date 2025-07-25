import styles from "./PasswordInput.module.scss";

const PasswordInput = ({
  password,
  confirmPassword,
  onPasswordChange,
  onConfirmPasswordChange,
}) => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Create your password</h2>
      <label htmlFor="password" className={styles.visuallyHidden}>
        Password
      </label>
      <input
        id="password"
        type="password"
        className={styles.input}
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        placeholder="Your password"
      />

      <label htmlFor="confirmPassword" className={styles.visuallyHidden}>
        Confirm Password
      </label>
      <input
        id="confirmPassword"
        type="password"
        className={styles.input}
        value={confirmPassword}
        onChange={(e) => onConfirmPasswordChange(e.target.value)}
        placeholder="Confirm password"
      />
      <p className={styles.description}>
        Passwords must be at least 8 characters long. You can recover passwords
        at any time using the email address you provided.
      </p>
    </section>
  );
};

export default PasswordInput;
