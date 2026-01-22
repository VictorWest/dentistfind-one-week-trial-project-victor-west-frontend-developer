import { useEffect, useState } from "react";
import type { Status } from "../lib/interfaces";

export default function StatusDisplay({status}:{status: Status}){
    const [ backgroundColour, setBackgroundColour ] = useState<string>()
    const [ textColour, setTextColour ] = useState("black")

    useEffect(() => {
        switch (status) {
            case "Completed":
                setBackgroundColour("#fff")
                break;
            case "In Progress":
                setBackgroundColour("#55B3F6")
                setTextColour("white")
                break;
            case "On Hold":
                setBackgroundColour("#E64D66")
                setTextColour("white")
                break;    
            case "Pending":
                setBackgroundColour("#F3F5F6")
                break;       
            default:
                break;
        }
    }, [])

    return(
        <div className="py-1 px-2 rounded-full text-center font-semibold text-xs sm:text-sm whitespace-nowrap" style={{ background: backgroundColour, color: textColour  }}>
            {status}
        </div>
    )
}