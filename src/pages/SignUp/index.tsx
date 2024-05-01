import {Button, Text, TextInput} from "@mantine/core";
import Link from "next/link";
import Section from "@/components/section";


const Signup = () => {
    return (
        <Section Bgcolor="#F9FAFB" >
            <div className="flex justify-center items-center py-20">
                <form className="max-w-[95%] rounded-3xl shadow-xl bg-white flex flex-col justify-center items-center gap-5 p-10">
                    <Text size="xl">Sign up</Text>
                    <TextInput
                        placeholder="Enter Full Name"
                        radius="xl"
                        required
                        className="w-[320px]"
                    />
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
                    <Button radius="xl" className="w-40">Sign Up</Button>
                    <Text size="sm" className="text-gray-500">Have an account? <Link href="/login" className="text-blue-500 no-underline cursor-pointer">Login</Link></Text>
                </form>
            </div>
        </Section>
    );
}

export default Signup;