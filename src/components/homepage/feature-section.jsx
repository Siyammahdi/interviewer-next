import { Title } from '@mantine/core';
import React from 'react';
import Section from "../section/index"


const ExploreSection = () => {

    const data = [
        {
          id: 1,
          title: "AI",
          icon: "/ExploreSection/Ai.png",
          body: "Ask literally anything. Likho will answer.",
          backgroundColor: "#F0E1F9"
        },
        {
          id: 2,
          title: "Wikis",
          icon: "/ExploreSection/Wikis.png",
          body: "Centralize your knowledge. No more hunting for answers.",
          backgroundColor: "#FCE9E8"
        },
        {
          id: 3,
          title: "Projects",
          icon: "/ExploreSection/Projects.png",
          body: "Manage Complex projects without the chaos.",
          backgroundColor: "#E2ECF3"
        },
        {
          id: 4,
          title: "Docs",
          icon: "/ExploreSection/Docs.png",
          body: "Simple, powerful, beautiful. Next-gen notes & docs.",
          backgroundColor: "#FFF6D6"
        }
      ];
      



    return (
        <div>
            <Section Bgcolor={"#F9FAFB"}>
                <div className="text-center mb-8">
                    <Title order={4}>EXPLORE WHAT YOU NEED</Title>
                    <p className="text-sm my-1 text-[#868788]">Read stories, thinking, and expertise from writers.</p>
                </div>
                <div className="flex gap-5 justify-between w-full">
                    {
                        data.map((item) => (
                            <div key={item.id}>
                                <div className="border border-1 border-solid border-gray-300 rounded-xl p-5 max-w-[273px]">
                                    <div className="flex gap-5">
                                        <div style={{backgroundColor: item.backgroundColor,}} className="px-1 rounded-md items-center flex">
                                            <img src={item.icon}  />
                                        </div>
                                        <Title order={3}>{item.title}</Title>
                                    </div>
                                    <p className="text-sm text-[#868788]">{item.body}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Section>
        </div>
    );
};

export default ExploreSection;