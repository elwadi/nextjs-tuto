import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default async function Page() {
  const users= await fetch('https://6800b527b72e9cfaf72863d3.mockapi.io/users');
  const data = await users.json();
  console.log(data);
  return (

    <div className="flex flex-1 flex-col ">
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <h1>Project page </h1>
      
      </div>
    </div>
  </div>
    
  )
}