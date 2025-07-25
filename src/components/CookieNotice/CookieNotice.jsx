import styles from "./CookieNotice.module.scss";

const CookieNotice = () => {
  return (
    <div className={styles.cookieNotice}>
      <p>
        We use cookies to make your experience better! If you continue to use
        this site we will assume you are happy with it.
      </p>
      <button>Sign in</button>
    </div>
  );
};

export default CookieNotice;
