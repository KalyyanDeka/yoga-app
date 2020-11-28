import React from "react";

import Spinner from "../UI/Spinner/Spinner";
import "../UI/PackageCards.scss";

import { useSelector } from "react-redux";

const MusicSection = () => {
	const eventList = useSelector((state) => state.eventList);
	const { loading, events } = eventList;

	const musicCards = (
		<div className="products">
			<h1 className="products__heading">Music packages</h1>
			<div className="products__container">
				{loading && <Spinner />}
				{events &&
					events.map((event) => {
						if (event.class_type === "Audio") {
							return (
								<div className="item" key={event._id}>
									<img
										className="item__image"
										src={event.event_image}
										alt="img"
										variant="top"
									/>

									<h3 className="item__heading">
										Music by {event.master_name}
									</h3>

									<h3 className="item__desc">{event.description}</h3>
								</div>
							);
						} else {
							return null;
						}
					})}
			</div>
		</div>
	);
	return musicCards;
};

export default MusicSection;
