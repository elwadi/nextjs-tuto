import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default async function Page() {
  const products= await fetch('https://6800b527b72e9cfaf72863d3.mockapi.io/products');
  const data = await products.json();
  console.log(data);
  return (

    <div className="flex flex-1 flex-col ">
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <h1>Account page </h1>
      <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((p:any) => (
          <TableRow key={p.id}>
            <TableCell className="font-medium">{p.id}</TableCell>
            <TableCell>{p.name}</TableCell>
            <TableCell>{p.createdAt}</TableCell>
            <TableCell className="text-right">{p.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
      </div>
    </div>
  </div>
    
  )
}