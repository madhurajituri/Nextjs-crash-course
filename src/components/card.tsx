export default function Card({children} :{
    children: React.ReactNode;
}){
    const CardStyle = {
        padding:"50px",
        margin:"20px",
        border: "1px solid #ddd",
        display: "flex",
        justifyContent:"center",
        gap:"20px"
    }

    return(
        <div style={CardStyle}>{children}</div>
    )
}