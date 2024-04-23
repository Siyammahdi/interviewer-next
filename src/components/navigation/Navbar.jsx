import React from "react";
import { Button, TextInput } from "@mantine/core";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Section from "../section";

const Navbar = () => {
	return (
		<Section Bgcolor={"#fff"}>
			<nav className="flex items-center justify-between my-6">
				<Image src={logo} alt="logo"></Image>
				{/* <Image radius="md" h={25} src="/logo.png" /> */}
				<div className="relative" style={{ width: "45%", cursor: "pointer" }}>
					<TextInput size="md" radius="xl" placeholder="Search your job..." />
					<IoSearch className="absolute border top-1/3 right-5 text-xl text-gray-500" />
				</div>
				<div className="space-x-4">
					<Button
						variant="filled"
						color="#10B5D7"
						size="sm"
						radius="xl"
						className="text-white"
					>
						Get Started
					</Button>
					<Button
						variant="outline"
						color="rgba(66, 66, 66, 1)"
						size="sm"
						radius="xl"
						className="px-10"
					>
						Log in
					</Button>
				</div>
			</nav>
		</Section>
	);
};

export default Navbar;
