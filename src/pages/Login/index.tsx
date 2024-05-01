import React from "react";
import Section from "@/components/section";
import {Button, Text, TextInput} from "@mantine/core";
import Link from "next/link";


const Login = () => {
    return (
        <Section Bgcolor="#F9FAFB">
            <div className="flex justify-center items-center py-20">
                <form className="max-w-[95%] rounded-3xl bg-white flex flex-col justify-center items-center gap-5 p-10 shadow-xl">
                    <Text size="xl">Login</Text>
                    <TextInput
                        placeholder="Enter Your Email"
                        radius="xl"
                        required
                        className="w-[320px]"
                    />
                    <TextInput
                        placeholder="Enter Password"
                        radius="xl"
                        required
                        className="w-[320px]"
                    />
                    <Button radius="xl" className="w-40">Login</Button>
                    <Text size="sm" className="text-gray-500">Don't have an account? <Link href="/signup" className="text-blue-500 no-underline cursor-pointer">Sign Up</Link></Text>
                </form>
            </div>
        </Section>
    )
}

export default Login;