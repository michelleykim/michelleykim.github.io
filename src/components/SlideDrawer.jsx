import React from "react";
import "./SlideDrawer.css";

const SlideDrawer = (props) => {
	let drawerClasses = "SideDrawer";
	if (props.show) {
		drawerClasses = "SideDrawer Open";
	}
	return (
		<div className={drawerClasses}>
			<h1>Whatever's in here will depend on the claw machine result</h1>
			<h1>Users can also click the nav bar to access a page</h1>
		</div>
	);
};

export default SlideDrawer;
