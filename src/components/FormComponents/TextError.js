import React from "react";

export default function TextError(props) {
	return (
		<div style={{ color: "red", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
			{props.children}
		</div>
	);
}
