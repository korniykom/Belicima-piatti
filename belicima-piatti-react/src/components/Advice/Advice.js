import "./Advice.css";
import AdviceContainer from './AdviceContainer.png';
import HelpIcon from './HelpIcon.png';
export default function Advice({AdviceText})
{
  return(
    <div className = "MainAdviceContainer">
 <div className="AdviceAndIconContainer">
      <div className="AdviceTextContainer">
      <h2 className = "AdviceText">{AdviceText}</h2>
      </div>
      <img src = {AdviceContainer} width = "100%" height = "100%" alt = "AdviceContaimer.png" className="AdviceContainer"/>
      <img src = {HelpIcon} width = "75px" height = "75px" alt = "HelpIcon.png" className="HelpIcon"/>
    </div>
    </div> 
  );
}