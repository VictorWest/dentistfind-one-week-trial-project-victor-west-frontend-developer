import { useEffect, useState } from "react";
import logo from "../assets/images/logo.jpg"
import profile from "../assets/images/profile.jpg"
import { GoDotFill } from "react-icons/go";
import { THEME_COLOUR } from "../lib/util";
import { Link } from "react-router-dom";
import { BASE_ROUTE } from "../lib/constants";

export default function Header(){
    const [ userIsActive, setUserIsActive ] = useState<boolean>()

    useEffect(() => {
        setUserIsActive(true)
    }, [])

    return(
        <div className="px-10 py-5 flex justify-between" style={{ background: THEME_COLOUR, color: "white" }}>
            <Link to={BASE_ROUTE} className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
                <p className="text-xl font-bold">WebFlow</p>
            </Link>
            <div className="relative">
                <img src={profile} alt="Profile" className="w-9 h-9 rounded-full object-cover" />
                {userIsActive && <GoDotFill style={{ color: "#38CC82" }} className="absolute bottom-0 right-0" />}
            </div>
        </div>
    )
}