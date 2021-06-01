import React, { useState } from "react";
import "./App.scss";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import HomePageComponent from "./components/Home/HomePageComponent";
import DetailedResultComponent from "./components/DetailedResultComponent";

const colors = {
	searchButton: {
		500: "#204080",
	},
};

const theme = extendTheme({ colors });
function App() {
	const [filteredData, setFilteredData] = useState(null);
	const [pageMode, setPageMode] = useState(true);
	return (
		<ChakraProvider theme={theme}>
			<div className="App">
				{pageMode ? (
					<HomePageComponent
						filteredData={filteredData}
						setFilteredData={setFilteredData}
						setPageMode={setPageMode}
					/>
				) : (
					<DetailedResultComponent
						filteredData={filteredData}
						setFilteredData={setFilteredData}
					/>
				)}
			</div>
		</ChakraProvider>
	);
}

export default App;
