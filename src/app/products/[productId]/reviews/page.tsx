export default function reviews({params}:{
    params:{
        productId : string;
    }
}){
    return(
        <div>
            <h1>Check reviews for product {params.productId}</h1>
        </div>
    )
}