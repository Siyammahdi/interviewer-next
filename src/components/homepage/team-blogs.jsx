import { Badge, Button, Title } from '@mantine/core';
import React from 'react';

const TeamBlogs = () => {
    return (
        <div className='border border-solid border-1 border-gray-300 rounded-2xl p-5'>
            <div className='flex gap-5 '>
                <Title order={5}>Team Blogs</Title>
                <Badge color="#32C3E1" radius="sm">NEW</Badge>
            </div>
            <p>An end-to-end blogging platform for devtools, engineering, and open-source teams.</p>
            <div className='flex justify-center'>
                <Button variant="filled" w={150} color="rgba(222, 222, 222, 1)" size="xs" radius="xl" className='text-black'>Create a team blog</Button>
            </div>
        </div>
    );
};

export default TeamBlogs;