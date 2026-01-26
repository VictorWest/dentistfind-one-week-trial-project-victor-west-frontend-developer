import Hero from "./hero";
import ItemManagement from "./item-management";
import RecentActivities from "./recent-activities";

export default function Dashboard(){
    return (
        <div className="my-6 sm:my-10 mx-4 sm:mx-8 lg:mx-20">
            <Hero />
            <section className="flex flex-col lg:flex-row items-start gap-5 lg:gap-8 mt-15 *:*:space-y-5 *:*:px-4 *:*:sm:px-0">
                <div className="w-full lg:w-2/3"><ItemManagement /></div>
                <div className="w-full lg:w-2/3"><RecentActivities /></div>
            </section>
        </div>
    )
}