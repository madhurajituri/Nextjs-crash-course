export default function ReviewLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <>
            {children}
            <div className="text-2xl text-green-400">Always rendered after reviewId</div>

         </>
    );
}
