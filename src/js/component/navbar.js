import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";

export const Navbar = () => {
	return (
		<div className="bg-light">
		<nav className="container navbar navbar-light bg-light mb-3">
			<Link to="/">
				<div className="navbar-brand mb-0 h1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/640px-Star_wars2.svg.png" width="100px"></img></div>
			</Link>
			<div className="ml-auto">
				<div class="dropdown">
					<Dropdown/>
				</div>
			</div>
		</nav>
		</div>
	);
};
