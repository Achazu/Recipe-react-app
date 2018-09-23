import React from 'react';
import ReactDOM from 'react-dom';

// const API_key = '2e19323e78adc0afc102df867f3aeac3';

export default class Recipe extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			activeRecipe: [] 
		}
	}

	componentDidMount = async () => {
		const title = this.props.location.state.recipe;
		const request = await fetch(`https://www.food2fork.com/api/search?key=${API_key}&q=${title}}`);
		const response = await request.json();

		console.log(response);
		
	}
// 

	render(){ 
		// console.log(this.props);
		
		return <div>
		Recipe Componenet!
		</div>

	}
}
