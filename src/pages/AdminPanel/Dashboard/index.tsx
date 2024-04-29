import { Avatar, Title } from "@mantine/core";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { FaRegEdit } from "react-icons/fa";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto my-20">
      <div className="flex gap-16">
        <div className="w-2/3">
          <div className="shadow-md p-4 bg-gray-100 rounded-xl mb-5">
            <div className="">
              <Title className="text-blue-400" order={5}>
                <HiMiniBuildingOffice2 className="text-gray-500" /> Inveto
                Agency
              </Title>
              <p className="text-sm my-0">
                Your Free trial of Growth plan ends in 13 days
              </p>
              <hr />
              <p className="text-sm">Period: 09 Mar - 09 Apr</p>
            </div>
            <div className="flex justify-evenly text-center pb-4">
              <div className="bg-white w-1/5 rounded-xl">
                <div className="bg-[#8280FF] overflow-hidden">Invited</div>
                <p className="text-2xl text-[#8280FF]">0</p>
              </div>

              <div className="bg-white w-1/5 rounded-xl">
                <div className="bg-[#FEC53D] overflow-hidden">Invited</div>
                <p className="text-2xl text-[#FEC53D]">0</p>
              </div>

              <div className="bg-white w-1/5 rounded-xl">
                <div className="bg-[#4AD991] overflow-hidden">Invited</div>
                <p className="text-2xl text-[#4AD991]">0</p>
              </div>

              <div className="bg-white w-1/5 rounded-xl">
                <div className="bg-[#FF7777] overflow-hidden">Invited</div>
                <p className="text-2xl text-[#FF7777]">0</p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between mx-10">
              <div className="flex gap-20 text-center">
                <div>
                  <p className="text-4xl my-3">3</p>
                  <p className="text-xs">Started</p>
                </div>
                <div>
                  <p className="text-4xl my-3">1</p>
                  <p className="text-xs">Responded</p>
                </div>
              </div>
              <div>
                <p>Start : 11 March 2024</p>
                <p>End : No End Date</p>
              </div>
            </div>
          </div>
          <div className="shadow-md p-4 bg-gray-100 rounded-xl">
            <div className="">
              <Title className="text-blue-400" order={5}>
                <HiMiniBuildingOffice2 className="text-gray-500" /> Uqidev
              </Title>
              <p className="text-sm my-0">
                Your Free trial of Growth plan ends in 13 days
              </p>
              <hr />
              <p className="text-sm">Period: 09 Mar - 09 Apr</p>
            </div>
            <p className="text-center text-cyan-500">
              <FaChevronDown />
            </p>
          </div>
          <div className=" border border-solid border-gray-200 rounded-xl my-5">
            <p className="text-2xl mx-auto bg-gray-100 w-fit p-5 pb-3 rounded-full">
              <FiPlus />
            </p>
            <p className="text-center text-gray-500">Create an Organization</p>
          </div>
        </div>
        <div className="w-1/3 border border-solid border-cyan-500 h-fit p-6 rounded-2xl">
          <div className="flex justify-between text-gray-500">
            <p>Profile</p>
            <p>
              <FaRegEdit />
            </p>
          </div>
          <div className="w-full mx-auto text-center">
            <div className="">
            <Image src="/Ellipse 15.svg" alt="avatar" width={70} height={70} />
            </div>
            <p className="text-2xl">Al Amin</p>
          </div>
          <div className="text-gray-500">
            <p>Alaminkhandokar999@gmail.com</p>
            <hr />
            <p>+00 123 456 789</p>
            <hr />
            <p>Invato agency</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
