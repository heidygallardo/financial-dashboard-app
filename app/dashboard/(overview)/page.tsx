import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { fetchCardData } from "@/app/lib/data";
import { Suspense } from "react";
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";

export default async function Page() {
    const {
      totalPaidInvoices,
      totalPendingInvoices,
      numberOfInvoices, 
      numberOfCustomers
      }  = await fetchCardData(); // waits for fetchLatestInvoices() to finish aka: waterfall
// cases where waterfalls may be wanted --> to satisfy a condition before making the next request
// e.g.fetching user's ID and profile info first then proceeding to fetch their list of friends

// common way to avoid waterfalls --> parallel data fetching (initiate all data requests at the same time - in parallel)
// disadvantage of parallel data fetching --> what happens if one data request is slower than all the others?

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" /> 
        <Card title="Pending" value={totalPendingInvoices} type="pending" /> 
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> 
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> 
      </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton/>}>
          <RevenueChart  /> 
        </Suspense>
   
        <Suspense fallback={<LatestInvoicesSkeleton/>} >
          <LatestInvoices /> 
        </Suspense>
      </div>
    </main>
  );
}
