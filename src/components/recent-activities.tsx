import { useEffect, useState } from "react"
import type { RecentActivity } from "../lib/interfaces"
import { mockRecentActivities } from "../lib/data"
import { CiBoxList } from "react-icons/ci";
import { timeSince } from "../lib/util";

export default function RecentActivities(){
    const [ recentActivities, setRecentActivities ] = useState<RecentActivity[]>()

    useEffect(() => {
        setRecentActivities(mockRecentActivities)
    }, [mockRecentActivities])

    return (
        <div>
            <div>
                <h2 className="text-xl sm:text-2xl font-bold">Recent Activities</h2>
                <p className="text-gray-500 text-sm">Updates on your items and projects.</p>
            </div>
            <div className="mt-15 border border-stone-50 shadow rounded-xl p-5">
                {recentActivities?.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 border-b border-stone-300 py-5">
                        <CiBoxList />
                        <div>
                            <p>{item.description}</p>
                            <p className="text-xs text-gray-500">{timeSince(item.createdAt)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}