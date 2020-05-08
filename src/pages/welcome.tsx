import React, { useContext } from "react";
import { Store } from "./../components/store/global-state";

const Welcome: React.FC = () => {
	const { state } = useContext(Store);
	return (
		<div className="container">
			<h1>Welcome {state.userName}</h1>
		</div>
	);
}

export default Welcome;