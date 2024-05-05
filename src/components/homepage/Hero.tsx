import React from "react";
import { Title, Image } from "@mantine/core";
import { Button } from "@mantine/core";
import Section from "@/components/section";

const Hero = () => {
	return (
		<Section className="">
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
				<div className="w-1/2 grid grid-cols-2 gap-8 h-fit ">
					<Image
						h={350}
						w={500}
						radius="lg"
						src="/svg/bannerGroup.svg"
						style={{ objectFit: "contain", marginTop: "50px" }}
					/>
				</div>
			</div>
		</Section>
	);
};

export default Hero;
