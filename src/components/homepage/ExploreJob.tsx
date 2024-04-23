import { Button, Title } from "@mantine/core";
import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const ExploreJob = () => {
	const initialButtonsToShow = 8; // Number of buttons to initially show
	const [showAllButtons, setShowAllButtons] = useState(false);

	const toggleShowAllButtons = () => {
		setShowAllButtons(!showAllButtons);
	};



	return (
		<div>
			<Title order={5} className="p-3">
				Job categories
			</Title>
			<div className="flex flex-wrap gap-2">
				{buttons
					.slice(
						0,
						showAllButtons ? buttons.length : initialButtonsToShow
					)
					.map((button, index) => (
						<Button
							key={index}
							variant="filled"
							color="#D9D9D9"
							radius="xl"
							className="text-black"
						>
							{button}
						</Button>
					))}
			</div>
			{!showAllButtons && (
				<Button
					variant="transparent"
					// color="#D9D9D9"
					radius="xl"
					className="text-gray-500 my-2"
					onClick={toggleShowAllButtons}
				>
					View more topics{" "}
					<RiArrowDropDownLine className="text-2xl" />
				</Button>
			)}
			{showAllButtons && (
				<Button
					variant="transparent"
					// color="#D9D9D9"
					radius="xl"
					className="text-gray-500 my-2"
					onClick={toggleShowAllButtons}
				>
					View less topics <RiArrowDropUpLine className="text-2xl" />
				</Button>
			)}
		</div>
	);
};

export default ExploreJob;

	const buttons = [
		"Programming",
		"Technology",
		"Writing",
		"Self Improvement",
		"RelationShips",
		"Politics",
		"Machine Learning",
		"Data Science",
		"Cybersecurity",
		"Artificial Intelligence",
		"Productivity",
		"Communication Skills",
		"Economics",
		"Philosophy",
		"Health and Wellness",
	];