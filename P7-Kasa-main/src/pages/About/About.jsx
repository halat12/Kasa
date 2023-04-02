import AboutBanner from "../../components/ImageApropos/ImageApropos";
import Collapse from "../../components/OuvertureCase/Ouverture_Case";
import aboutArray from "./aboutArray.json";
export default function About() {
  return (
    <>
      <AboutBanner />
      {aboutArray.map((rule, index) => (
        <Collapse
          key={rule.aboutTitle + index}
          aboutTitle={rule.aboutTitle}
          aboutText={rule.aboutText}
          aboutStyle="about-style"
        />
      ))}
    </>
  );
}
