import Card from "@/components/card";
import Link from "next/link";

export default function Slot1(){
    return(
        <Card>
            <div>Default folder  </div>
            <div><Link href="/dashboard/archived">Go to Archived folder</Link></div>
        </Card>
    )
}