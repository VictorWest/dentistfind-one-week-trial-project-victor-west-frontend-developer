import { useEffect, useState } from "react"
import type { OverviewData } from "../lib/interfaces"
import { mockOverviewData } from "../lib/data"
import OverviewCard from "./overview-card"
import { IoMdCube } from "react-icons/io";
import { BsListTask } from "react-icons/bs";
import { FaCubes } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

export default function Hero(){
    const [ overviewData, setOverviewData ] = useState<OverviewData>({ totalItems: 0, activeProjects: 0, pendingTasks: 0, usersOnline: 0 })

    useEffect(() => {
        setOverviewData(mockOverviewData)
    }, [])

    return (
        <div className="space-y-5">
            <h2 className="text-3xl font-bold">Dashboard Overview</h2>
                <div className="w-full flex justify-between items-center gap-10 px-10">
                    <OverviewCard title="Total Items" value={overviewData?.totalItems} svg={<IoMdCube />} />
                    <OverviewCard title="Active Projects" value={overviewData?.activeProjects} svg={<FaCubes />} />
                    <OverviewCard title="Pending Tasks" value={overviewData?.pendingTasks} svg={<BsListTask />} />
                    <OverviewCard title="Users Online" value={overviewData?.usersOnline} svg={<FiUsers />} />
                </div>
        </div>
    )
}