import "./Loading.css";

function Loading() {
  return (
    <html>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <div className="loading-container">
        <h2 className="loading-title">Loading State</h2>
        <div className="loading-bar">
          <p className="white-back">Loading...</p>
          <div className="spinner"></div>
        </div>
      </div>
    </html>
  );
}

export default Loading;
