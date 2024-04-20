import React, { useState } from 'react'
import Logo from "./../assets/Logo.png"
import {
    LayoutDashboard,
    Clock3,
    BarChart2,
    ArrowRightLeft,
    HelpCircleIcon
} from "lucide-react";

const navLinks = [
    {
        name: "Dashboard",
        icon: LayoutDashboard
    },
    {
        name: "Activity",
        icon: Clock3
    },
    {
        name: "Analytics",
        icon: BarChart2
    },
    {
        name: "Transactions",
        icon: ArrowRightLeft
    },
    {
        name: "Help Center",
        icon: HelpCircleIcon
    }
]

function NavigationBar() {
    const[activeNavIndex,setActiveNavIndex] = useState(0);

    return (
        <div className="px-10 py-12 flex flex-col border border-r-1 w-1/5 h-screen">
            <div className="logo-div flex space-x-3 items-center">
                <img src={Logo} alt='Logo' />
                <span>Stock Tracker</span>
            </div>
            <div className="mt-10 flex flex-col space-y-8">
                {navLinks.map((item, index) => (
                    <div key={index} className={"flex space-x-3 p-2 rounded" + (activeNavIndex === index 
                        ? " bg-[#FF8C8C] text-white font-semibold" : " ")}
                        onClick={() => setActiveNavIndex(index)}
                        >
                        <item.icon/>
                        <span>{item?.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NavigationBar