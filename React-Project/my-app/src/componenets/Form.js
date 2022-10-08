import React from 'react';
import '../App.css';

const Form = props => (
	<form onSubmit={props.getRecipe} style={{ marginBottom:"2rem" }}>
		<input className="form_input" type="text" nname="recipeName"/>
		<button className="form_button">Search</button>
	</form>
);

export default Form;