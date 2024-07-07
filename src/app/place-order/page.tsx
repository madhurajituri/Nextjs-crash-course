"use client";

import { useRouter } from "next/navigation";

export default function Order() {

    const router = useRouter();

    const handleOrder = () => {
        console.log("Placing order");
        router.push("/");
        // router.back() to go to prev page url in history stack
        // router.replace("/") goes without saving in history , similar to router.push("/")
        // router.forward() to navigate forward to next page
    }

    return(
        <>
        <h1>Order</h1>
        <button onClick={handleOrder} className="p-2 bg-zinc-800 rounded-md">Place order here</button>
        </>
    )
}
