import React, { useState } from "react";
import "./App.css";
import ClawGame from "./components/ClawGame";
import SlideDrawer from "./components/SlideDrawer";
import Tassel from "./assets/tassel.svg";

const App = () => {
	const [open, setOpen] = useState(false);
	const [showResume, setShowResume] = useState(false);
	const [darkmode, setDarkmode] = useState(false);

	return (
		<div className="App">
			<div className="NavBar">
				<div id="TopNav">
					<img
						id="tassel"
						src={Tassel}
						alt="light switch"
						onClick={() => {
							setDarkmode(!darkmode);
						}}
					/>
					<button
						onClick={() => {
							setOpen(!open);
						}}
					>
						about
					</button>
					<button
						onClick={() => {
							setOpen(!open);
						}}
					>
						project
					</button>
					<button
						onClick={() => {
							setShowResume(!showResume);
						}}
					>
						resume
					</button>
					<button
						onClick={() => {
							setOpen(!open);
						}}
					>
						contact
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

export default App;
