import styles from "./ContentPreference.module.scss";

import hotImg from "../../assets/hot-mobile@2x.png";
import hotImgTablet from "../../assets/hot-tablet@2x.png";
import trendyImg from "../../assets/trendy-mobile@2x.png";
import trendyImgTablet from "../../assets/trendy-tablet@2x.png";

const ContentPreference = ({ value, typeContentValue, onSelect, onChange }) => {
  const handleSelect = (typeContent) => {
    onSelect(typeContent);
  };

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const isSelected = (typeContent) => typeContentValue === typeContent;

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>What kind of content do you enjoy? 👀</h2>

      <div className={styles.preferContent}>
        <div className={styles.preferButtons}>
          <button
            className={`${styles.preferButton} ${
              isSelected("hot") ? styles.active : ""
            }`}
            onClick={() => handleSelect("hot")}
            aria-pressed={isSelected("hot")}
          >
            <img
              src={hotImg}
              srcSet={`${hotImg} 160w, ${hotImgTablet} 192w`}
              sizes="(max-width: 767px) 80px, 96px"
              alt="Hot image"
            />
            <span>Hot</span>
          </button>
          <button
            className={`${styles.preferButton} ${
              isSelected("Trendy") ? styles.active : ""
            }`}
            onClick={() => handleSelect("Trendy")}
            aria-pressed={isSelected("Trendy")}
          >
            <img
              src={trendyImg}
              srcSet={`${trendyImg} 160w, ${trendyImgTablet} 192w`}
              sizes="(max-width: 767px) 80px, 96px"
              alt="Trendy image"
            />
            <span>Trendy</span>
          </button>
        </div>
        <p className={styles.subtitle}>What is your email address?</p>
      </div>
      <label htmlFor="email" className={styles.visuallyHidden}>
        Email
      </label>
      <input
        id="email"
        type="email"
        className={styles.input}
        value={value}
        onChange={handleChange}
        placeholder="Type your email"
      />
      <p className={styles.description}>Email is required for registration.</p>
    </section>
  );
};

export default ContentPreference;
