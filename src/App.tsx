import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/welcome";
import Home from "./pages/home";

const App: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home}><Home /></Route>
				<Route path="/welcome" component={Welcome}><Welcome /></Route>
			</Switch>
		</Router>
	);
};

export default App;
