import { SET_NIGHT_MODE, SET_SIDE_PANNEL, SET_PLAYING } from "../constants";

const initialState = {
	isPlaying: false,
	sidePannel: "about",
	isNightmode: false,
};

const state = (state = initialState, action) => {
	switch (action.type) {
		case SET_SIDE_PANNEL:
			return { ...state, sidePannel: action.payload };
		case SET_NIGHT_MODE:
			return { ...state, isNightmode: action.payload };
		case SET_PLAYING:
			return { ...state, isPlaying: action.payload };
		default:
			return state;
	}
};

export default state;
