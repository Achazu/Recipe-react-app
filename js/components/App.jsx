import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from './Form/Form.jsx';
import Recipes from './Recipes/Recipes.jsx';
import Recipe from './Recipe/Recipe.jsx';

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
		e.preventDefault();		
		const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_key}&q=${recipeName}}`);
		const data = await api_call.json();
		this.setState({ 
			recipes: data.recipes
		});
	}

	componentDidMount = () => {
		const LS = JSON.parse(localStorage.getItem('recipes'));
		this.setState({ 
			recipes: LS
		});
	}
	
	// component updates after state change
	componentDidUpdate = () => {
		const recipes = JSON.stringify(this.state.recipes);
		localStorage.setItem('recipes', recipes);
	}

	render(){
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