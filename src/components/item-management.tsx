import { CiSearch } from "react-icons/ci";
import Button from "./button";
import { IoIosAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import type { ItemData } from "../lib/interfaces";
import { items } from "../lib/data";
import StatusDisplay from "./status-display";
import { Link } from "react-router-dom";
import { CREATE_ITEM_ROUTE } from "../lib/constants";
import Input from "./input";

export default function ItemManagement(){
    const [ mockItems, setMockItems ] = useState<ItemData[]>()

    useEffect(() => {
        setMockItems(items)
    }, [items])

    return (
        <div className="mt-5 space-y-5 px-4 sm:px-0">
            <h2 className="text-xl sm:text-2xl font-bold">Item Management</h2>
            <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-5">
                <Input icon={<CiSearch />} placeholder="Search items" />
                <Link to={CREATE_ITEM_ROUTE} className="order-1 sm:order-2">
                    <Button text={<div className="flex items-center gap-1 justify-center"><IoIosAdd /><p className="hidden sm:block">Add New Item</p></div>} />
                </Link>
            </div>
            <div className="">
                <div className="*:flex *:items-center *:*:w-90 *:gap-2 sm:*:gap-5 ">
                    <div className="text-stone-600 font-semibold text-xs sm:text-sm">
                        <p>Name</p>
                        <p>Status</p>
                        <p>Category</p>
                        <p>SKU</p>
                        <p>Actions</p>
                    </div>
                    {mockItems?.map((item) => (
                        <div key={item.id} className="my-5 text-xs sm:text-sm">
                            <p className="font-semibold">{item.name}</p>
                            <StatusDisplay status={item.status} />
                            <p className="truncate">{item.category}</p>
                            <p className="truncate">{item.sku}</p>
                            <p className="font-bold text-center">...</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}