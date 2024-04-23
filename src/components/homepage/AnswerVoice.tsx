import { Button, Image, Title } from '@mantine/core';
import React from 'react';
import { LuClock3 } from 'react-icons/lu';
import { FaClockRotateLeft } from "react-icons/fa6";
import { CgSandClock } from "react-icons/cg";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { AudioRecorder } from 'react-audio-voice-recorder';
import { RiQuestionAnswerLine } from "react-icons/ri";
import Section from '../section';


const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
};

const AnswerVoice = () => {
    return (
			<Section Bgcolor={"#fff"}>
				<div className="text-center w-1/3 mx-auto text-gray-500 text-sm">
					<Title className="my-10" order={3}>
						What are some of your leadership experiences?
					</Title>
					<div>
						<div className="flex justify-center">
							<div className="bg-white p-5 w-full rounded-2xl shadow-xl">
								<div className="flex justify-between">
									<div className="px-3 bg-gray-200 rounded-full">00:00</div>
									<div className="px-3 bg-gray-200 rounded-full">Recording</div>
								</div>

								<div className="flex justify-center items-center gap-3 pt-20">
									<React.StrictMode>
										<AudioRecorder
											showVisualizer
											onRecordingComplete={addAudioElement}
											audioTrackConstraints={{
												noiseSuppression: true,
												echoCancellation: true,
											}}
											downloadOnSavePress={true}
											downloadFileExtension="webm"
										/>
									</React.StrictMode>
								</div>
							</div>
						</div>
						<div>
							<div className="absolute left-64 top-[2650px]">
								<p className="text-7xl text-gray-300 font-bold">01</p>
								<p>02</p>
								<p>03</p>
								<p>04</p>
							</div>
							<div className="flex gap-20 bg-white absolute left-32 top-[2755px]">
								<div className="h-3 w-16 bg-gray-300 my-auto"></div>
								<div>
									<p className="my-0 flex items-center">
										{" "}
										<RiQuestionAnswerLine /> Question
									</p>
								</div>
							</div>
						</div>
						<div className="">
							<div className="flex gap-10">
								<p className="flex items-center gap-1">
									<LuClock3 />
									Answer time 01:00
								</p>
								<p className="flex items-center gap-1">
									<FaClockRotateLeft />2 of 4 attempt(s) left
								</p>
							</div>
							<p className="flex items-start text-start gap-1">
								<CgSandClock className="text-2xl" />
								We recommend taking no more than 10m 00s to complete this
								question. Your time:{" "}
								<span className="text-blue-500 font-bold items-end">09:48</span>
							</p>
						</div>
						<div className="space-x-5 py-5">
							<Button variant="outline" color="black" radius="xl">
								<FaArrowRotateLeft /> Re-record
							</Button>
							<Button variant="filled" radius="xl">
								Save and continue
							</Button>
						</div>
					</div>
				</div>
			</Section>
		);
};

export default AnswerVoice;