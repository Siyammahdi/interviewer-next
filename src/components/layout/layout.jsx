import React from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";

export default function Layout({ children }) {
    return (
        <div className="">
            {/* <Menubar isMobileMenu={false} /> */}
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
}