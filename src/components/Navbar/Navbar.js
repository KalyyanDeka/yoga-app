import React, { useEffect } from "react";
import "./Navbar.scss";

import { TweenMax, Expo } from "gsap";
import {
	Star,
	Home,
	Saved,
	Share,
	Profile,
	Categories,
} from "../UI/Icons/Icons";

const Navbar = () => {
	useEffect(() => {
		TweenMax.from(".navbar", 1, {
			delay: 2.8,
			opacity: 0,
			ease: Expo.easeInOut,
		});
	}, []);

	return (
		<div>
			<nav class="navbar">
				<ul class="navbar-nav">
					<li class="logo">
						<a href="/" class="nav-link">
							<span class="link-text logo-text"></span>
							<Star />
						</a>
					</li>

					<li class="nav-item">
						<a href="/" class="nav-link">
							<Home />
							<span class="link-text">Home</span>
						</a>
					</li>

					<li class="nav-item">
						<a href="/" class="nav-link">
							<Saved />
							<span class="link-text">Saved</span>
						</a>
					</li>

					<li class="nav-item">
						<a href="/" class="nav-link">
							<Share />
							<span class="link-text">Share</span>
						</a>
					</li>

					<li class="nav-item">
						<a href="/" class="nav-link">
							<Profile />
							<span class="link-text">Profile</span>
						</a>
					</li>

					<li class="nav-item" id="themeButton">
						<a href="/" class="nav-link">
							<Categories />
							<span class="link-text">Categories</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
