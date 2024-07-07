
import Link from "next/link";

export default function Folder4(){
    return(
        <>
        <div>Folder 4</div>
        <Link href="/folder1/folder3">Go to folder 3</Link>
        <br/>
        <Link href="/about">Go to about</Link>
        </>
    )
}