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
import EmailBall from "../assets/socials/email.svg";
import GithubBall from "../assets/socials/github.svg";
import LinkedinBall from "../assets/socials/linkedin.svg";
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

	const email = React.createRef();
	const github = React.createRef();
	const linkedin = React.createRef();

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
		clawHingeYPos += 530;
		clawYPos += 235;
		clawRodYPos += 390;
		clawRodSize = 9;
		rotateL = 0.2;
		rotateR = -0.2;
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
			clawHingeYPos -= 530;
			clawYPos -= 280;
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

		switch (checkCollision()) {
			case "email":
				email.current.style.transition = `transform 1s 1s`;
				email.current.style.transform = `translateY(-210%)`;
				setTimeout(function () {
					email.current.remove();
					window.location =
						"mailto:yeojin011016@gmail.com?subject=Me&body=Sent from michelleykim.github.io!";
				}, 2000);
				break;
			case "github":
				github.current.style.transition = `transform 1s 1s`;
				github.current.style.transform = `translateY(-210%)`;
				setTimeout(function () {
					github.current.remove();
					window.open("https://github.com/michelleykim", "_blank");
				}, 2000);
				break;
			case "linkedin":
				linkedin.current.style.transition = `transform 1s 1s`;
				linkedin.current.style.transform = `translateY(-210%)`;
				setTimeout(function () {
					linkedin.current.remove();
					window.open(
						"https://www.linkedin.com/in/michelle-yeojin-kim/",
						"_blank"
					);
				}, 2000);
				break;
			default:
			//console.log("no collision");
		}
	};

	const checkCollision = () => {
		let hingeX =
			clawHinge.current.getBoundingClientRect().x +
			clawHinge.current.getBoundingClientRect().width / 2;
		let hingeY = clawHinge.current.getBoundingClientRect().y;

		let emailX =
			email.current.getBoundingClientRect().x +
			email.current.getBoundingClientRect().width / 2;
		let emailY = email.current.getBoundingClientRect().y;

		let githubX =
			github.current.getBoundingClientRect().x +
			github.current.getBoundingClientRect().width / 2;
		let githubY = github.current.getBoundingClientRect().y;

		let linkedinX =
			linkedin.current.getBoundingClientRect().x +
			linkedin.current.getBoundingClientRect().width / 2;
		let linkedinY = linkedin.current.getBoundingClientRect().y;

		if (Math.abs(emailX - hingeX) <= 10 && Math.abs(emailY - hingeY) <= 22) {
			return "email";
		} else if (
			Math.abs(githubX - hingeX) <= 10 &&
			Math.abs(githubY - hingeY) <= 22
		) {
			return "github";
		} else if (
			Math.abs(linkedinX - hingeX) <= 10 &&
			Math.abs(linkedinY - hingeY) <= 30
		) {
			return "linkedin";
		} else {
			return false;
		}
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
				<img
					className="prize"
					id="email"
					ref={email}
					src={EmailBall}
					alt="prize- email"
				></img>
				<img
					className="prize"
					id="github"
					ref={github}
					src={GithubBall}
					alt="prize- github"
				></img>
				<img
					className="prize"
					id="linkedin"
					ref={linkedin}
					src={LinkedinBall}
					alt="prize- linkedin"
				></img>
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
