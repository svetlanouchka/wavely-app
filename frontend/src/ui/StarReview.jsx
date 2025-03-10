import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarReview({ maxStars = 5, value, onChange }) {
	const [rating, setRating] = useState(value || 0);
	const [hover, setHover] = useState(0);

	const handleStarClick = (index) => {
		const newRating = index + 1;
		console.log("Nouvelle note :", newRating);
		setRating(newRating);
		if (onChange) onChange(newRating);
	};

	return (
		<div className="flex space-x-2">
			{[...Array(maxStars)].map((_, index) => {
				return (
					<FaStar
						key={index}
						size={20}
						className={`cursor-pointer transition-colors duration-200 ${
							index < (hover || rating) ? "text-yellow-400" : "text-gray-300"
						}`}
						onClick={() => handleStarClick(index)}
						onMouseEnter={() => setHover(index + 1)}
						onMouseLeave={() => setHover(0)}
					/>
				);
			})}
		</div>
	);
}
