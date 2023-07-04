import React, { useState } from "react";
import "./Home.css";
import ClawGame from "../ClawGame";
import SlideDrawer from "../SlideDrawer";
import Tassel from "../../assets/tassel.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSidePannel, setNightmode } from "../../redux/actions";

const Home = () => {
	const state = useSelector((state) => state.state);
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [showResume, setShowResume] = useState(false);
	const [darkmode, setDarkmode] = useState(state.isNightmode);

	return (
		<div className={`App ${darkmode ? "nightMode" : "dayMode"}`}>
			<div className="NavBar">
				<div id="TopNav">
					<img
						id="tassel"
						src={Tassel}
						alt="light switch"
						onClick={() => {
							dispatch(setNightmode(!darkmode));
							setDarkmode(!darkmode);
						}}
					/>
					<button
						style={darkmode ? { color: "#E1DBFF" } : { color: "black" }}
						onClick={() => {
							setOpen(false);
						}}
					>
						home
					</button>
					<button
						style={darkmode ? { color: "#E1DBFF" } : { color: "black" }}
						onClick={() => {
							dispatch(setSidePannel("about"));
							setOpen(true);
						}}
					>
						about
					</button>
					<button
						style={darkmode ? { color: "#E1DBFF" } : { color: "black" }}
						onClick={() => {
							dispatch(setSidePannel("project"));
							setOpen(true);
						}}
					>
						project
					</button>
					<button
						style={darkmode ? { color: "#E1DBFF" } : { color: "black" }}
						onClick={() => {
							setShowResume(!showResume);
						}}
					>
						resume
					</button>
				</div>
			</div>
			<div
				className="Content"
				style={
					open ? { justifyContent: "flex-start" } : { justifyContent: "center" }
				}
			>
				<div style={open ? { height: "60%" } : { height: "80%" }}>
					<ClawGame></ClawGame>
				</div>

				<SlideDrawer show={open}></SlideDrawer>

				{showResume && (
					<object
						data="http://africau.edu/images/default/sample.pdf"
						type="application/pdf"
						id="resume"
					>
						<p>
							Alternative text - include a link{" "}
							<a href="http://africau.edu/images/default/sample.pdf">
								to the PDF!
							</a>
						</p>
					</object>
				)}
			</div>
		</div>
	);
};

export default Home;
