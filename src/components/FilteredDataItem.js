import React from "react";

function FilteredDataItem({ data }) {
	let date = data.createdAt.split("-");
	return (
		<div className="resultItem">
			<h1>{data.title}</h1>
			<span>
				{data.name} - {date[0]}
			</span>
			<hr style={{ height: "1px", backgroundColor: "#585858" }} />
		</div>
	);
}

export default FilteredDataItem;
