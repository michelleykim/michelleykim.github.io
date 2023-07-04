import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<Home />}></Route>
				<Route path="/project" element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
