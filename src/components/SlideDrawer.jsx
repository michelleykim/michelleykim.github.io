import React from "react";
import "./SlideDrawer.css";
import Projects from "./pages/Projects";
import About from "./pages/About";
import { useSelector } from "react-redux";

const SlideDrawer = (props) => {
	const sidePannel = useSelector((state) => state.state.sidePannel);

	let drawerClasses = "SideDrawer";

	if (props.show) {
		drawerClasses = "SideDrawer Open";
	}
	return (
		<div className={drawerClasses}>
			{sidePannel === "about" ? <About></About> : <Projects></Projects>}
		</div>
	);
};

export default SlideDrawer;
