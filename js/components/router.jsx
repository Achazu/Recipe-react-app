import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './main.jsx'

const Router = () => (
	<BrowserRouter>
		<Route path='/' component={Main}/>
	</BrowserRouter>
)
