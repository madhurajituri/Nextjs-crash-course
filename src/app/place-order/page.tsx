"use client"

import { useRouter } from "next/navigation";

export default function order() {

    const router = useRouter();

    const handleOrder = () => {
        console.log("Placing order");
        router.push("/");
    }

    return(
        <>
        <h1>Order</h1>
        <button onClick={handleOrder} className="p-2 bg-zinc-800 rounded-md">Place order here</button>
        </>
    )
}