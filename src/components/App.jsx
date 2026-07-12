import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import Controls from "./Controls";
import AddHogForm from "./AddHogForm";

import hogs from "../porkers_data";

function App() {
	const [hogList, setHogList] = useState(
		hogs.map((hog, index) => ({ ...hog, id: index, hidden: false }))
	);
	const [filterGreased, setFilterGreased] = useState(false);
	const [sortBy, setSortBy] = useState("");

	const handleHide = (id) => {
		setHogList((prev) =>
			prev.map((hog) => (hog.id === id ? { ...hog, hidden: true } : hog))
		);
	};

	const handleAddHog = (newHog) => {
		setHogList((prev) => [...prev, newHog]);
	};

	let displayedHogs = hogList.filter((hog) => !hog.hidden);

	if (filterGreased) {
		displayedHogs = displayedHogs.filter((hog) => hog.greased);
	}

	if (sortBy === "name") {
		displayedHogs = [...displayedHogs].sort((a, b) =>
			a.name.localeCompare(b.name)
		);
	} else if (sortBy === "weight") {
		displayedHogs = [...displayedHogs].sort((a, b) => a.weight - b.weight);
	}

	return (
		<div className="App">
			<Nav />
			<Controls
				filterGreased={filterGreased}
				onFilterChange={setFilterGreased}
				sortBy={sortBy}
				onSortChange={setSortBy}
			/>
			<HogList hogs={displayedHogs} onHide={handleHide} />
			<AddHogForm onAddHog={handleAddHog} />
		</div>
	);
}

export default App;
