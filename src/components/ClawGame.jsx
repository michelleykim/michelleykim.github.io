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
import { useSelector } from "react-redux";

const ClawGame = () => {
	const state = useSelector((state) => state.state);

	const clawBody = React.createRef();
	const clawHinge = React.createRef();
	const clawRod = React.createRef();
	const clawL = React.createRef();
	const clawR = React.createRef();
	const buttonL = React.createRef();
	const buttonR = React.createRef();

	const prize1 = React.createRef();

	const rate = 30;
	const rate0 = 77;
	const rate1 = 71.6;

	let clawLXPos = 0;
	let clawRXPos = 0;
	let clawBodyXPos = 0;
	let clawHingeXPos = 0;
	let clawRodXPos = 0;

	let clawHingeYPos = 0;
	let clawYPos = 0;
	let clawRodYPos = 0;
	let clawRodSize = 1;

	let rotateL = 0;
	let rotateR = 0;

	const xClaw = (e, dir) => {
		e.target.style.pointerEvents = "none";

		if (dir === "L") {
			clawBodyXPos -= rate;
			clawLXPos -= rate0;
			clawRXPos -= rate0;
			clawHingeXPos -= rate1;
			clawRodXPos -= 115;
		}
		if (dir === "R") {
			clawBodyXPos += rate;
			clawLXPos += rate0;
			clawRXPos += rate0;
			clawHingeXPos += rate1;
			clawRodXPos += 115;
		}

		if (clawBodyXPos < -6 * rate) {
			clawBodyXPos = -6 * rate;
			clawLXPos = -6 * rate0;
			clawRXPos = -6 * rate0;
			clawHingeXPos = -6 * rate1;
			clawRodXPos = -6 * 115;
		}
		if (clawBodyXPos > 6 * rate) {
			clawBodyXPos = 6 * rate;
			clawLXPos = 6 * rate0;
			clawRXPos = 6 * rate0;
			clawHingeXPos = 6 * rate1 - 4;
			clawRodXPos = 6 * 115;
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
		buttonL.current.style.pointerEvents = "none";
		buttonR.current.style.pointerEvents = "none";

		// go down
		clawHingeYPos += 570;
		clawYPos += 255;
		clawRodYPos += 390;
		clawRodSize = 11;
		rotateL = 0.2;
		rotateR = -0.2;
		clawLXPos -= 70;
		clawRXPos += 65;

		// TODO: check if ^ these numbers overlap with prize1.current.getBoundingClientRect();
		// if so, only go down to the y position of the prize

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
			clawHingeYPos -= 570;
			clawYPos -= 300;
			clawRodYPos -= 390;
			clawRodSize = 1;

			moveClaw();

			setTimeout(function () {
				e.target.style.pointerEvents = "";
				buttonL.current.style.pointerEvents = "";
				buttonR.current.style.pointerEvents = "";
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

			<div id="prizes">
				<span className="prize" ref={prize1} />
			</div>

			<img
				id="ButtonL"
				src={ButtonLImg}
				alt="left button"
				ref={buttonL}
				onClick={(e) => xClaw(e, "L")}
			/>
			<img
				id="ButtonR"
				src={ButtonRImg}
				alt="right button"
				ref={buttonR}
				onClick={(e) => xClaw(e, "R")}
			/>
			<img
				id="ButtonP"
				src={ButtonPImg}
				alt="play button"
				onClick={(e) => yClaw(e)}
			/>
			<p
				id="copyrightText"
				style={state.isNightmode ? { color: "#E1DBFF" } : { color: "black" }}
			>
				© 2023. All rights reserved.
			</p>
		</div>
	);
};

export default ClawGame;
