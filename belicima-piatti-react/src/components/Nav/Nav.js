import "./Nav.css";
export default function Nav() {
  return (
    <div className="nav">
      <div class="arrow_back-button">
        <span class="material-symbols-outlined">arrow_back</span>
      </div>
      <span className="title">
        <strong>Перші страви</strong>
      </span>
      <div class="menu-button">
        <span class="material-symbols-outlined">menu</span>
      </div>
    </div>
  );
}
