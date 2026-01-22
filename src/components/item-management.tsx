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
        <div className="mt-5 space-y-5">
            <h2 className="text-2xl font-bold">Item Management</h2>
            <div className="w-full flex gap-5">
                <div className="flex items-center relative w-full">
                    <CiSearch className="absolute left-2 text-gray-500" />
                    <input className="border border-gray-300 rounded-lg w-full px-7 py-2 outline-0" placeholder="Search items" />
                </div>
                <Button text={<div className="flex items-center gap-1"><IoIosAdd /><p>Add New Item</p></div>} />
            </div>
            <div className="*:flex *:items-center *:*:w-60 *:gap-5">
                <div className="text-stone-600 font-semibold">
                    <p>Name</p>
                    <p>Status</p>
                    <p>Category</p>
                    <p>SKU</p>
                    <p>Actions</p>
                </div>
                {mockItems?.map((item) => (
                    <div className="my-5 text-sm">
                        <p className="font-semibold">{item.name}</p>
                        <StatusDisplay status={item.status} />
                        <p>{item.category}</p>
                        <p>{item.sku}</p>
                        <p className="font-bold">...</p>
                    </div>
                ))}
            </div>
        </div>
    )
}