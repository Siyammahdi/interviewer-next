import React from "react";
import { TextInput } from "@mantine/core";
import Section from "../section/index";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { FiPlus } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa6";
import { Menu, Button, Text, rem } from '@mantine/core';
import Link from "next/link";

const Navbar = () => {
  return (
      <Section>
        <nav className="flex items-center justify-between my-6">
          <Image src={logo} alt="logo"></Image>
          <div className="relative" style={{ width: "45%", cursor: "pointer" }}>
            <TextInput size="md" radius="xl" placeholder="Search your job..." />
            <IoSearch className="absolute border top-1/3 right-5 text-xl text-gray-500" />
          </div>
          {/* <div className="space-x-4">
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
                </div> */}
          <div className="flex gap-6 items-center">
            <p>
              <Link href={"/AdminPanel/CreateInterview"}>
              <FiPlus className="text-gray-700" />
              </Link>
            </p>
            <p>
              <FaRegBell />
            </p>

            <Menu shadow="md" width={200}>
              <Menu.Target>
              <Image src="/Ellipse 15.svg" alt="avatar" width={30} height={30} />
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item>
                  <Link href={"/AdminPanel/Dashboard"} className="no-underline text-gray-500">Dashboard</Link>
                </Menu.Item>
                <Menu.Item >
                  <Link href={"/User/Dashboard"} className="no-underline text-gray-500">Interviews</Link>
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </nav>
   </Section>
  );
};

export default Navbar;
