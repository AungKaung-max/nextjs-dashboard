import Table from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";

async function page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const customers = await fetchFilteredCustomers(query);
  return <Table customers={customers} />;
}

export default page;
