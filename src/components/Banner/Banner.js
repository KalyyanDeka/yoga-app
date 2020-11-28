import React, { useEffect } from "react";
import { TweenMax, Expo } from "gsap";
import "./Banner.scss";

const Banner = () => {
	useEffect(() => {
		TweenMax.to(".banner__text--title", 1, {
			delay: 2.2,
			width: "100%",
			ease: Expo.easeInOut,
		});

		TweenMax.from(".banner__text--desc", 1, {
			delay: 2.8,
			opacity: 0,
			x: -20,
			ease: Expo.easeInOut,
		});

		TweenMax.from(".banner__text--readmore", 1, {
			delay: 2.8,
			opacity: 0,
			x: -20,
			ease: Expo.easeInOut,
		});

		TweenMax.to(".banner__image--img-1", 1, {
			delay: 2.2,
			width: "450px",
			ease: Expo.easeInOut,
		});

		TweenMax.to(".banner__image--img-2", 1, {
			delay: 2.2,
			width: "300px",
			ease: Expo.easeInOut,
		});
	}, []);
	return (
		<div className="banner">
			<div className="banner__container">
				<div className="banner__text">
					<h1 className="banner__text--title">
						YOGA FOR <br />
						<span className="title-span">EVERYONE</span>
					</h1>
					<p className="banner__text--desc">
						“Yoga is the journey of the self, through the self, to the self.”
						<br /> ― The Bhagavad Gita .
					</p>
					<a href="/" className="banner__text--readmore">
						Scroll For More
					</a>
				</div>

				<div className="banner__image">
					<div className="banner__image--img-1"></div>

					<div className="banner__image--img-2"></div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
