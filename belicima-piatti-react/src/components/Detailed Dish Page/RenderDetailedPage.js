export default function RenderDetailedPage(details) {
  console.log("The name is");
  console.log(details.name);

  return <p>{details.steps}</p>;
}
