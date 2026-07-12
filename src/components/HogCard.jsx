import React, { useState } from "react";

const HogCard = ({ hog, onHide }) => {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<div className="ui eight wide column">
			<div aria-label="hog card" className="ui card">
				<div className="image">
					<img src={hog.image} alt={`Photo of ${hog.name}`} />
				</div>
				<div className="content">
					<h3
						className="header"
						onClick={() => setShowDetails(!showDetails)}
						style={{ cursor: "pointer" }}
					>
						{hog.name}
					</h3>
					{showDetails && (
						<div className="description">
							<p>Specialty: {hog.specialty}</p>
							<p>{hog.weight}</p>
							<p>{hog.greased ? "Greased" : "Nongreased"}</p>
							<p>{hog["highest medal achieved"]}</p>
						</div>
					)}
				</div>
				<div className="extra content">
					<button className="ui button" onClick={() => onHide(hog.id)}>
						Hide Me
					</button>
				</div>
			</div>
		</div>
	);
};

export default HogCard;
