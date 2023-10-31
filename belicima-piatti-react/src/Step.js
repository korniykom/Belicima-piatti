import "./Step.css";
export default function Step({ number, description }) {
  return (
    <div className="flex-container">
      <div className="number-container">
        <button className="number">{number}</button>
      </div>
      <div className="description">{description}</div>
    </div>
  );
}
