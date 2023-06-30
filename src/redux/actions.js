import * as types from "../constants";

export const setSidePannel = (type) => {
	return {
		type: types.SET_SIDE_PANNEL,
		payload: type,
	};
};

export const setNightmode = (bool) => {
	return {
		type: types.SET_NIGHT_MODE,
		payload: bool,
	};
};

export const setPlaying = (bool) => {
	return {
		type: types.SET_PLAYING,
		payload: bool,
	};
};
