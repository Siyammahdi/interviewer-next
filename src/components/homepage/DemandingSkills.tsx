import { Button, Title } from "@mantine/core";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface Data {
	text: string;
	name: string;
	reads: number;
}
const DemandingSkills = () => {
	return (
		<div className="border border-solid border-gray-300 rounded-xl p-5 my-10">
			<div className="flex justify-between items-center">
				<Title order={5} className="text-[#10B5D7]">
					Demanding Skills
				</Title>
				<Button
					variant="filled"
					color="#D9D9D9"
					radius="xl"
					className="text-black"
				>
					1 Week <RiArrowDropDownLine className="text-2xl" />
				</Button>
			</div>
			<div>
				{data.map((item, index) => (
					<div key={index}>
						<div className="my-4">
							<p className="font-semibold my-1">{item.text}</p>
							<p className="flex text-xs font-normal gap-1 text-[#4B5157]">
								<span className="my-0">{item.name}</span>
								<span className="my-0">{item.reads} reads</span>
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center">
				<Button
					variant="filled"
					color="#10B5D7"
					size="xs"
					radius="xl"
					className="px-5"
				>
					See More <RiArrowDropDownLine className="text-2xl" />
				</Button>
			</div>
		</div>
	);
};

export default DemandingSkills;

const data: Data[] = [
	{
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.....",
		name: "Alice",
		reads: 123,
	},
	{
		text: "Sed vestibulum ante eu lectus volutpat ultrices......",
		name: "Bob",
		reads: 456,
	},
	{
		text: "Integer vitae nulla nec tortor suscipit consequat......",
		name: "Charlie",
		reads: 789,
	},
];
