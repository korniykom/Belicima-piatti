import "./Advice.css";
import AdviceContainer from "./AdviceContainer.png";
import HelpIcon from "./HelpIcon.png";
export default function Advice({ AdviceText }) {
  return (
    <div className="AdviceContainer">
      <div className="AdviceText">
        <p className="centered"> {AdviceText} </p>
      </div>
      <div className="AdviceIcon">
        <img src={HelpIcon} alt="advice" />
      </div>
    </div>
  );
}
