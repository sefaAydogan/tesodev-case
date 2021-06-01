import React from "react";
import ChakraInput from "./ChakraInput";

export default function FormikControl(props) {
	const { control, ...rest } = props;
	switch (control) {
		case "chakrainput":
			return <ChakraInput {...rest} />;
		default:
			return null;
	}
}
