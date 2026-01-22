import Hero from "./hero";
import ItemManagement from "./item-management";

export default function Dashboard(){
    return (
        <div className="my-10 mx-20">
            <Hero />
            <section className="flex items-center gap-5">
                <div className="w-2/3"><ItemManagement /></div>
            </section>
        </div>
    )
}