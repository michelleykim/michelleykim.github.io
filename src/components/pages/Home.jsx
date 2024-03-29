import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import ClawGame from "../ClawGame";
import SlideDrawer from "../SlideDrawer";
import Tassel from "../../assets/tassel.svg";
import resume from "../../assets/michelle_kim_resume.pdf"
import { useDispatch, useSelector } from "react-redux";
import { setSidePannel, setNightmode } from "../../redux/actions";

const Home = () => {
	const state = useSelector((state) => state.state);
	const dispatch = useDispatch();
	const navigate = useNavigate();

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
							navigate("/");
						}}
					>
						home
					</button>
					<button
						style={darkmode ? { color: "#E1DBFF" } : { color: "black" }}
						onClick={() => {
							dispatch(setSidePannel("about"));
							setOpen(true);
							navigate("/about");
						}}
					>
						about
					</button>
					<button
						style={darkmode ? { color: "#E1DBFF" } : { color: "black" }}
						onClick={() => {
							dispatch(setSidePannel("project"));
							setOpen(true);
							navigate("/project");
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
						data={resume}
						type="application/pdf"
						id="resume"
					>
						<p>
							Link to pdf: 
							<a href="https://drive.google.com/file/d/1z5ZIh2gvTB03WdqrZOUqlMGNI0BWVRiD/view?usp=sharing">
							</a>
						</p>
					</object>
				)}
			</div>
		</div>
	);
};

export default Home;
