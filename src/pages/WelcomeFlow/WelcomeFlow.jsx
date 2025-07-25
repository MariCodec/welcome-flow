import { useState } from "react";
import AvatarSelector from "../../components/AvatarSelector/AvatarSelector";
import TopBar from "../../components/TopBar/TopBar";
import styles from "./WelcomeFlow.module.scss";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Button from "../../components/Button/Button";
import NameInput from "../../components/NameInput/NameInput";
import PreferenceAgeSelector from "../../components/PreferenceAgeSelector/PreferenceAgeSelector";
import ContentPreference from "../../components/ContentPreference/ContentPreference";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import AgreementCheckbox from "../../components/AgreementCheckbox/AgreementCheckbox";

const WelcomeFlow = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    gender: "male",
    name: "",
    agePreference: null,
    email: "",
    preferContent: "hot",
  });

  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNext = () => setStep((prev) => prev + 1);

  return (
    <main className={styles.wrapper}>
      <TopBar step={step} />
      {step <= 5 && <ProgressBar step={step} totalSteps={5} />}
      {step === 1 && (
        <AvatarSelector
          value={formData.gender}
          onSelect={(gender) => updateFormData("gender", gender)}
        />
      )}
      {step === 2 && (
        <NameInput
          value={formData.name}
          onChange={(name) => updateFormData("name", name)}
        />
      )}
      {step === 3 && <PreferenceAgeSelector />}
      {step === 4 && (
        <ContentPreference
          value={formData.email}
          typeContentValue={formData.preferContent}
          onChange={(email) => updateFormData("email", email)}
          onSelect={(preferContent) =>
            updateFormData("preferContent", preferContent)
          }
        />
      )}
      {step === 5 && <PasswordInput />}
      {step === 6 && <AgreementCheckbox />}
      {step === 6 ? (
        <Button text="JOIN NOW →" />
      ) : (
        <Button onClick={handleNext} />
      )}
    </main>
  );
};

export default WelcomeFlow;
