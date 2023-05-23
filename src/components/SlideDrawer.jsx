import React from "react";
import "./SlideDrawer.css";

const SlideDrawer = (props) => {
	let drawerClasses = "SideDrawer";
	if (props.show) {
		drawerClasses = "SideDrawer Open";
	}
	return (
		<div className={drawerClasses}>
			<h1>Hello, I'm sliding!</h1>
		</div>
	);
};

export default SlideDrawer;
