import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		<Route path="/:filter?" component={App} />
	</Router>, 
	document.getElementById('root')
);

registerServiceWorker();