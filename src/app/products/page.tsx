import Link from "next/link";

export default function products(){
    return(
        <div>
            <h1>Product list</h1>
            <ol>
                <li><Link href="/products/1">Product 1</Link></li>
                <li><Link href="/products/2">Product 2</Link></li>
                <li><Link href="/products/3" replace>Product 3</Link></li> 
                {/* replace goes to after clicking back prev to prev url  */}
            </ol>
        </div>
    )
}