import React from 'react';
import { Button, Image, TextInput } from '@mantine/core';
import Section from "../section/index"
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
    return (
        <div>
            <Section>
                <div className="flex items-center justify-between my-6">
                    <Image
                        radius="md"
                        h={25}
                        src="/logo.png"
                    />
                    <div style={{ width: "45%", cursor: 'pointer'}}>
                        <TextInput
                            size="md"
                            radius="xl"
                            placeholder="Search your job..."
                        />
                        <IoSearch className='absolute top-[36px] right-[480px] text-xl text-gray-500' />
                    </div>
                    <div className="space-x-4">
                        <Button variant="filled" color='#10B5D7' size="sm" radius="xl" className='text-white' >Get Started</Button>
                        <Button variant="outline" color="rgba(66, 66, 66, 1)" size="sm" radius="xl" className='px-10'>Log in</Button>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Navbar;