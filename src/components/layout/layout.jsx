import React from "react";
import Navbar from "../navigation/Navbar";
import Footer from "@/components/navigation/footer"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
    return (
        <div className={`${inter.className} max-w-7xl mx-auto`}>
            {/* <Menubar isMobileMenu={false} /> */}
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
}