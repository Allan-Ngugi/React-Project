import React, { useState, useEffect } from "react";
import  '../App.css';
export default function Recipes({ recipe }) {
    const URL = ("https://recipe-app-an.herokuapp.com/recipe")
    const [recipes, setrecipe] = useState([])
    useEffect(() => {

        fetch(URL)
            .then(resp => resp.json())
            .then(item=> setrecipe(item));
    }, []);
    console.log (recipes)
    const allrecipes = recipes.map((item, index)=>{
        return (
        <div>
            <h1>{item.title}</h1>
            {/* <p>{  item.publisher}</p> */}
            <img src={item.image} alt="I made thisArg "></img> 
        </div>)
    })


    return (
        <div className="ui four column grid">
            <div className="row">
                <div className="recipes_box">
                    {allrecipes}

                </div>
            </div>
        </div>
    );
}