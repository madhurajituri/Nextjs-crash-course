import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Blog title",
}

export default function blog() {
    return (
        <>
            <div>Blog</div>
            <Link href="/about">Go to about</Link>
        </>
    )
}