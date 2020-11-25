import axios from "axios";
import {
	EVENT_LIST_REQUEST,
	EVENT_LIST_SUCCESS,
	EVENT_LIST_FAIL,
} from "../constants/eventConstants";

export const listEvents = () => async (dispatch) => {
	try {
		dispatch({ type: EVENT_LIST_REQUEST });

		const { data } = await axios.get(
			`http://13.127.184.222:8000/schedule/event-list`
		);

		dispatch({
			type: EVENT_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: EVENT_LIST_FAIL,
			payload: error.message,
		});
	}
};
