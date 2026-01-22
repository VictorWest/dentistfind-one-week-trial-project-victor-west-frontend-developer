import Hero from "./hero";
import ItemManagement from "./item-management";

export default function Dashboard(){
    return (
        <div className="my-6 sm:my-10 mx-4 sm:mx-8 lg:mx-20">
            <Hero />
            <section className="flex flex-col lg:flex-row items-start gap-5 lg:gap-8">
                <div className="w-full lg:w-2/3"><ItemManagement /></div>
            </section>
        </div>
    )
}