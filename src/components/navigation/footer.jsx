import React from 'react';
import Section from "@/components/section";

const Footer = () => {
    return (
		<Section>
		<footer className="flex justify-between items-center py-5 text-[#C4C1C1]">
			<p>©Interviewer 2024</p>
			<div className="flex gap-2">
				<a>Privacy</a>.<a>Terms</a>
			</div>
		</footer>
		</Section>
	);
};

export default Footer;