import React, { useEffect } from "react";
import { TweenMax, Expo } from "gsap";
import { useDispatch } from "react-redux";

import "./Homescreen.scss";

//components
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import OnlineEvent from "../../components/OnlineEventList/OnlineEventList";
import OfflineEvent from "../../components/OfflineEventList/OfflineEventList";
import MusicSection from "../../components/MusicSection/MusicSection";
import MovieSection from "../../components/MoviesSection/MoviesSection";
import Footer from "../../components/Footer/Footer";

// actions
import { listEvents } from "../../store/actions/eventActions";

const Homescreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listEvents());

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
			<div className="overlay first"></div>
			<div className="overlay second"></div>
			<div className="overlay third"></div>
			<Navbar />
			<Banner />
			<OnlineEvent />
			<OfflineEvent />
			<MusicSection />
			<MovieSection />
			<Footer />
		</div>
	);
};

export default Homescreen;
