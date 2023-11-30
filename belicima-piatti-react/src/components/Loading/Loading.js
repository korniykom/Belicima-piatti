import "./Loading.css";

function Loading() {
  return (
    <div class="loading-container">
      <h2 class="loading-title">Loading State</h2>
      <div class="loading-bar">
        <p class="white-back">Loading...</p>
        <div class="spinner"></div>
      </div>
    </div>
  );
}

export default Loading;
