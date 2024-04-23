import React from "react";
import { Title } from "@mantine/core";
import { Button } from "@mantine/core";
import Section from "../section";
import Image from "next/image";

const Hero = () => {
	return (
		<Section Bgcolor={"#fff"}>
			<div className="flex items-center mb-20">
				<div className="w-1/2 space-y-20">
					<Title
						order={1}
						size="h1"
						className="w-2/3 font-medium text-[40px]"
					>
						Best Interviewing Platform ever!
					</Title>
					<Button
						variant="filled"
						size="lg"
						color="rgba(38, 38, 38, 1)"
						radius="xl"
					>
						Get Started
					</Button>
				</div>
				<div className="">
					<Image
						width={500}
						height={350}
            src="/svg/bannerGroup.svg"
            alt="banner"
						style={{ objectFit: "contain" }}
					/>
				</div>
			</div>
		</Section>
	);
};

export default Hero;
