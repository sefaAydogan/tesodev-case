import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormComponents/FormikControl";
import { Button } from "@chakra-ui/react";
import { Col, Row } from "react-bootstrap";
import generated from "../generated.json";
function SearchComponent({ setFilteredData }) {
	const [db, setDb] = useState(generated);

	useEffect(() => {
		setDb(generated);
	}, []);
	const onSubmit = async (values) => {
		setFilteredData(
			db.filter(
				(item) =>
					item.name.includes(values.searchText) ||
					item.title.includes(values.searchText)
			)
		);
	};

	const initialValues = {
		searchText: "",
	};
	const validationSchema = Yup.object({
		searchText: Yup.string().required("Required"),
	});
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formik) => {
				return (
					<Form>
						<Row
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Col md={10}>
								<FormikControl
									control="chakrainput"
									type="text"
									placeholder="Search Anything"
									name="searchText"
								/>
							</Col>
							<Col md={2}>
								<Button
									colorScheme="searchButton"
									color="white"
									type="submit"
									disabled={!formik.isValid}
								>
									Search
								</Button>
							</Col>
						</Row>
					</Form>
				);
			}}
		</Formik>
	);
}

export default SearchComponent;
