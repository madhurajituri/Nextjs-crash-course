import { Metadata } from "next"

export const metadata : Metadata = {
    title:{
        absolute: "Colocation title"  // does not add | Template title to it
    }
}

function barchart(){ //this function not displayed because not exported as default and can't be identified as a react component
    return(
        <div>
            <h1>Bar chart</h1>
        </div>
    )
}

export default function linechart(){ //this function will be displayed only on path /coloaction
    return(
        <div>
            <h1>Line chart</h1>
        </div>
    )
}