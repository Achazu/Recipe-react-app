import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from './Form/Form.jsx';
import Recipes from './Recipes/Recipes.jsx';

const API_key = '2e19323e78adc0afc102df867f3aeac3';
const search_url = 'https://www.food2fork.com/api/search?key=';
const get_url = 'https://www.food2fork.com/api/get?key=';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			recipes: []
		}
	}
	
	getRecipe = async (e) => {
		const recipeName = e.target.elements.recipeName.value;
		console.log('form', recipeName);
		
		e.preventDefault();		

		const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_key}&q=${recipeName}}`);
		console.log('api call', api_call);
		
		const data = await api_call.json();
		console.log('data', data);

		this.setState({ recipes: data.recipes});
		console.log('form state effect', this.state);
		
	}

	render(){
		console.log('test app state', this.state);
		
		return (
			<div className='App'>
				<header className='App-header'>
					<h1 className='App-title'>Recipe search</h1>
				</header>
				<Form getRecipe={this.getRecipe}/>	
				<Recipes recipes={this.state.recipes}/>
			</div>
		);
	}
}