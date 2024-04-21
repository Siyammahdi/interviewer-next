import React from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
    return (
        <div className={inter.className}>
            {/* <Menubar isMobileMenu={false} /> */}
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
}