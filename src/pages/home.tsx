import React, { useContext, createRef } from 'react';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Store } from "./../components/store/global-state";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
	const { dispatch } = useContext(Store);
	const userNameRef = createRef<HTMLInputElement>();
	const updateStoreValues = () => {
		const userName = (userNameRef.current?.value);
		dispatch({
			type: "updateLoginInfo",
			payload: true
		});
		dispatch({
			type: "updateUserName",
			payload: userName
		});
	}

	return (
		<div className="container">
			<h1 className="text-center">Please sign in to continue.</h1>
			<div className="d-flex justify-content-around">
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
					<Card.Body>
						<Card.Title>Sign in</Card.Title>
						<Card.Text>
							<Form>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter user name"
										ref={userNameRef}
									/>
								</Form.Group>
								<Form.Group controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="Password" />
								</Form.Group>
								<Link to="/welcome">
									<button
										type="button"
										className="btn btn-primary"
										onClick={updateStoreValues}
									>
										Submit
									</button>
								</Link>
							</Form>
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

export default Home;
