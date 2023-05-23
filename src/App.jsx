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
					<a href="#main-footer"> Contact</a>
					<a href="#main" target="_blank">
						Resume /
					</a>
					<a href="#works">Project /</a>
				</div>
			</div>
			<div
				className="Content"
				style={
					open
						? { justifyContent: "space-between" }
						: { justifyContent: "center" }
				}
			>
				<ClawGame className="Item"></ClawGame>
				<SlideDrawer show={open}></SlideDrawer>
			</div>
			<button
				onClick={() => {
					setOpen(true);
				}}
			>
				BUTTON
			</button>
		</div>
	);
};

export default App;
