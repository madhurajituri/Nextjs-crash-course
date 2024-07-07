import Card from "@/components/card";
import Link from "next/link";

export default function Archived(){
    return(
        <Card>
            <div>Archived folder  </div>
            <div><Link href="/dashboard">Go to default folder</Link></div>
        </Card>
    )
}