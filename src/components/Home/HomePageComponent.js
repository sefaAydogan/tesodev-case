import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import FilteredDataItem from "../FilteredDataItem";
import SearchComponent from "../SearchComponent";
import logo from "../tesodevLogo.svg";

function HomePageComponent({ filteredData, setFilteredData, setPageMode }) {
	return (
		<Container>
			<div className="HomePageContainer">
				<Row>
					<Col
						md={12}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginBottom: "2rem",
						}}
					>
						<Image
							src={logo}
							style={{ width: "278px", height: "115px" }}
							alt=""
						/>
					</Col>
					<Col md={12}>
						<SearchComponent setFilteredData={setFilteredData} />
					</Col>
				</Row>
				<Row>
					<Col md={10}>
						{filteredData !== null && (
							<div className="searchResultContainer">
								{filteredData.map((data, idx) =>
									idx < 3 ? (
										<FilteredDataItem key={data.id} data={data} />
									) : null
								)}
								<div className="showMoreButton">
									<button type="button" onClick={() => setPageMode(false)}>
										Show more...
									</button>
								</div>
							</div>
						)}
					</Col>
				</Row>
			</div>
		</Container>
	);
}

export default HomePageComponent;
