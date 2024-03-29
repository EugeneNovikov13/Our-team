import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { OurTeam } from './our-team';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter basename="/Our-team">
		<Provider store={store}>
			<OurTeam />
		</Provider>
	</BrowserRouter>,
);
