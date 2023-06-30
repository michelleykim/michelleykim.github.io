import * as types from "../constants";

export const setSidePannel = (type) => {
	return {
		type: types.SET_SIDE_PANNEL,
		payload: type,
	};
};
