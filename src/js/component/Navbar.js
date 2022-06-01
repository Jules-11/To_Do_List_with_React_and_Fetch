import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
			<div className="container-fluid px-4">
				<a className="navbar-brand" href="#">
					What I should do!
				</a>
			</div>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse px-4"
				id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<a
							className="nav-link active text-white"
							aria-current="page"
							href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
