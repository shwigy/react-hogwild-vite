import React from "react";

const Controls = ({ filterGreased, onFilterChange, sortBy, onSortChange }) => {
	return (
		<div className="filterWrapper ui form">
			<div className="inline field">
				<label htmlFor="greasedFilter">Greased Pigs Only?</label>
				<input
					type="checkbox"
					id="greasedFilter"
					checked={filterGreased}
					onChange={(e) => onFilterChange(e.target.checked)}
				/>
			</div>
			<div className="inline field">
				<label htmlFor="sortBySelect">Sort by:</label>
				<select
					id="sortBySelect"
					value={sortBy}
					onChange={(e) => onSortChange(e.target.value)}
				>
					<option value="">--</option>
					<option value="name">Name</option>
					<option value="weight">Weight</option>
				</select>
			</div>
		</div>
	);
};

export default Controls;
