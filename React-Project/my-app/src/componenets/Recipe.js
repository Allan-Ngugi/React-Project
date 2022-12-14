import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
class Recipe extends React.Component {
state = {
    activeRecipe: []
}
componentDidMount = async () => {

    const req = await fetch(`(https://recipe-app-an.herokuapp.com/recipe"`);
    console.log(req);  

    this.setState({ activeRecipe: req.recipes[0] });
    console.log(this.state.activeRecipe);
}
render() {
    const recipe = this.state.activeRecipe;
    return (
    <div className="container">
        { this.state.activeRecipe.length !== 0 &&
        <div className="active-recipe">
            <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
            <h3 className="active-recipe__title">{ recipe.title }</h3>
            <h4 className="active-recipe__publisher">
            Publisher: <span>{ recipe.publisher }</span>
            </h4>
            <p className="active-recipe__website">Website: 
            <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
            </p>
            <button className="active-recipe__button">
            <Link to="/">Go Home</Link>
            </button>
        </div>
        }
    </div>
    );
}
};

export default Recipe;