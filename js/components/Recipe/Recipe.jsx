import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

const API_key = '2e19323e78adc0afc102df867f3aeac3';

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

		this.setState({activeRecipe: response.recipes[0]});
		console.log(this.state.activeRecipe);
	}

	render(){ 
		const recipe = this.state.activeRecipe;

		return (
			<div className="container">
				{this.state.activeRecipe.length !== 0 &&
					<div className="active-recipe">
						<img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
						<h3 className="active-recipe__title"> {recipe.title} </h3>
						<h4 className="active-recipe__publisher">
							Publisher: <span> {recipe.publisher} </span>
						</h4>
						<p className="active-recipe__website">
							Website: <span>
								<a href={recipe.publisher_url}>{recipe.publisher_url}</a>
							</span>
						</p>
						<button className="active-recipe__button">
							<Link to='/'> Go home </Link>	
						</button>
					</div>
				}
			</div>
		)
	}
}
