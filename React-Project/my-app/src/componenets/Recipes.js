import React from 'react';
import { Link } from "react-router-dom";

const recipes = [ ];
const Recipes = props => (
    <div className="container">
    <div className="row">
    {props.recipes && recipes.map((Recipes) => {
        
    return (
        <div key={recipes.title} className="col-md-4" style={{ marginBottom:"2rem" }}>
        <div className="recipes__box">
            <img 
            className="recipe__box-img" 
            src={recipes.image_url} 
            alt={recipes.title}/>
            <div className="recipe__text">
                <h5 className="recipes__title">
                { Recipes.title.length < 20 ? `${recipes.title}` : `${recipes.title.substring(0, 25)}...` }
                </h5>
                <p className="recipes__subtitle">Publisher: <span>
                { Recipes.publisher }
                </span></p>
            </div>
            <button className="recipe_buttons">
                <Link to={{ 
                pathname: `/recipe/${Recipes.recipe_id}`,
                state: { recipe: Recipes.title }
                }}>View Recipe</Link>
            </button>
        </div>
        </div>
    );
    })}
    </div>
</div>
);

export default Recipes;