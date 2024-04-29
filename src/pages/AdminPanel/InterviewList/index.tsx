import Navbar from "@/components/navigation/Navbar";
import { Table, Title } from "@mantine/core";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { RiArrowDropDownLine, RiDropdownList } from "react-icons/ri";
interface Element {
	companyName: string,
	jobTitle: string,
	companyLocation: string,
	applicationDate: string,
	status: "Draft" | "Live",
	score: number;
}
const InterviewList = () => {
  
	const rows = elements.map((element, index) => (
		<Table.Tr key={index}>
			<Table.Td>
				<Link href={"/AdminPanel/Table"} className="no-underline">
				<p className="font-bold text-gray-600 my-1">{element.jobTitle}</p>
				<p className="text-xs my-1">{element.companyName}</p>
				</Link>
			</Table.Td>
			<Table.Td>{element.applicationDate}</Table.Td>
			<Table.Td>
				<span
					className={`px-3 py-1 rounded-full ${
						element.status === "Draft"
							? "bg-gray-100 text-gray-500"
							: "bg-green-100 text-green-500"
					}`}
				>
					{element.status}
				</span>
			</Table.Td>
			<Table.Td>{element.score}</Table.Td>
		</Table.Tr>
	));

	return (
		<section className="mx-28">
			<Navbar />
			<div className="my-32">
					<div className="gap-5  flex justify-between">
						<p className="border border-solid border-1 px-5 py-2 rounded-xl border-gray-300">
							Search by Title{" "}
							<span>
							<RiArrowDropDownLine />
							</span>{" "}
						</p>
						<p className="border border-solid border-1 px-5 py-2 rounded-xl border-gray-300">
							Filter by Company{" "}
							<span>
							<RiArrowDropDownLine />
							</span>{" "}
						</p>
						<p className="border border-solid border-1 px-5 py-2 rounded-xl border-gray-300">
							Filter by Owner{" "}
							<span >
							<RiArrowDropDownLine />
							</span>{" "}
						</p>
						<p className="border border-solid border-1 px-5 py-2 rounded-xl border-gray-300">
							Filter by Status{" "}
							<span className="">
							<RiArrowDropDownLine />
							</span>{" "}
						</p>
						<p className="border border-solid border-1 bg-cyan-500 text-white px-5 py-2 rounded-xl border-gray-300">
							+ Create{" "}
						</p>

					</div>
					<div className="justify-end flex gap-5">
						<p>0 Filters Selected</p>
						<p>Clear all</p>
					</div>


				<div className="border border-solid border-1 border-gray-300 rounded-2xl">
					<Table>
						<Table.Thead className="bg-gray-200">
							<Table.Tr >
								<Table.Th>Interview</Table.Th>
								<Table.Th>End Date</Table.Th>
								<Table.Th>Status</Table.Th>
								<Table.Th>Score</Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>{rows}</Table.Tbody>
					</Table>
				</div>
			</div>
		</section>
	);
};


export default InterviewList;

const elements : Element[] = [
	{
		companyName: "Inveto Agency",
		jobTitle: "UIUX Designer",
		companyLocation: "San Francisco, CA",
		applicationDate: "2024-03-10",
		status: "Draft",
		score: 87,
	},
	{
		companyName: "Inveto Agency",
		jobTitle: "Graphics Designer",
		companyLocation: "New York, NY",
		applicationDate: "2024-03-12",
		status: "Live",
		score: 76,
	},
];
