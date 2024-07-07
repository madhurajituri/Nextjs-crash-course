import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1 className="text-5xl text-blue-800">Home Page</h1>
    <Link href="/blog">Blog</Link>
    </>
  );
}
