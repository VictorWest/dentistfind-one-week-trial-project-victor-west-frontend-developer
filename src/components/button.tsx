import type React from "react";
import { THEME_COLOUR } from "../lib/util";

export default function Button({ text }: { text: React.ReactNode }){
    return(
        <div 
            style={{ background: THEME_COLOUR, color: "white" }} 
            className="py-2 px-3 whitespace-nowrap rounded-lg cursor-pointer hover:opacity-85"
        >
            {text}
        </div>
    )
}