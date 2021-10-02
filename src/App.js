import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { AuthRoute, PrivateRoute } from "./routes";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userData, setUserData] = useState(null);

	const handleLogin = (data) => {
		setUserData(data);
		setIsAuthenticated(true);
	};

	const handleLogout = () => {
		setIsAuthenticated(false);
		setUserData(null);
	};

	return (
		<Router>
			<div className="container">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<AuthRoute
						isAuthenticated={isAuthenticated}
						exact
						path="/login"
						render={(props) => (
							<LoginPage handleLogin={handleLogin} {...props} />
						)}
					/>
					<PrivateRoute
						isAuthenticated={isAuthenticated}
						exact
						path="/profile"
						render={(props) => (
							<ProfilePage
								handleLogout={handleLogout}
								userData={userData}
								{...props}
							/>
						)}
					/>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
