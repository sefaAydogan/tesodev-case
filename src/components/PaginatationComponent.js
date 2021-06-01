import React from "react";
import { Pagination } from "react-bootstrap";

function PaginatationComponent({
	setCurrentPage,
	postsPerPage,
	totalPosts,
	currentPage,
}) {
	const pageNumbers = [];
	for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
		pageNumbers.push(index);
	}
	return (
		<Pagination style={{ marginTop: "1rem" }}>
			<Pagination.First
				className="pageItem"
				onClick={() => setCurrentPage(1)}
			/>
			<Pagination.Prev
				style={{ marginLeft: "1rem" }}
				onClick={() => setCurrentPage((prev) => (prev === 1 ? prev : prev - 1))}
			/>
			{pageNumbers.map((page) => (
				<Pagination.Item
					key={page}
					active={currentPage === page}
					style={{
						marginLeft: "1rem",
					}}
					onClick={() => setCurrentPage(page)}
				>
					{page}
				</Pagination.Item>
			))}
			<Pagination.Next
				style={{ marginLeft: "1rem" }}
				onClick={() =>
					setCurrentPage((prev) =>
						prev === pageNumbers.length ? prev : prev + 1
					)
				}
			/>
			<Pagination.Last
				onClick={() => setCurrentPage(pageNumbers.length)}
				style={{ marginLeft: "1rem" }}
			/>
		</Pagination>
	);
}

export default PaginatationComponent;
