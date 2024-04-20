import React from "react";
import Menubar from "@/components/navigation/menubar";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen relative">
                <Menubar isMobileMenu={false} />
                <main>{children}</main>
        </div>
    );
}