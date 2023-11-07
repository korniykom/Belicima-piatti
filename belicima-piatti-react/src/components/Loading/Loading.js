import "./Loading.css";

function Loading() {
  return (
    <html>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <div class="loading-container">
        <h2 class="loading-title">Loading State</h2>
        <div class="loading-bar">
          <p class="white-back">Loading...</p>
          <div class="spinner"></div>
        </div>
      </div>
    </html>
  );
}

export default Loading;
