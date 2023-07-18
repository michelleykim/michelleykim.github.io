import React from "react";

const Chip = ({ text }) => {
	const chip = {
		border: "2px solid",
		borderRadius: "10px",
		padding: "8px 12px",
		marginRight: "12px",
		marginBottom: "8px",
		fontSize: "16px",
	};

	return <span style={chip}>{text}</span>;
};

export default Chip;
