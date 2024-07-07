"use client";
//because all are server components in next by default. and so to use hooks we have to make it a client server. hook used in this = usePathaName

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const links = [
        {
            name: "Register", href: "/register"
        },
        {
            name: "Login", href: "/login"
        }
    ]
    const pathname = usePathname();

    const [input, setinput] = useState("");

    return (
        <>
            <div><input value={input} onChange={e=>setinput(e.target.value)} className="text-black"></input></div>
            {links.map((item, index) => {
                const isActive = pathname.startsWith(item.href);
                return (
                    <Link href={item.href} key={index} className={isActive ? "text-gray-500" : "underline text-pink-400 mx-2"}>{item.name}</Link>
                )
            })}
            <h1>Inner layout</h1>
            {children}
        </>

    )
}
