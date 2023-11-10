// import React from "react";

// class CategoryPage extends React.Component {
//   state = {
//     category: "Перші страви",
//     secondDishCategory: "Другі страви",
//     meatDishCategory: "М'ясні страви",
//     dessertCategory: "Десерти",
//   };

//   componentDidMount() {
//     // Завантажте категорію з API
//     fetch("/api/categories/" + this.state.category)
//       .then((response) => response.json())
//       .then((category) => {
//         this.setState({ category });
//       });
//   }

//   render() {
//     const category = this.state[this.props.match.path.split("/")[2]];
//     return (
//       <div>
//         <h1>{category}</h1>
//       </div>
//     );
//   }
// }
