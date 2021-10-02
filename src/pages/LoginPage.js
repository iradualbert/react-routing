import { useState } from "react";
import React from "react";

const LoginPage = ({ handleLogin }) => {
	const [fullname, setFullname] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const userData = { fullname, username, email, password };
		handleLogin(userData);
	};

	return (
			<form onSubmit={handleSubmit}>
				<input
					placeholder="Full Name"
					required
					value={fullname}
					onChange={(e) => setFullname(e.target.value)}
				/>
				<input
					placeholder="Username"
					required
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					placeholder="Email"
					required
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					placeholder="Password"
					required
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Create Account</button>
			</form>
	);
};

export default LoginPage;
