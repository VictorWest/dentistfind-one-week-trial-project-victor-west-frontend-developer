import type React from "react";
import { THEME_COLOUR } from "../lib/util";

export default function OverviewCard({ title, value, svg } : { title: string, value: number, svg: React.ReactNode}){
    return(
        <div className="w-full h-30 flex flex-col justify-center items-center border border-gray-50 rounded-2xl shadow">
            <div className="flex gap-10 items-center text-sm">
                <p>{title}</p>
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100">
                    <p style={{ color: THEME_COLOUR }} className="text-lg">{svg}</p>
                </div>
            </div>
            <p className="text-2xl font-bold">{Intl.NumberFormat().format(value)}</p>
        </div>
    )
}