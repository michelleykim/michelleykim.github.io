import React, { useState } from "react";
import "./App.css";
import ClawGame from "./components/ClawGame";
import SlideDrawer from "./components/SlideDrawer";

const App = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="App">
			<div className="NavBar">
				<div id="TopNav">
					<button
						onClick={() => {
							setOpen(!open);
						}}
					>
						Project
					</button>
					<button
						onClick={() => {
							setOpen(!open);
						}}
					>
						Resume
					</button>
					<button
						onClick={() => {
							setOpen(!open);
						}}
					>
						Contact
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
			</div>
		</div>
	);
};

export default App;