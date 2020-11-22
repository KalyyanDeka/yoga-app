import React, { useEffect } from "react";
import "./Navbar.scss";

import { TweenMax, Power4, Expo } from "gsap";

const Navbar = () => {
	useEffect(() => {
		TweenMax.staggerFrom(
			".menu-links ul li",
			1,
			{
				delay: 1.2,
				opacity: 0,
				x: -20,
				ease: Power4.easeInOut,
			},
			0.08
		);

		TweenMax.from(".search", 1, {
			delay: 1.6,
			opacity: 0,
			x: -20,
			ease: Expo.easeInOut,
		});

		TweenMax.from(".cart", 1, {
			delay: 1.8,
			opacity: 0,
			x: -20,
			ease: Expo.easeInOut,
		});

		TweenMax.to(".border-bottom", 1, {
			delay: 1.4,
			width: "100%",
			ease: Expo.easeInOut,
		});
	}, []);

	return (
		<div>
			<div class="nav">
				<div class="menu-links">
					<ul>
						<li>
							<strong>Home</strong>
						</li>
						<li>
							<strong>Categories</strong>
						</li>
						<li>
							<strong>About</strong>
						</li>

						<li>
							<strong>Profile</strong>
						</li>
					</ul>
				</div>
				<div class="search">
					<i class="fa fa-search"></i>
				</div>
				<div class="cart">
					<i class="fa fa-shopping-cart"></i>
				</div>
			</div>

			<hr class="border-bottom" />
		</div>
	);
};

export default Navbar;
