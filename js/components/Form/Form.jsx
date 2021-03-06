import React from 'react';
import ReactDOM from 'react-dom';

const Form = props => (
	<form onSubmit={props.getRecipe} style={{ marginBottom: '2rem' }}>
		<input className='form__input' type="text" name="recipeName" placeholder='Search by ingredients or dish names'/>
		<button className='form__button' >Search</button>
	</form>
)

export default Form;