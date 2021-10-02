import { Redirect, Route } from "react-router-dom";

export const AuthRoute = ({ isAuthenticated, ...rest }) => {
	if (isAuthenticated) {
		return <Redirect to={`/`} />;
	}
	return <Route {...rest} />;
};

export const PrivateRoute = ({ isAuthenticated, ...rest }) => {
	if (!isAuthenticated) {
		return <Redirect to={`/login`} />;
	}
	return <Route {...rest} />;
};

