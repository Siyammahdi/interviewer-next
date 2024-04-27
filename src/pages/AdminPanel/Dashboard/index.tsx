import { Table, Title } from "@mantine/core";
import { IoLocationSharp } from "react-icons/io5";
import { ImFilter } from "react-icons/im";
import Navbar from "@/components/navigation/Navbar";
interface Element {
	companyName: string,
	jobTitle: string,
	companyLocation: string,
	applicationDate: string,
	status: "Approved" | "Rejected",
	score: number;
}
const InterviewList = () => {
  
	const rows = elements.map((element, index) => (
		<Table.Tr key={index}>
			<Table.Td>
				<p className="font-bold text-gray-600 my-1">{element.jobTitle}</p>
				<p className="text-xs my-1">{element.companyName}</p>
			</Table.Td>
			<Table.Td>{element.applicationDate}</Table.Td>
			<Table.Td>
				<span
					className={`px-3 py-1 rounded-md font-semibold ${
						element.status === "Approved"
							? "bg-green-100 text-green-500"
							: "bg-red-100 text-red-500"
					}`}
				>
					{element.status}
				</span>
			</Table.Td>
			<Table.Td>{element.score}</Table.Td>
		</Table.Tr>
	));

	return (
		<section className="max-w-6xl mx-auto">
			<Navbar />
			<div className="my-28">
				<Title order={2}>
					UIUX Designer{" "}
					<span className="font-normal text-sm bg-gray-200 px-3 py-1 rounded-full">
						Live
					</span>{" "}
				</Title>
				<p className="my-1">Invato Agency</p>
				<p className="flex items-center gap-1 my-1 text-gray-600">
					<IoLocationSharp />
					Bangladesh
				</p>

				<div className="border border-solid border-1 border-gray-300 rounded-2xl text-gray-600 flex px-6 my-6">
					<div className="w-2/5">
						<p>
							{" "}
							<ImFilter /> Filter By
						</p>
					</div>
					<div className="w-3/5 flex justify-between">
						<p>
							INVITED{" "}
							<span className="font-normal text-sm bg-gray-200 px-3 mx-2 rounded-full">
								0
							</span>{" "}
						</p>
						<p>
							TO REVIEW{" "}
							<span className="font-normal text-sm bg-gray-200 px-3 mx-2 rounded-full">
								1
							</span>{" "}
						</p>
						<p>
							ACCEPTED{" "}
							<span className="font-normal text-sm bg-gray-200 px-3 mx-2 rounded-full">
								0
							</span>{" "}
						</p>
						<p>
							REJECTED{" "}
							<span className="font-normal text-sm bg-gray-200 px-3 mx-2 rounded-full">
								0
							</span>{" "}
						</p>
					</div>
				</div>

				<div className="border border-solid border-1 border-gray-300 rounded-2xl">
					<Table>
						<Table.Thead>
							<Table.Tr>
								<Table.Th>Company</Table.Th>
								<Table.Th>Application Date</Table.Th>
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
		companyName: "Tech Innovations Inc.",
		jobTitle: "Senior Software Engineer",
		companyLocation: "San Francisco, CA",
		applicationDate: "2024-03-10",
		status: "Approved",
		score: 87,
	},
	{
		companyName: "Marketing Pro",
		jobTitle: "Marketing Coordinator",
		companyLocation: "New York, NY",
		applicationDate: "2024-03-12",
		status: "Approved",
		score: 76,
	},
	{
		companyName: "Data Analytics Corp.",
		jobTitle: "Data Analyst",
		companyLocation: "Chicago, IL",
		applicationDate: "2024-03-15",
		status: "Approved",
		score: 82,
	},
	{
		companyName: "Design Studio",
		jobTitle: "Graphic Designer",
		companyLocation: "Los Angeles, CA",
		applicationDate: "2024-03-08",
		status: "Rejected",
		score: 65,
	},
	{
		companyName: "Sales Solutions Ltd.",
		jobTitle: "Sales Manager",
		companyLocation: "Boston, MA",
		applicationDate: "2024-03-14",
		status: "Approved",
		score: 91,
	},
	{
		companyName: "Customer Care Co.",
		jobTitle: "Customer Service Representative",
		companyLocation: "Seattle, WA",
		applicationDate: "2024-03-11",
		status: "Rejected",
		score: 80,
	},
];
