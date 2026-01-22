import type React from "react";
import { THEME_COLOUR } from "../lib/util";

export default function OverviewCard({ title, value, svg } : { title: string, value: number, svg: React.ReactNode}){
    return(
        <div className="w-full h-30 flex flex-col justify-center items-center gap-3 p-4 sm:p-6 border border-gray-50 rounded-lg sm:rounded-2xl shadow hover:shadow-md transition-shadow">
            <div className="flex gap-4 sm:gap-10 items-center text-xs sm:text-sm w-full justify-between">
                <p className="flex-1">{title}</p>
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-gray-100 flex-shrink-0">
                    <p style={{ color: THEME_COLOUR }} className="text-base sm:text-lg">{svg}</p>
                </div>
            </div>
            <p className="text-xl sm:text-2xl font-bold">{Intl.NumberFormat().format(value)}</p>
        </div>
    )
}