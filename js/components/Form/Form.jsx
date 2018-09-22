import React from 'react';
import ReactDOM from 'react-dom';

const Form = props => (
	<form onSubmit={props.getRecipe}>
		<input type="text" name="recipeName"/>
		<button>test</button>
	</form>
)

export default Form;