import React, { useState } from "react";
import "./App.css";
import ClawGame from "./components/ClawGame";
import SlideDrawer from "./components/SlideDrawer";
import Tassel from "./assets/tassel.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSidePannel } from "./redux/actions";

const App = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

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
							setOpen(false);
						}}
					>
						home
					</button>
					<button
						onClick={() => {
							dispatch(setSidePannel("about"));
							setOpen(true);
						}}
					>
						about
					</button>
					<button
						onClick={() => {
							dispatch(setSidePannel("project"));
							setOpen(true);
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
