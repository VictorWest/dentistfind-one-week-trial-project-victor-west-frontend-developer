import { CiSearch } from "react-icons/ci";
import Button from "./button";
import { IoIosAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import type { ItemData } from "../lib/interfaces";
import { items } from "../lib/data";
import StatusDisplay from "./status-display";

export default function ItemManagement(){
    const [ mockItems, setMockItems ] = useState<ItemData[]>()

    useEffect(() => {
        setMockItems(items)
    }, [items])

    return (
        <div className="mt-5 space-y-5 px-4 sm:px-0">
            <h2 className="text-xl sm:text-2xl font-bold">Item Management</h2>
            <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-5">
                <div className="flex items-center relative flex-1 order-2 sm:order-1">
                    <CiSearch className="absolute left-2 text-gray-500" />
                    <input className="border border-gray-300 rounded-lg w-full px-7 py-2 outline-0 text-sm sm:text-base" placeholder="Search items" />
                </div>
                <div className="order-1 sm:order-2">
                    <Button text={<div className="flex items-center gap-1 justify-center"><IoIosAdd /><p className="hidden sm:block">Add New Item</p></div>} />
                </div>
            </div>
            <div className="overflow-x-auto">
                <div className="*:flex *:items-center *:*:min-w-fit *:gap-2 sm:*:gap-5 min-w-min">
                    <div className="text-stone-600 font-semibold text-xs sm:text-sm">
                        <p className="w-24 sm:w-32">Name</p>
                        <p className="w-20 sm:w-28">Status</p>
                        <p className="w-16 sm:w-24">Category</p>
                        <p className="w-16 sm:w-24">SKU</p>
                        <p className="w-12 sm:w-16">Actions</p>
                    </div>
                    {mockItems?.map((item) => (
                        <div key={item.id} className="my-5 text-xs sm:text-sm">
                            <p className="font-semibold w-24 sm:w-32 truncate">{item.name}</p>
                            <StatusDisplay status={item.status} />
                            <p className="w-16 sm:w-24 truncate">{item.category}</p>
                            <p className="w-16 sm:w-24 truncate">{item.sku}</p>
                            <p className="font-bold w-12 sm:w-16 text-center">...</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}