//[] produces dynamic routes folder
import { Metadata } from "next"

export const generateMetadata = ({params}:Props) : Metadata => {
    return{
        title: `Product ${params.productId}`
    }
}
type Props = {
    params:{
        productId : string
    }
}

export default function products({params} : Props){
    return(
        <div>
            <h1>Details about product {params.productId}</h1>
        </div>
    )
}