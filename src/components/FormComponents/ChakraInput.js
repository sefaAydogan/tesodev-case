import React from "react";
import { Field } from "formik";
import { Input, FormControl, FormErrorMessage } from "@chakra-ui/react";

function ChakraInput(props) {
	const { name, ...rest } = props;
	return (
		<Field name={name}>
			{({ field, form }) => {
				return (
					<FormControl isInvalid={form.errors[name] && form.touched[name]}>
						<Input id={name} {...rest} {...field} />
						<FormErrorMessage>{form.errors[name]}</FormErrorMessage>
					</FormControl>
				);
			}}
		</Field>
	);
}

export default ChakraInput;