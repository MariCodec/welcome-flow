import styles from "./PreferenceAgeSelector.module.scss";

const PreferenceAgeSelector = ({
  agePreference,
  birthdate,
  onAgeChange,
  onBirthdateChange,
}) => {

  const currentYear = new Date().getFullYear();
  const maxYear = currentYear - 18;
  const minYear = currentYear - 80;

  const ageOptions = Array.from({ length: 80 - 18 + 1 }, (_, i) => 18 + i);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        Select your age preference
        <br /> for women
      </h2>
      <form className={styles.form}>
        <fieldset className={styles.rangeFieldset}>
          <legend className={styles.visuallyHidden}>Age Range</legend>
          <div className={styles.range}>
            <label htmlFor="fromAge" className={styles.visuallyHidden}>
              From
            </label>
            <select
              id="fromAge"
              name="fromAge"
              className={styles.rangeSelect}
              value={agePreference.fromAge}
              onChange={(e) => onAgeChange("fromAge", e.target.value)}
              aria-label="Select the minimum age"
            >
              <option value="" disabled>
                From
              </option>
              {ageOptions.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>

            <label htmlFor="toAge" className={styles.visuallyHidden}>
              To
            </label>
            <select
              id="toAge"
              name="toAge"
              className={styles.rangeSelect}
              value={agePreference.toAge}
              onChange={(e) => onAgeChange("toAge", e.target.value)}
              aria-label="Select the maximum age"
            >
              <option value="" disabled>
                To
              </option>
              {ageOptions.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
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
            <select
              id="month"
              name="month"
              className={styles.select}
              value={birthdate.month}
              onChange={(e) => onBirthdateChange("month", e.target.value)}
              aria-label="Select the month of birth"
            >
              <option value="" disabled>
                Month
              </option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {new Date(0, i).toLocaleString("en", { month: "long" })}
                </option>
              ))}
            </select>

            <label htmlFor="day" className={styles.visuallyHidden}>
              Day
            </label>
            <select
              id="day"
              name="day"
              className={styles.select}
              value={birthdate.day}
              onChange={(e) => onBirthdateChange("day", e.target.value)}
              aria-label="Select the day of birth"
            >
              <option value="">Day</option>
              {[...Array(31)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <label htmlFor="year" className={styles.visuallyHidden}>
              Year
            </label>
            <select
              id="year"
              name="year"
              className={styles.select}
              value={birthdate.year}
              onChange={(e) => onBirthdateChange("year", e.target.value)}
              aria-label="Select the year of birth"
            >
              <option value="">Year</option>
              {[...Array(maxYear - minYear + 1)].map((_, i) => {
                const year = maxYear - i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
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
