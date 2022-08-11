import { useState } from 'react';

const LoggedIn = () => {
	const [isLoggedIn, setIsLoggenIn] = useState(false);

	const handleLogin = () => setIsLoggenIn(true);
	const handleLogout = () => setIsLoggenIn(false);
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Log Out</button>
			<h3>user Is {isLoggedIn ? 'is logged in' : 'is not logged in'}</h3>
		</div>
	);
};

export default LoggedIn;
