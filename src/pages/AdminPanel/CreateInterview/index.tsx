import Navbar from "@/components/navigation/Navbar";
import { Image, Input, Switch, Title } from "@mantine/core";
import React from "react";

const CreateInterview = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <Navbar />
      <Title className="text-gray-500 text-center my-10" order={1}>
        Create Interview
      </Title>
      <div className="text-gray-500 max-w-4xl mx-auto">
        <Title className="my-8" order={3}>Setup</Title>
        <div className="space-y-5">
        <Input.Wrapper label="Interview Title">
        <Input radius="lg" color="gray" variant="filled" placeholder="Enter interview title. EG Senior Sales Execlutive" />
        </Input.Wrapper>
        <Input.Wrapper label="Salary">
        <Input radius="lg" color="gray" variant="filled" placeholder="Enter Salary" />
        </Input.Wrapper>
        <Input.Wrapper label="Company">
        <Input radius="lg" color="gray" variant="filled" placeholder="Your Company" />
        </Input.Wrapper>
        <Input.Wrapper label="Video intro">
        <Input radius="lg" color="gray" variant="filled" placeholder="Enter YouTube Video Link" />
        </Input.Wrapper>
        <div className="flex justify-end items-center gap-3">
            <p>Record my own</p>
            <Switch size="sm" onLabel="ON" offLabel="OFF" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default CreateInterview;
