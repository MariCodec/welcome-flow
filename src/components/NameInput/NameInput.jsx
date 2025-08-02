import styles from "./NameInput.module.scss";

const NameInput = ({ value, onChange }) => {

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>What name should users call you?</h2>
      <label htmlFor="username" className={styles.visuallyHidden}>
        Username
      </label>
      <input
        id="username"
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your username"
        aria-describedby="username-description"
      />
      <p id="username-description" className={styles.description}>
        You don’t have to use your real name – feel free to use a nickname. You
        can change it anytime.
      </p>
    </section>
  );
};

export default NameInput;
