import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<>
			<h1>Welcome</h1>
			<Link to="/profile">Profile Page</Link>
			<Link to="/login">Login Page</Link>
		</>
	);
};

export default HomePage;
