import { useState } from "react";
import Input from "./input";
import { CiUser, CiCircleInfo } from "react-icons/ci";
import { FaCubes, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { LuDollarSign } from "react-icons/lu";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import Button from "./button";
import type { ItemData } from "../lib/interfaces";

export default function CreateForm(){
    const [ toggleActiveSwitch, setToggleActiveSwitch ] = useState(true)
    const [ toggleVisibilityCheck, setToggleVisibilityCheck ] = useState(true)

    const [ formData, setFormData ] = useState<ItemData>({
        id: "",
        name: "",
        sku: "",
        category: "Design",
        price: 0,
        costPerItem: 0,
        stockQuantity: 0,
        description: "",
        status: "In Progress"
    })

    return(
        <div className="my-6 sm:my-10 mx-4 sm:mx-8 lg:mx-20 space-y-5">
            <div>
                <h2 className="text-3xl font-bold">Create New Item</h2>
                <p className="text-gray-500">Fill in the details below to add a new item to your inventory.</p>
            </div>
            <div className="p-5 *:space-y-5 space-y-10 *:border *:border-stone-50 *:shadow *:rounded-xl *:p-5">
                <div>
                    <div>
                        <h3 className="text-xl font-semibold">General Information</h3>
                        <p className="text-gray-500 text-sm">Basic details about your item.</p>
                    </div>
                    <Input value={formData?.name} onChange={(e) => setFormData((prev) => ({...prev, name: e.target.value}))} title={<p>Item Name <span className="text-red-600">*</span></p>} icon={<CiUser />} placeholder="e.g., Wireless Bluetooth Speaker" />
                    <Input value={formData?.sku} onChange={(e) => setFormData((prev) => ({...prev, sku: e.target.value}))} title="SKU" icon={<CiCircleInfo />} placeholder="WBP-001-A" />
                    {/* <Input value={formData?.category} onChange={(e) => setFormData((prev) => ({...prev, category: e.target.value}))} title="Category" icon={<FaCubes />} placeholder="Electronics" /> */}
                </div>
               <div>
                    <div>
                        <h3 className="text-xl font-semibold">Pricing & Inventory</h3>
                        <p className="text-gray-500 text-sm">Manage your item's pricing and stock levels.</p>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                        <Input value={formData?.price} onChange={(e) => setFormData((prev) => ({...prev, price: Number(e.target.value)}))} type="number" title={<p>Price <span className="text-red-600">*</span></p>} icon={<LuDollarSign />} placeholder="0.0" />
                        <Input value={formData?.costPerItem} onChange={(e) => setFormData((prev) => ({...prev, costPerItem: Number(e.target.value)}))} type="number" title="Cost per Item" icon={<LuDollarSign />} placeholder="0.0" />
                    </div>
                    <Input value={formData?.stockQuantity} onChange={(e) => setFormData((prev) => ({...prev, stockQuantity: Number(e.target.value)}))} type="number" title={<p>Stock Quantity <span className="text-red-600">*</span></p>} icon={<FaCubes />} placeholder="0" />
                </div>
                <div>
                    <div>
                        <h3 className="text-xl font-semibold">Product Description & Media</h3>
                        <p className="text-gray-500 text-sm">Provide a detailed description and add images for your item.</p>
                    </div>
                    <div className="space-y-1">
                        <p className="font-semibold">Description</p>
                        <textarea value={formData?.description} onChange={(e) => setFormData((prev) => ({...prev, description: e.target.value}))} className="border border-gray-300 rounded-xl w-full p-2 outline-0 text-sm sm:text-base h-40 resize-none" placeholder="Tell us more about your item..."></textarea>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className="text-xl font-semibold">Status & Visibility</h3>
                        <p className="text-gray-500 text-sm">Control the availability and visibility of your item.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">Active Status</p>
                        <div onClick={() => setToggleActiveSwitch(prev => !prev)}>
                            {toggleActiveSwitch ? 
                                <FaToggleOn className="text-3xl cursor-pointer text-[#55B3F6]" /> : 
                                <FaToggleOff className="text-3xl cursor-pointer text-[#55B3F6]" />
                            }
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">Visible on Storefront</p>
                        <div onClick={() => setToggleVisibilityCheck(prev => !prev)}>
                            {toggleVisibilityCheck ? 
                                <MdCheckBox className="text-2xl cursor-pointer text-[#55B3F6]" /> : 
                                <MdCheckBoxOutlineBlank className="text-2xl cursor-pointer text-[#55B3F6]" />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-3 px-5">
                <Button outline text="Cancel" />
                <Button text="Save Item" />
            </div>
        </div>
    )
}