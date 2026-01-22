import type React from "react";
import { THEME_COLOUR } from "../lib/util";

export default function Button({ text }: { text: React.ReactNode }){
    return(
        <div 
            style={{ background: THEME_COLOUR, color: "white" }} 
            className="py-2 px-3 sm:px-4 whitespace-nowrap rounded-lg cursor-pointer hover:opacity-85 transition-opacity text-sm sm:text-base flex items-center justify-center h-full"
        >
            {text}
        </div>
    )
}