import { Avatar, Title } from '@mantine/core';
import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import { BsPeopleFill } from "react-icons/bs";
import { BiSolidShoppingBags } from "react-icons/bi";
import { GiGraduateCap } from "react-icons/gi";

const InterviewCard = ({ item }) => {

    const { avatar, name, date, company_name, title, educational_req, experience_in_year, deadline, total_applied, job_location, video_link } = item

    return (
        <div className='border border-solid border-1 border-gray-300 rounded-2xl p-5 flex justify-between'>
            <div>
                <div className="flex gap-3 items-center">
                    <Avatar src={avatar} alt="no image here" />
                    <p className="text-sm text-gray-600 font-bold">{name}</p>
                    <p className="text-xs text-gray-500 font-semibold">{date}</p>''
                </div>
                <div>
                    <Title order={4}>{title}</Title>
                    <p className="text-[#00ABCE] text-sm font-semibold">{company_name}</p>

                    <div className="text-sm text-[#868788]">
                        <p className="items-center flex gap-1 my-0"><GiGraduateCap />{educational_req}</p>
                        <div className="flex gap-5">
                            <p className="flex items-center gap-1"><IoLocationSharp />{job_location}</p>
                            <p className="flex items-center gap-1"><LuClock3 />{deadline}</p>
                            <p className="flex items-center gap-1"><BsPeopleFill />{total_applied}</p>
                            <p className="flex items-center gap-1"><BiSolidShoppingBags />{experience_in_year}</p>
                        </div>
                    </div>
                </div>
            </div>
            <video width="260" height="180" className='rounded-lg' controls preload="none">
                <source src={video_link} type="video/mp4" />
                <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default InterviewCard;