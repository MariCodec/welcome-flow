import styles from "./AvatarSelector.module.scss";
import image1 from "../../assets/image1@2x.png";
import image2 from "../../assets/image2@2x.png";
import image3 from "../../assets/image3@2x.png";
import image4 from "../../assets/image4@2x.png";
import image5 from "../../assets/image5@2x.png";
import image6 from "../../assets/image6@2x.png";
import image7 from "../../assets/image7@2x.png";
import image8 from "../../assets/image8@2x.png";
import image9 from "../../assets/image9@2x.png";
import femaleImg from "../../assets/female-mobile@2x.png";
import femaleImgTablet from "../../assets/female-tablet@2x.png";
import maleImg from "../../assets/male-mobile@2x.png";
import maleImgTablet from "../../assets/male-tablet@2x.png";
import CookieNotice from "../CookieNotice/CookieNotice";

const AvatarSelector = ({ value, onSelect }) => {
  const handleSelect = (gender) => {
    onSelect(gender);
  };

  const isSelected = (gender) => value === gender;
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  return (
    <>
      <section className={styles.wrapper}>
        <h2 className={styles.title}>Glad you're here!</h2>
        <div className={styles.imageGallery}>
          <div className={styles.sliderContainer}>
            {images.map((src, index) => (
              <div key={index} className={styles.imageItem}>
                <img src={src} alt={`Gallery image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <fieldset className={styles.genders}>
          <legend className={styles.selectSex}>Select your sex</legend>
          <div className={styles.genderButtons}>
            <button
              type="button"
              className={`${styles.gender} ${
                isSelected("male") ? styles.active : ""
              }`}
              onClick={() => handleSelect("male")}
              aria-pressed={isSelected("male")}
            >
              <img
                src={maleImg}
                srcSet={`${maleImg} 160w, ${maleImgTablet} 192w`}
                sizes="(max-width: 744px) 80px, 96px"
                alt="Male image"
              />
              <span>Male</span>
            </button>
            <button
              type="button"
              className={`${styles.gender} ${
                isSelected("female") ? styles.active : ""
              }`}
              onClick={() => handleSelect("female")}
              aria-pressed={isSelected("female")}
            >
              <img
                src={femaleImg}
                srcSet={`${femaleImg} 160w, ${femaleImgTablet} 192w`}
                sizes="(max-width: 744px) 80px, 96px"
                alt="Female image"
              />
              <span>Female</span>
            </button>
          </div>
        </fieldset>

        <footer className={styles.footer}>
          <nav aria-label="Footer links">
            <ul className={styles.linksList}>
              <li>
                <a className={styles.link} href="/terms-of-use">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className={styles.link} href="/billing-policy">
                  Billing policy
                </a>
              </li>
              <li>
                <a className={styles.link} href="/cookie-policy">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a className={styles.link} href="/refund-policy">
                  Refund Policy
                </a>
              </li>
              <li>
                <a className={styles.link} href="/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className={styles.link} href="/risks-notice">
                  Risks Notice
                </a>
              </li>
              <li>
                <a className={styles.link} href="/disclosures">
                  Disclosures and Disclaimers
                </a>
              </li>
              <li>
                <a className={styles.link} href="/contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </section>
      <CookieNotice />
    </>
  );
};

export default AvatarSelector;
