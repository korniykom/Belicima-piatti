import "./Nav.css";

export default function Nav({ backLink, title }) {
  return (
    <div className="nav">
      <div class="arrow_back-button">
        {backLink && (
          <a href={backLink}>
            <span class="material-symbols-outlined">arrow_back</span>
          </a>
        )}
      </div>
      <span className="title">
        <strong>{title}</strong>
      </span>
      <div class="menu-button">
        <a href="/menu">
          <span class="material-symbols-outlined">menu</span>
        </a>
      </div>
    </div>
  );
}
