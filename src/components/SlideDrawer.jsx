import React from "react";
import "./SlideDrawer.css";
import Projects from "./Projects";

const SlideDrawer = (props) => {
	let drawerClasses = "SideDrawer";
	if (props.show) {
		drawerClasses = "SideDrawer Open";
	}
	return (
		<div className={drawerClasses}>
			<Projects></Projects>
		</div>
	);
};

export default SlideDrawer;
