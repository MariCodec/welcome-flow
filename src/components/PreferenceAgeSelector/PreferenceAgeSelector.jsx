import styles from "./PreferenceAgeSelector.module.scss";

const PreferenceAgeSelector = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        Select your age preference<br></br> for women
      </h2>
      <form className={styles.form}>
        <fieldset className={styles.rangeFieldset}>
          <legend className={styles.visuallyHidden}>Age Range</legend>
          <div className={styles.range}>
            <label htmlFor="fromAge" className={styles.visuallyHidden}>
              From
            </label>
            <select id="fromAge" className={styles.rangeSelect} defaultValue="">
              <option value="" disabled>
                From
              </option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
            <label htmlFor="toAge" className={styles.visuallyHidden}>
              To
            </label>
            <select id="toAge" className={styles.rangeSelect} defaultValue="">
              <option value="" disabled>
                To
              </option>
              <option value="29">29</option>
              <option value="30">30</option>
            </select>
          </div>
        </fieldset>

        <p className={styles.subtitle}>What is your age?</p>
        <fieldset className={styles.dateFieldset}>
          <legend className={styles.visuallyHidden}>
            Select your birthdate
          </legend>
          <div className={styles.date}>
            <label htmlFor="month" className={styles.visuallyHidden}>
              Month
            </label>
            <select id="month" className={styles.select} defaultValue="">
              <option value="" disabled>
                Month
              </option>
              <option value="1">January</option>
              <option value="2">February</option>
            </select>
            <label htmlFor="day" className={styles.visuallyHidden}>
              Day
            </label>
            <select id="day" className={styles.select} defaultValue="">
              <option value="">Day</option>
            </select>
            <label htmlFor="year" className={styles.visuallyHidden}>
              Year
            </label>
            <select id="year" className={styles.select} defaultValue="">
              <option value="">Year</option>
            </select>
          </div>
        </fieldset>
      </form>
      <p className={styles.description}>
        By proceeding, you confirm that you are fully legally capable of using
        this website and are at least 18 years old.
      </p>
    </section>
  );
};

export default PreferenceAgeSelector;
