import React from "react";
import "./ClawGame.css";
import ClawMachineImg from "../assets/claw machine.svg";
import ClawBodyImg from "../assets/claw.svg";
import ClawLImg from "../assets/clawL.svg";
import ClawRImg from "../assets/clawR.svg";
import ButtonLImg from "../assets/buttonL.svg";
import ButtonRImg from "../assets/buttonR.svg";
import ButtonPImg from "../assets/buttonP.svg";

const ClawGame = () => {
	const clawBody = React.createRef();
	const clawL = React.createRef();
	const clawR = React.createRef();
	const rate = 30;
	const diff = 62;
	let clawXPos = 0;
	let clawBodyXPos = 0;

	const moveClaw = (dir) => {
		if (dir === "L") {
			clawBodyXPos -= rate;
			clawXPos -= diff + rate;
		}
		if (dir === "R") {
			clawBodyXPos += rate;
			clawXPos += diff + rate;
		}

		if (clawBodyXPos < -6 * rate) {
			clawBodyXPos = -6 * rate;
			clawXPos = -6 * (diff + rate);
		}
		if (clawBodyXPos > 6 * rate) {
			clawBodyXPos = 7 * rate - 5;
			clawXPos = 7 * (diff + rate);
		}

		clawBody.current.style.transform = `translateX(${clawBodyXPos}%)`;
		clawBody.current.style.transition = `transform 0.3s ease-out`;

		clawL.current.style.transform = `translateX(${clawXPos}%)`;
		clawL.current.style.transition = `transform 0.3s ease-out`;

		clawR.current.style.transform = `translateX(${clawXPos}%)`;
		clawR.current.style.transition = `transform 0.3s ease-out`;
	};

	return (
		<div className="Game">
			<img id="ClawMachine" src={ClawMachineImg} alt="claw machine" />
			<img id="ClawBody" ref={clawBody} src={ClawBodyImg} alt="claw body" />
			<img id="ClawL" ref={clawL} src={ClawLImg} alt="left claw" />
			<img id="ClawR" ref={clawR} src={ClawRImg} alt="right claw" />

			<img
				id="ButtonL"
				src={ButtonLImg}
				alt="left button"
				onClick={() => moveClaw("L")}
			/>
			<img
				id="ButtonR"
				src={ButtonRImg}
				alt="right button"
				onClick={() => moveClaw("R")}
			/>
			<img id="ButtonP" src={ButtonPImg} alt="play button" />
		</div>
	);
};

export default ClawGame;
