import { Avatar, Title } from "@mantine/core";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineAudio } from "react-icons/ai";

const ShortlistedCard = () => {
	return (
		<section>
			<div className="text-center mt-24">
				<Title order={2}>Congratulations!</Title>
				<p className=" text-sm text-gray-500 my-2">
					Your application is short listed
				</p>
			</div>
			<div className="flex items-center justify-between pb-12">
				<div className="flex items-center">
					<Avatar src="/male-avatar.jpg" alt="no image here" h={60} w={60} />
					<div>
						<Title order={3}>Md Siyam Mahdi</Title>
						<p className="my-0 text-xs text-gray-500">siyam999@gmail.com</p>
					</div>
				</div>
				<div>
					<p className="bg-[#59CC4C] rounded-full text-white my-0 px-2 flex items-center gap-2">
						<FaCheck />
						Shortlisted
					</p>
					<p className="my-0 text-xs text-gray-500">Applied at 10 mar 2024 </p>
				</div>
			</div>
			<div className="flex gap-10 mb-44">
				<div className="bg-white border border-solid border-gray-200 shadow-lg rounded-2xl w-1/2 ">
					<div className="p-10 bg-gray-200 rounded-full w-1/4 m-auto my-20">
						<AiOutlineAudio className="text-5xl relative left-1 top-1 " />
					</div>
				</div>
				<div className="border border-1 border-solid border-gray-400 rounded-2xl w-1/2">
					<p className="mx-5 text-sm text-gray-500 font-semibold">
						Answer 1 of 4
					</p>
				</div>
			</div>
		</section>
	);
};

export default ShortlistedCard;
