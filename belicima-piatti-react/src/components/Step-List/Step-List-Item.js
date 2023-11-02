import "./Step-List-Item.css";
export default function Step({ number = 1, description }) {
  return (
    <div className="flex-container">
      <div className="number-container">
        <button className="number">{number}</button>
      </div>
      <div className="description">{description}</div>
    </div>
  );
}
