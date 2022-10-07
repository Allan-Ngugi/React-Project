import React, { useState, useEffect } from "react";
export default function Recipes({recipe}) {
const URL = ("https://edamam-recipe-search.p.rapidapi.com/search?q=chicken")
const [recipes,setrecipe] = useState()
useEffect(() => {
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd4d6e6e735msha258d226ff45410p1a26a9jsnd18102fab690',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

fetch(URL, options)
	.then(resp => resp.json())
	.then(resp => console.log(resp))
    .then(setrecipe);
}, []);
console.log (recipes)
return (
    <div className="ui four column grid">
        <div className="row">
    <div className="recipes_box">
    {recipes && recipes.map(recipe => <Recipes key={recipe.id}recipe={recipe} 
    yoh rada
    />)}
    
    </div>
    </div>
    </div>
);
}