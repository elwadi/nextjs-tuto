import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type User = {
  id: number;
  name: string;
  createdAt: string;
  avatar: string;
  phone: string;
  email: string;
  city: string;
};
export default async function Page() {
  const dataUsers = await fetch(
    "https://6800dc69b72e9cfaf728fb8e.mockapi.io/users"
  );
  const users = await dataUsers.json();

  return (
    <>
      <h1>Users page</h1>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Avatar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {users.map((user: User) => (
                <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.city}</TableCell>
                    <TableCell>
                    <Avatar>
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>&nbsp;</AvatarFallback>
                    </Avatar>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
