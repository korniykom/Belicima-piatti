export default function Card() {
  return (
    <div className="card">
      <h2>Title</h2>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.fbt_aIZezSujWx3OZv6MgQHaD4%26pid%3DApi&f=1&ipt=8c3460a20c8bba332634f66e2824b0b25fa680ef84aac2e5ba352fd65a2ee9b1&ipo=images"
        alt="dish description"
      ></img>
      <div className="card-description">
        <div className="first-element">
          <span>stars</span> <span>rating</span> <br />
          <span>ціна:</span> <span>price</span>
        </div>
        <div className="second-element">
          <span>time</span> <span>icon</span> <br />
          <span>number</span> <span>калорій</span>
        </div>
        <div className="third-element">
          <span>Big Icon</span>
        </div>
      </div>
    </div>
  );
}
