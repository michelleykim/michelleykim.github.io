import React from "react";
import "./ClawGame.css";
import ClawMachineImg from "../assets/claw machine.svg";

const ClawGame = () => {
	return (
		<div className="Game">
			<img src={ClawMachineImg} alt="claw machine" />
		</div>
	);
};

export default ClawGame;
