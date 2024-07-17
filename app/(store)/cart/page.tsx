import {CartPendingOrders} from "@/stories/RahsazStore/Cart/PendingOrders/PendingOrders";
import {CartTabs} from "@/stories/RahsazStore/Cart/Tabs";

export default function Page() {
    return (
        <main className="grid grid-cols-1 lg:grid-cols-6">
            <section className="col-span-4 relative">
                <div className="flex flex-col p-4 gap-3 relative">
                    <CartPendingOrders/>
                    <CartTabs/>
                </div>
            </section>
            <section className="col-span-2 relative">
                <div className="flex flex-col p-4 gap-3 relative bg-red-600">

                </div>
            </section>
        </main>
    );
}
