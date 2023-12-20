import React from "react";
import NavBar from "./navBar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./components";
import Cards from "./cards";
import Clock from "./clock";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar />
			<Clock />
			<Cards />
		</div>
	);
};

export default Home;
