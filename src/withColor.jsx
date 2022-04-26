import React, { useState } from "react";

const Withcolor = (WrappedComponent) => {
	const rainbow = [
		"red",
		"orange",
		"yellow",
		"green",
		"blue",
		"indigo",
		"violet",
	];
	const randomColor = rainbow[Math.floor(Math.random() * rainbow.length)];
	return function Withcolor() {
		return (
			<div style={{ color: randomColor }}>
				<WrappedComponent />
			</div>
		);
	};
};

export default Withcolor;
