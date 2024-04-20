import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@mantine/core";
import Hero from "../components/homepage/Hero";
import Navbar from "@/components/navigation/Navbar";
import ExploreSection from "../components/homepage/feature-section";
import Interviewers from "../components/homepage/Interviewers";
import ExploreJob from "@/components/homepage/ExploreJob";
import Section from "@/components/section";
import Footer from "@/components/navigation/Footer";
import TeamBlogs from "@/components/homepage/TeamBlogs";
import DemandingSkills from "@/components/homepage/DemandingSkills";

import Layout from "@/components/layout/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<Layout>
			{/* <h1 className="text-4xl font-medium leading-none tracking-tight text-center">
        Welcome to interviewer. Lets begin a Journey 🚀
      </h1>
      <p>a component example from mantine</p>
      <div>
        <Button variant="filled">
          Settings
        </Button>
      </div> */}
			{/* <Navbar></Navbar> */}
			<Hero />
			<ExploreSection />
			<div className="bg-[#F9FAFB]">
				<div className="flex gap-5 max-w-7xl mx-auto ">
					<div className="w-8/12">
						<Interviewers></Interviewers>
					</div>
					<div className="w-4/12">
						<ExploreJob />
						<DemandingSkills />
						<TeamBlogs />
					</div>
				</div>
			</div>
		</Layout>
	);
}

//className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
