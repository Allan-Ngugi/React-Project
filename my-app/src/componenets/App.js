import React, { Component } from 'react';
import '../App.css';
import Form from "./Form";
import Recipes from "./Recipes";

const API_KEY = "Your-api-key";

class App extends Component {
state = {
    recipes: []
}
getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=chicken`);
    
//     const data = await api_call.json();
//     this.setState({ recipes: data.recipes });
//     console.log(this.state.recipes);
// }
// componentDidMount = () => {
//     const json = localStorage.getItem("recipes");
//     const recipes = JSON.parse(json);
//     this.setState({ recipes });
// }
// componentDidUpdate = () => {
//     const recipes = JSON.stringify(this.state.recipes);
//     localStorage.setItem("recipes", recipes);
// }
// render() {
//     return (
//     <div className="App">
//         <header className="App-header">
//     <h1 className="App-title">Recipe Search</h1>
//         </header>
//         <Form getRecipe={this.getRecipe} />
//         <Recipes recipes={this.state.recipes} />
// </div>
//     );
// }
// }

// export default App;