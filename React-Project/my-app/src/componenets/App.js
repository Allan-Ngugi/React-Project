import React, { Component } from 'react';
import Form from "./Form";
import Recipes from "./Recipes";
import "../App.css";
class App extends Component {
state = {
    recipes: []
}
getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.id;
    e.preventDefault();
    const api_call = await fetch(`https://recipe-app-an.herokuapp.com/recipe`,recipeName);

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
}
componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
}
render() {
    return (
    <div className="App">
        <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
    </div>
    );
}
}
export default App;