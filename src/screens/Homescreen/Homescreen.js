import React, { useRef, useEffect } from "react";
import { TweenMax, Power4, Expo } from "gsap";

import "./Homescreen.scss";

//components
import Navbar from "../../components/Navbar/Navbar";

const Homescreen = () => {
	// let image = useRef(null);
	// let container = useRef(null);

	useEffect(() => {
		TweenMax.from(".subtitle", 1, {
			delay: 2.8,
			opacity: 0,
			x: -20,
			ease: Expo.easeInOut,
		});

		TweenMax.to(".title", 1, {
			delay: 2.2,
			width: "100%",
			ease: Expo.easeInOut,
		});

		TweenMax.from(".desc", 1, {
			delay: 2.8,
			opacity: 0,
			x: -20,
			ease: Expo.easeInOut,
		});

		TweenMax.from(".readmore", 1, {
			delay: 2.8,
			opacity: 0,
			x: -20,
			ease: Expo.easeInOut,
		});

		TweenMax.to(".slider", 1, {
			delay: 3,
			opacity: 1,
			ease: Expo.easeInOut,
		});

		TweenMax.to(".img-1", 1, {
			delay: 2.2,
			width: "450px",
			ease: Expo.easeInOut,
		});

		TweenMax.to(".img-2", 1, {
			delay: 2.2,
			width: "300px",
			ease: Expo.easeInOut,
		});

		TweenMax.to(".img-3", 1, {
			delay: 2.2,
			width: "300px",
			ease: Expo.easeInOut,
		});

		TweenMax.to(".first", 1.5, {
			delay: 0.2,
			left: "-100%",
			ease: Expo.easeInOut,
		});

		TweenMax.to(".second", 1.5, {
			delay: 0.4,
			left: "-100%",
			ease: Expo.easeInOut,
		});

		TweenMax.to(".third", 1.5, {
			delay: 0.6,
			left: "-100%",
			ease: Expo.easeInOut,
		});
	}, []);

	return (
		<div>
			<div class="overlay first"></div>
			<div class="overlay second"></div>
			<div class="overlay third"></div>

			<Navbar />

			<div class="container">
				<div class="text">
					{/* <p class="subtitle">The Authority In</p> */}
					<h1 class="title">
						YOGA FOR <br />
						<span className="title-span">EVERYONE</span>
					</h1>
					<p class="desc">
						“Yoga is the journey of the self, through the self, to the self.”
						<br /> ― The Bhagavad Gita .
					</p>
					<a href="#" class="readmore">
						Scroll For More
					</a>
				</div>

				<div class="img-1"></div>

				<div class="img-2"></div>
			</div>
		</div>
	);
};

export default Homescreen;
