import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@mantine/core";
import Hero from "../components/homepage/Hero";
import Navbar from "@/components/navigation/Navbar"
import ExploreSection from "../components/homepage/feature-section";
import Interviewers from "../components/homepage/Interviewers";
import Section from "@/components/section";

import Layout from "@/components/layout/layout"

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
      <Interviewers></Interviewers>
    </Layout>
  );
}

//className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
