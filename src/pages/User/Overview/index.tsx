import { Avatar, Button, Title } from "@mantine/core";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineAudio } from "react-icons/ai";
import Navbar from "@/components/navigation/Navbar";
import { RxCross1 } from "react-icons/rx";
import Footer from "@/components/navigation/footer";

const Overview = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <Navbar />
      <div className="flex items-center justify-between pb-12 mt-20">
        <div className="flex items-center">
          <Avatar src="/male-avatar.jpg" alt="no image here" h={60} w={60} />
          <div>
            <Title order={3}>Md Siyam Mahdi</Title>
            <p className="my-0 text-xs text-gray-500">siyam999@gmail.com</p>
          </div>
        </div>
        <div>
          <p className="my-0 text-xs text-gray-500">Applied at 10 mar 2024 </p>
        </div>
      </div>
      <div className="flex gap-10 ">
        <div className="w-1/2">
          <div className="bg-white border border-solid border-gray-200 shadow-lg rounded-2xl">
            <div className="p-10 bg-gray-200 rounded-full w-1/4 m-auto my-20">
              <AiOutlineAudio className="text-5xl relative left-1 top-1 " />
            </div>
          </div>
        </div>
        <div className="border border-1 border-solid border-gray-400 rounded-2xl w-1/2">
          <p className="mx-5 text-sm text-gray-500 font-semibold">
            Answer 1 of 4
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Overview;
