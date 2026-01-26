import type React from "react";
import { THEME_COLOUR } from "../lib/util";

export default function Button({ text, outline, isInvalid, isDisabled }: { text: React.ReactNode, outline?: boolean, isInvalid?: boolean, isDisabled?: boolean }){
    const backgroundColour = outline ? "white" : THEME_COLOUR
    const textColour = outline ? "black" : "white"
    const opacity = isInvalid || isDisabled ? "70%" : "100%"
    
    return(
        <div 
            style={{ background: backgroundColour, color: textColour, opacity }} 
            className={`${outline && "border border-stone-300"} py-2 px-3 sm:px-4 whitespace-nowrap rounded-xl ${isDisabled ? "cursor-not-allowed" : "cursor-pointer hover:opacity-85"} transition-opacity text-sm sm:text-base flex items-center justify-center h-full`}
        >
            {text}
        </div>
    )
}