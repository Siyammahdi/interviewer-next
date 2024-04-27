import { Button, Image, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";

const Details = () => {
  return (
    <div className="max-w-6xl flex gap-10 mx-auto">
      <div className="w-2/3">
        <Title className="my-7 text-gray-500" order={2}>
          Executive, Finance & Accounts
        </Title>
        <Image radius="md" src="/Rectangle 51.svg" h={400} />
        <p>{text}</p>
        <Link href={"/User/Answer"}>
          <Button
            variant="filled"
            color="cyan"
            radius="xl"
            className="w-2/4 m-10 mx-44  "
          >
            Apply Now
          </Button>
        </Link>
      </div>
      <div className="w-1/3 my-16">
        <Title className="my-7 text-gray-500" order={4}>
          Information
        </Title>
        <p>Anywhere</p>
        <hr />
        <p>April 5, 2024</p>
        <hr />
        <p>www.yoursite.com</p>
        <hr />
        <p>Tips</p>
        <hr />
      </div>
    </div>
  );
};

export default Details;

const text =
  "We are a reputable education consultancy, tours and travels, and overseas manpower services provider based in the heart of Dhaka. Our organization`s head office is located in London, and we have a widespread network of branch offices globally. With a decade of experience in this field, we have been expanding our business and serving clients worldwide. We collaborate directly with local communities and authorities, and we are also actively establishing new connections in various regions.";
