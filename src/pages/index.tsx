import Hero from "../components/homepage/Hero";
import ExploreSection from "../components/homepage/ExploreSection";
import Interviewers from "../components/homepage/Interviewers";
import ExploreJob from "@/components/homepage/ExploreJob";
import TeamBlogs from "@/components/homepage/TeamBlogs";
import DemandingSkills from "@/components/homepage/DemandingSkills";
import AnswerText from "@/components/homepage/AnswerText";
import Layout from "@/components/layout/layout";
import Section from "@/components/section";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <Layout>
        <Hero />
        <ExploreSection />
        <div className="bg-bgPrimary py-10">
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
        </div>
        {/* <AnswerText /> */}
      </Layout>
    </div>
  );
}
