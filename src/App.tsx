import React, { useContext } from 'react';
import { Store } from "./components/store/global-state";

const App: React.FC = ({}) => {
	const { state } = useContext(Store);
	return (
		<h1>Welcome {state.userName}!</h1>
	);
};

export default App;
