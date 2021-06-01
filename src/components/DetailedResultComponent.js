import React, { useEffect, useState } from "react";
import { Col, Dropdown, Image, Row } from "react-bootstrap";
import FilteredDataItem from "./FilteredDataItem";
import PaginatationComponent from "./PaginatationComponent";
import SearchComponent from "./SearchComponent";
import logo from "./tesodevLogo.svg";
import { BiSort } from "react-icons/bi";

function DetailedResultComponent({
	filteredData,
	setFilteredData,
	searchContent,
}) {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;
	const indexOfLastPost = currentPage * itemsPerPage;
	const indexOfFirstPost = indexOfLastPost - itemsPerPage;
	const [currentPosts, setCurrentPosts] = useState(
		filteredData.slice(indexOfFirstPost, indexOfLastPost)
	);
	useEffect(() => {
		setCurrentPosts(filteredData.slice(indexOfFirstPost, indexOfLastPost));
		// eslint-disable-next-line
	}, [filteredData, currentPage]);
	const orderByHandler = (specifier, desc = false) => {
		if (specifier === "name") {
			setFilteredData((prev) =>
				prev.sort((a, b) => {
					return a.name <= b.name ? -1 : 1;
				})
			);
		}

		if (specifier === "year") {
			filteredData.sort((a, b) => {
				let aDate = a.createdAt.split("-");
				let bDate = b.createdAt.split("-");
				return aDate[0] <= bDate[0] ? -1 : 1;
			});
		}
		if (desc) setFilteredData((prev) => prev.reverse());
		setCurrentPosts(filteredData.slice(indexOfFirstPost, indexOfLastPost));
	};
	return (
		<div className="detailPageContainer">
			<Row
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Col
					md={2}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Image src={logo} style={{ width: "149px", height: "63px" }} alt="" />
				</Col>

				<Col md={10}>
					<SearchComponent
						searchContent={searchContent}
						setFilteredData={setFilteredData}
					/>
				</Col>
			</Row>
			<Row>
				<Col md={2}></Col>
				<Col md={8}>
					<Row>
						<Col
							md={10}
							className="justify-content-end"
							style={{
								display: "flex",
								justifyContent: "end",
								marginTop: "1rem",
							}}
						>
							<Dropdown>
								<Dropdown.Toggle
									variant="white"
									id="dropdown-basic"
									bsPrefix="p-0"
								>
									<span
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<BiSort />
										OrderBy
									</span>
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item onClick={() => orderByHandler("name", false)}>
										Name ascending
									</Dropdown.Item>
									<Dropdown.Item onClick={() => orderByHandler("name", true)}>
										Name descending
									</Dropdown.Item>
									<Dropdown.Item onClick={() => orderByHandler("year", false)}>
										Year ascending
									</Dropdown.Item>
									<Dropdown.Item onClick={() => orderByHandler("year", true)}>
										Year descending
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Col>
						<Col md={10}>
							{filteredData !== null && filteredData.length >= 1 ? (
								<div className="searchResultContainer">
									{currentPosts &&
										currentPosts.map((data, idx) => (
											<FilteredDataItem key={data.id} data={data} />
										))}
								</div>
							) : (
								<div className="noResultScreen">
									<h1>No result is found</h1>
								</div>
							)}
						</Col>
						<Col
							md={10}
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<PaginatationComponent
								itemsPerPage={itemsPerPage}
								totalFoundings={filteredData.length}
								setCurrentPage={setCurrentPage}
								currentPage={currentPage}
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
}

export default DetailedResultComponent;
