"use client";

import { notFound } from 'next/navigation';

function getRandomInt(count:number){
    return Math.floor(Math.random()*count);
}

export default function review({params}:{
    params :{
        productId : string;
        reviewId : string;
    }
}){
    if(parseInt(params.reviewId) > 1000){
        notFound();
    }

    // const random = getRandomInt(2);
    // if(random==0){
    //     throw new Error("Error loading review");
    // }

    return(
        <div>
            <h1>Review {params.reviewId} for product {params.productId}</h1>
        </div>
    )
}