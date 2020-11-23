import React, { useEffect } from "react";
import { TweenMax, Expo } from "gsap";

import "./Homescreen.scss";

//components
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import OnlineClasses from "../../components/OnlineClasssList/OnlineClassList";

const Homescreen = () => {
	useEffect(() => {
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
			<Banner />
			<OnlineClasses />
		</div>
	);
};

export default Homescreen;
