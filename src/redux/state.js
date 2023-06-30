import { SET_SIDE_PANNEL } from "../constants";

const initialState = {
	isPlaying: false,
	sidePannel: "about",
	isNightmode: false,
};

const state = (state = initialState, action) => {
	switch (action.type) {
		case SET_SIDE_PANNEL:
			console.log({ ...state, sidePannel: action.payload });
			return { ...state, sidePannel: action.payload };
		case "ACTION2":
			return initialState;
		default:
			return state;
	}
};

export default state;
