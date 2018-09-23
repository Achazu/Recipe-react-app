import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App.jsx';
import Router from './components/Router.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/app.css';


document.addEventListener('DOMContentLoaded', 
	function(){
		ReactDOM.render(
			<Router/>,
			document.getElementById('app')
		);
	});