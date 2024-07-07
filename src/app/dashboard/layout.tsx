
export default function ReviewLayout({
    children,
    slot1,
    slot2,
    slot3,
    login,
}: {
    children: React.ReactNode;
    slot1: React.ReactNode;
    slot2: React.ReactNode;
    slot3: React.ReactNode;
    login: React.ReactNode;
}) {

    const isLoggedIn = false;

    return (

        <>
            <div>{children}</div>
            {isLoggedIn ? (
                <div>
                    <div className="flex gap-40">
                        <div className="flex flex-col gap-10">
                            {slot1}
                            {slot2}
                        </div>
                        <div>{slot3}</div>
                    </div>
                </div>
            ) :
                (<div>{login}</div>)
            }
        </>
    );
}
