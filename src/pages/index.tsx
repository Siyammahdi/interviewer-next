import Hero from "../components/homepage/Hero";
import ExploreSection from "../components/homepage/ExploreSection";
import Interviewers from "../components/homepage/Interviewers";
import ExploreJob from "@/components/homepage/ExploreJob";
import TeamBlogs from "@/components/homepage/TeamBlogs";
import DemandingSkills from "@/components/homepage/DemandingSkills";
import AnswerVoice from "@/components/homepage/AnswerVoice";
import AnswerText from "@/components/homepage/AnswerText";
import ShortlistedCard from "@/components/homepage/ShortlistedCard";
import Dashboard from "@/components/homepage/Dashboard";
import AnswerFile from "@/components/homepage/AnswerFile";
import Layout from "@/components/layout/layout";
import Section from "@/components/section";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<ExploreSection />
			<Section Bgcolor="#f9fafb">
				<div className="flex gap-5 max-w-7xl mx-auto ">
					<div className="w-3/4">
						<Interviewers></Interviewers>
					</div>
					<div className="w-1/4">
						<ExploreJob />
						<DemandingSkills />
						<TeamBlogs />
					</div>
				</div>
			</Section>
			<AnswerVoice />
			{/* <AnswerText /> */}
			<AnswerFile />
			<ShortlistedCard />
			<Dashboard />
		</Layout>
	);
}
