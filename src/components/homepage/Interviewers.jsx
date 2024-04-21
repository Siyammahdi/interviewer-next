import React from "react";
import InterviewCard from "@/components/homepage/interviewCard";




const Interviewers = () => {
	return (
		<section className="">
			<div className="">
				<div className="space-y-5">
					{data.map((item) => (
						<InterviewCard item={item} />
					))}
				</div>
				<div>
					
				</div>
			</div>
			
		</section>
	);
};

export default Interviewers;

const data = [
	{
		avatar:
			"https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
		name: "John Doe",
		date: "2024-03-14",
		title: "Software Engineer",
		company_name: "Tech Solutions Inc.",
		educational_req: "Bachelor's degree in Computer Science",
		experience_in_year: 3,
		deadline: "2024-04-01",
		total_applied: 50,
		job_location: "San Francisco, CA",
		video_link: "https://example.com/video1",
	},
	{
		avatar:
			"https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
		name: "Jane Smith",
		date: "2024-03-15",
		title: "Marketing Manager",
		company_name: "Global Marketing Group",
		educational_req: "Bachelor's degree in Marketing",
		experience_in_year: 5,
		deadline: "2024-04-05",
		total_applied: 30,
		job_location: "New York, NY",
		video_link: "https://example.com/video2",
	},
	{
		avatar:
			"https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
		name: "Alex Johnson",
		date: "2024-03-16",
		title: "Data Scientist",
		company_name: "Data Insights Co.",
		educational_req: "Master's degree in Data Science or related field",
		experience_in_year: 4,
		deadline: "2024-04-10",
		total_applied: 20,
		job_location: "Seattle, WA",
		video_link: "https://example.com/video3",
	},
	{
		avatar:
			"https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
		name: "Emily Brown",
		date: "2024-03-17",
		title: "Graphic Designer",
		company_name: "Creative Designs Ltd.",
		educational_req: "Bachelor's degree in Graphic Design or related field",
		experience_in_year: 2,
		deadline: "2024-04-15",
		total_applied: 40,
		job_location: "Los Angeles, CA",
		video_link: "https://example.com/video4",
	},
	{
		avatar:
			"https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
		name: "Michael Garcia",
		date: "2024-03-18",
		title: "Financial Analyst",
		company_name: "Finance Experts Inc.",
		educational_req: "Bachelor's degree in Finance or related field",
		experience_in_year: 3,
		deadline: "2024-04-20",
		total_applied: 25,
		job_location: "Chicago, IL",
		video_link: "https://example.com/video5",
	},
	{
		avatar:
			"https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
		name: "Sophia Martinez",
		date: "2024-03-19",
		title: "Human Resources Manager",
		company_name: "HR Solutions Co.",
		educational_req: "Bachelor's degree in Human Resources or related field",
		experience_in_year: 6,
		deadline: "2024-04-25",
		total_applied: 35,
		job_location: "Houston, TX",
		video_link: "https://example.com/video6",
	},
	{
		avatar:
			"https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
		name: "William Wilson",
		date: "2024-03-20",
		title: "Product Manager",
		company_name: "Product Innovations Inc.",
		educational_req:
			"Bachelor's degree in Business Administration or related field",
		experience_in_year: 5,
		deadline: "2024-04-30",
		total_applied: 15,
		job_location: "Boston, MA",
		video_link: "https://example.com/video7",
	},
];
