import "./Step-List.css";
import Step from "./Step-List-Item";
export default function StepList({ StepList = [] }) {
  return (
    <div>
      <h2 className="title">Кроки</h2>
      {StepList.map((step) => (
        <Step number={step.id} description={step} />
      ))}
    </div>
  );
}
