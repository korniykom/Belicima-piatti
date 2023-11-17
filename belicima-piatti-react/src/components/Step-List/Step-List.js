import "./Step-List.css";
import Step from "./Step-List-Item";
export default function StepList({ StepList = [] }) {
  return (
    <div>
      <h2 className="title">Кроки</h2>
      {StepList.map((step, i) => (
        <Step number={i + 1} description={step} />
      ))}
    </div>
  );
}
