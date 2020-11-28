import React, { useEffect } from "react";
import { TweenMax, Expo } from "gsap";

import "../UI/EventCards.scss";
import "./OfflineEventList.scss";

import Spinner from "../UI/Spinner/Spinner";

import { useSelector } from "react-redux";

import author from "../../assests/images/master_demo.jpg";

const OfflineEventList = () => {
	useEffect(() => {
		TweenMax.from(".offlineClass", 1, {
			delay: 2.8,
			opacity: 0,
			ease: Expo.easeInOut,
		});
	}, []);

	const eventList = useSelector((state) => state.eventList);
	const { loading, events } = eventList;

	return (
		<div className="offlineClass">
			<h1 className="heading">Offline Events</h1>
			{loading && <Spinner />}
			<section class="card-list">
				{events &&
					events.map((event) => {
						if (event.class_type === "Offline") {
							return (
								<article class="card">
									<header class="card-header">
										<p>{event.date}</p>
										<h2>{event.yoga_category_name}</h2>
									</header>

									<img class="card-image" src={event.event_image} alt="event" />

									<div class="card-author">
										<a class="author-avatar" href="/">
											<img src={author} alt="author" />
										</a>

										<div class="author-name">{event.description}</div>
									</div>
									<div class="tags">
										<a href="/">Learn more &rarr;</a>
									</div>
								</article>
							);
						} else {
							return null;
						}
					})}
			</section>
		</div>
	);
};

export default OfflineEventList;
