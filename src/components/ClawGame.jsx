import React from "react";
import "./ClawGame.css";
import ClawMachineImg from "../assets/claw machine.svg";
import ClawBodyImg from "../assets/claw.svg";
import ClawLImg from "../assets/clawL.svg";
import ClawRImg from "../assets/clawR.svg";

const ClawGame = () => {
	return (
		<div className="Game">
			<img id="ClawMachine" src={ClawMachineImg} alt="claw machine" />
			<img id="ClawBody" src={ClawBodyImg} alt="claw body" />
			<img id="ClawL" src={ClawLImg} alt="left claw" />
			<img id="ClawR" src={ClawRImg} alt="right claw" />
		</div>
	);
};

export default ClawGame;
