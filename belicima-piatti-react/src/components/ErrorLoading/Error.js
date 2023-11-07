import "./Error.css";
export default function ErrorLoading() {
  return (
    <div className="div1">
      <div className="sadMen">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6v5YaszroqdxzdabfVqEb0QvgyaKiGnyGoRuzk62jwCottiDX"
          width="75px"
          height="55px;"
          className="sadImg"
        />
      </div>
      <h1 className="inside">Помилка:</h1>
      <h3 className="inside">Не вдалося завантажити сторінку</h3>
    </div>
  );
}
