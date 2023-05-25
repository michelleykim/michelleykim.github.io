import React from "react";
import "./ClawGame.css";
import ClawMachineImg from "../assets/claw machine.svg";
import BodyImg from "../assets/body.svg";
import HingeImg from "../assets/hinge.svg";
import RodImg from "../assets/rod.svg";
import ClawLImg from "../assets/clawL.svg";
import ClawRImg from "../assets/clawR.svg";
import ButtonLImg from "../assets/buttonL.svg";
import ButtonRImg from "../assets/buttonR.svg";
import ButtonPImg from "../assets/buttonP.svg";

const ClawGame = () => {
	const clawBody = React.createRef();
	const clawHinge = React.createRef();
	const clawRod = React.createRef();
	const clawL = React.createRef();
	const clawR = React.createRef();
	const rate = 30;
	const rate0 = 85;

	let clawLXPos = 0;
	let clawRXPos = 0;
	let clawBodyXPos = 0;
	let clawHingeXPos = 0;
	let clawRodXPos = 0;

	let clawHingeYPos = 0;
	let clawYPos = 0;
	let clawRodYPos = 0;
	let clawRodSize = 0;

	let rotateL = 0;
	let rotateR = 0;

	const xClaw = (e, dir) => {
		e.target.style.pointerEvents = "none";

		if (dir === "L") {
			clawBodyXPos -= rate;
			clawLXPos -= rate0;
			clawRXPos -= rate0;
			clawHingeXPos -= rate0 - 1;
			clawRodXPos -= 140;
		}
		if (dir === "R") {
			clawBodyXPos += rate;
			clawLXPos += rate0;
			clawRXPos += rate0;
			clawHingeXPos += rate0;
			clawRodXPos += 140;
		}

		if (clawBodyXPos < -7 * rate) {
			clawBodyXPos = -7 * rate;
			clawLXPos = -7 * rate0;
			clawRXPos = -7 * rate0;
			clawHingeXPos = -7 * rate0;
			clawRodXPos = -7 * 140;
		}
		if (clawBodyXPos > 6 * rate) {
			clawBodyXPos = 7 * rate - 5;
			clawLXPos = 7 * rate0;
			clawRXPos = 7 * rate0;
			clawHingeXPos = 7 * rate0 - 4;
			clawRodXPos = 7 * 140;
		}

		clawBody.current.style.transition = `transform 0.5s`;
		clawHinge.current.style.transition = `transform 0.5s`;
		clawRod.current.style.transition = `transform 0.5s`;
		clawL.current.style.transition = `transform 0.5s`;
		clawR.current.style.transition = `transform 0.5s`;

		setTimeout(function () {
			moveClaw();
			e.target.style.pointerEvents = "";
		}, 500);
	};

	const yClaw = (e) => {
		e.target.style.pointerEvents = "none";

		// go down
		clawHingeYPos += 700;
		clawYPos += 350;
		clawRodYPos += 330;
		clawRodSize = 10;
		rotateL = 0.2;
		rotateR = -0.2;
		clawYPos -= 45;
		clawLXPos -= 70;
		clawRXPos += 65;

		clawHinge.current.style.transition = `transform 1s`;
		clawL.current.style.transition = `transform 1s`;
		clawR.current.style.transition = `transform 1s`;
		clawRod.current.style.transition = `transform 1s`;

		moveClaw();

		setTimeout(function () {
			rotateL -= 0.2;
			rotateR += 0.2;
			clawYPos += 45;
			clawLXPos += 70;
			clawRXPos -= 65;

			moveClaw();
		}, 1000);

		// come up
		setTimeout(function () {
			clawHingeYPos -= 700;
			clawYPos -= 350;
			clawRodYPos -= 330;
			clawRodSize = 1;

			moveClaw();

			setTimeout(function () {
				e.target.style.pointerEvents = "";
			}, 2000);
		}, 2000);
	};

	const moveClaw = () => {
		clawBody.current.style.transform = `translateX(${clawBodyXPos}%)`;
		clawRod.current.style.transform = `translate(${clawRodXPos}%, ${clawRodYPos}%) scaleY(${clawRodSize})`;
		clawHinge.current.style.transform = `translate(${clawHingeXPos}%, ${clawHingeYPos}%)`;
		clawL.current.style.transform = `translate(${clawLXPos}%, ${clawYPos}%) rotate(${rotateL}turn)`;
		clawR.current.style.transform = `translate(${clawRXPos}%, ${clawYPos}%) rotate(${rotateR}turn)`;
	};

	return (
		<div className="Game">
			<img id="ClawMachine" src={ClawMachineImg} alt="claw machine" />
			<img id="ClawBody" ref={clawBody} src={BodyImg} alt="claw body" />
			<img id="ClawHinge" ref={clawHinge} src={HingeImg} alt="claw hinge" />
			<img id="ClawRod" ref={clawRod} src={RodImg} alt="claw rod" />
			<img id="ClawL" ref={clawL} src={ClawLImg} alt="left claw" />
			<img id="ClawR" ref={clawR} src={ClawRImg} alt="right claw" />

			<img
				id="ButtonL"
				src={ButtonLImg}
				alt="left button"
				onClick={(e) => xClaw(e, "L")}
			/>
			<img
				id="ButtonR"
				src={ButtonRImg}
				alt="right button"
				onClick={(e) => xClaw(e, "R")}
			/>
			<img
				id="ButtonP"
				src={ButtonPImg}
				alt="play button"
				onClick={(e) => yClaw(e)}
			/>
		</div>
	);
};

export default ClawGame;
