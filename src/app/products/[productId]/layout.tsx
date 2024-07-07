function getRandomInt(count:number){
    return Math.floor(Math.random()*count);
}


export default function ReviewLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const random = getRandomInt(2);
    if(random==0){
        throw new Error("Error loading product");
    }
    return (

        <>
            {children}
            <div className="text-2xl text-green-400">Always rendered after productId</div>

         </>
    );
}
