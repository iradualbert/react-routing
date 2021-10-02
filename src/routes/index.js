import { Redirect, Route } from "react-router-dom";

const AuthRoute = ({ isAuthenticated, ...rest }) => {
	if (isAuthenticated) {
		return <Redirect to={`/`} />;
	}
	return <Route {...rest} />;
};

const PrivateRoute = ({ isAuthenticated, ...rest }) => {
	if (!isAuthenticated) {
		return <Redirect to={`/login`} />;
	}
	return <Route {...rest} />;
};

export { AuthRoute, PrivateRoute };
