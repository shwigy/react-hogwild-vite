import React, { useState } from "react";

const AddHogForm = ({ onAddHog }) => {
	const [name, setName] = useState("");
	const [weight, setWeight] = useState("");
	const [specialty, setSpecialty] = useState("");
	const [greased, setGreased] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !weight || !specialty) return;

		onAddHog({
			id: Date.now(),
			name,
			weight: Number(weight),
			specialty,
			greased,
			"highest medal achieved": "none",
			image: "",
			hidden: false,
		});

		setName("");
		setWeight("");
		setSpecialty("");
		setGreased(false);
	};

	return (
		<form className="ui form" onSubmit={handleSubmit}>
			<div className="field">
				<label htmlFor="hogName">Name:</label>
				<input
					id="hogName"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="field">
				<label htmlFor="hogWeight">Weight:</label>
				<input
					id="hogWeight"
					type="number"
					value={weight}
					onChange={(e) => setWeight(e.target.value)}
				/>
			</div>
			<div className="field">
				<label htmlFor="hogSpecialty">Specialty:</label>
				<input
					id="hogSpecialty"
					type="text"
					value={specialty}
					onChange={(e) => setSpecialty(e.target.value)}
				/>
			</div>
			<div className="inline field">
				<label htmlFor="hogGreased">Greased?</label>
				<input
					id="hogGreased"
					type="checkbox"
					checked={greased}
					onChange={(e) => setGreased(e.target.checked)}
				/>
			</div>
			<button className="ui button" type="submit">
				Add Hog
			</button>
		</form>
	);
};

export default AddHogForm;
