import type React from "react";

export default function Input({ title, type="text", icon, placeholder, onChange, value }:{ title?: string | React.ReactNode, type?: string, icon: React.ReactNode, placeholder: string, onChange: React.ChangeEventHandler<HTMLInputElement>, value: string | number | readonly string[] | undefined }){
    return (
        <div className={`${title && "space-y-1"} w-full`}>
            {title && <p className="font-semibold">{title}</p>}
            <div className="flex items-center relative flex-1 order-2 sm:order-1">
                <div className="absolute left-2 text-gray-500">{icon}</div>
                <input onChange={onChange} value={value} type={type} className="border border-gray-300 rounded-xl w-full px-7 py-2 outline-0 text-sm sm:text-base" placeholder={placeholder} />
            </div>
        </div>
    )
}