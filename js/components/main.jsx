import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from './Form/Form.jsx';

export default class Main extends React.Component {
	

	getRecipe = (e) => {
		e.preventDefault();		
		const recipeName = e.target.elements.recipeName.value;
		console.log(recipeName);
				
		
	}

	render(){
		return (
			<div className='App'>
				<header className='App-header'>
					<h1 className='App-title'>Recipe search</h1>
				</header>
				<Form getRecipe={this.getRecipe}/>				
				
			</div>
		);
	}
}