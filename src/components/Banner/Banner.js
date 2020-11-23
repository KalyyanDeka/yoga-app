import React, { useEffect } from "react";
import { TweenMax, Expo } from "gsap";
import "./Banner.scss";

const Banner = () => {
	useEffect(() => {
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
	}, []);
	return (
		<div class="container">
			<div class="text">
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

			<div className="image">
				<div class="img-1"></div>

				<div class="img-2"></div>
			</div>
		</div>
	);
};

export default Banner;
