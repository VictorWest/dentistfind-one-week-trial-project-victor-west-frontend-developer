import { useEffect, useState } from "react";
import Input from "./input";
import { CiUser, CiCircleInfo } from "react-icons/ci";
import { FaCubes, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { LuDollarSign } from "react-icons/lu";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { MdError } from "react-icons/md";
import Button from "./button";
import { CATEGORIES, type Category, type ItemData, type FormErrors } from "../lib/interfaces";
import { getRandomNumbers } from "../lib/util";
import { useNavigate } from "react-router-dom";
import { BASE_ROUTE } from "../lib/constants";

export default function CreateForm(){
    const navigate = useNavigate()

    const [ toggleActiveSwitch, setToggleActiveSwitch ] = useState(true)
    const [ toggleVisibilityCheck, setToggleVisibilityCheck ] = useState(true)
    const [ submitIsValid, setSubmitIsValid ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ errors, setErrors ] = useState<FormErrors>({})
 
    const [ formData, setFormData ] = useState<ItemData>({
        id: "",
        name: "",
        sku: "",
        category: "Design",
        price: 0,
        costPerItem: 0,
        stockQuantity: 0,
        description: "",
        supplier: "",
        status: "In Progress"
    })

    useEffect(() => {
        toggleActiveSwitch && setFormData(prev => ({...prev, status: "In Progress"}))
    }, [toggleActiveSwitch])

    useEffect(() => {
        setFormData(prev => ({...prev, id: `${getRandomNumbers(3)}-${getRandomNumbers(3)}`, sku: `SKU-${getRandomNumbers(5)}`}))
    }, [])

    useEffect(() => {
        const newErrors: FormErrors = {};
        
        if (formData.name.trim() === "") {
            newErrors.name = "Item name is required";
        }
        
        if (formData.price <= 0) {
            newErrors.price = "Price must be greater than 0";
        }
        
        if (formData.stockQuantity < 0) {
            newErrors.stockQuantity = "Stock quantity cannot be negative";
        }
        
        if (formData.supplier.trim() === "") {
            newErrors.supplier = "Supplier is required";
        }
        
        setErrors(newErrors);
        const isSubmitValid = formData.name.trim() !== "" && formData.price > 0 && formData.stockQuantity >= 0;
        setSubmitIsValid(isSubmitValid)
    }, [formData])

    const handleSubmit = () => {
        if (submitIsValid){
            setIsLoading(true);
            // Simulate API call
            setTimeout(() => {
                setIsLoading(false);
                console.log("Item created:", formData);
                navigate(BASE_ROUTE)
            }, 1500);
        }
    }

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
                    {errors.name && (
                        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-2 rounded-lg">
                            <MdError className="text-lg" />
                            <span>{errors.name}</span>
                        </div>
                    )}
                    <Input value={formData?.sku} onChange={(e) => setFormData((prev) => ({...prev, sku: e.target.value}))} title="SKU" icon={<CiCircleInfo />} placeholder="WBP-001-A" />
                    <div className="space-y-1">
                        <p className="font-semibold">Category</p>
                        <select value={formData?.category} onChange={(e) => setFormData(prev => ({...prev, category: e.target.value as Category}))} className="border border-gray-300 rounded-xl w-full p-2 outline-0 text-sm sm:text-base cursor-pointer">
                            {CATEGORIES.map((item) => (
                                <option value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <Input value={formData?.supplier} onChange={(e) => setFormData((prev) => ({...prev, supplier: e.target.value}))} title={<p>Supplier <span className="text-red-600">*</span></p>} icon={<CiUser />} placeholder="Marcus Aurelius" />
                    {errors.supplier && (
                        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-2 rounded-lg">
                            <MdError className="text-lg" />
                            <span>{errors.supplier}</span>
                        </div>
                    )}
                </div>
               <div>
                    <div>
                        <h3 className="text-xl font-semibold">Pricing & Inventory</h3>
                        <p className="text-gray-500 text-sm">Manage your item's pricing and stock levels.</p>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                        <div className="flex-1">
                            <Input value={formData?.price} onChange={(e) => setFormData((prev) => ({...prev, price: Number(e.target.value)}))} type="number" title={<p>Price <span className="text-red-600">*</span></p>} icon={<LuDollarSign />} placeholder="0.0" />
                            {errors.price && (
                                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-2 rounded-lg mt-1">
                                    <MdError className="text-lg" />
                                    <span>{errors.price}</span>
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <Input value={formData?.costPerItem} onChange={(e) => setFormData((prev) => ({...prev, costPerItem: Number(e.target.value)}))} type="number" title="Cost per Item" icon={<LuDollarSign />} placeholder="0.0" />
                        </div>
                    </div>
                    <Input value={formData?.stockQuantity} onChange={(e) => setFormData((prev) => ({...prev, stockQuantity: Number(e.target.value)}))} type="number" title={<p>Stock Quantity <span className="text-red-600">*</span></p>} icon={<FaCubes />} placeholder="0" />
                    {errors.stockQuantity && (
                        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-2 rounded-lg">
                            <MdError className="text-lg" />
                            <span>{errors.stockQuantity}</span>
                        </div>
                    )}
                </div>
                <div>
                    <div>
                        <h3 className="text-xl font-semibold">Product Description</h3>
                        <p className="text-gray-500 text-sm">Provide a detailed description</p>
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
                <Button outline text="Cancel" isDisabled={isLoading} />
                <div onClick={submitIsValid && !isLoading ? handleSubmit : undefined}>
                    <Button text={isLoading ? "Saving..." : "Save Item"} isInvalid={!submitIsValid || isLoading} isDisabled={isLoading} />
                </div>
            </div>
        </div>
    )
}