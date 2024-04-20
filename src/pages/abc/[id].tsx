import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Page = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <Link href={"/"} >Go to home</Link>
            This is details page
        </div>
    );
};

export default Page;