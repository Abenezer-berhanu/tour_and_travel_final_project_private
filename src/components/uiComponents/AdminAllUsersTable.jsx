"use client";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { deleteAccount } from "@/lib/actions/users";
import { useFormState } from "react-dom";

export default function AdminAllUsersTable({ users }) {
  const [state, formAction] = useFormState(deleteAccount, null);
  return (
    <Table>
      <Thead>
        <Tr className="bg-primary h-12">
          <Th className="text-white text-start">Profile</Th>
          <Th className="text-white text-start">Name</Th>
          <Th className="text-white text-start">Email</Th>
          <Th className="text-white text-start">Role</Th>
          <Th className="text-white text-start">Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users?.slice(0, 15).map((user, idx) => (
          <Tr key={idx} className={`${idx % 2 === 0 && "bg-slate-100"}`}>
            <Td className="text-sm font-semibold py-3">
              <Avatar className="size-6 border">
                <AvatarImage src={user?.photo} />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </Td>
            <Td className="text-sm font-semibold py-1">{user.name}</Td>
            <Td className="text-sm font-semibold py-1">{user.email}</Td>
            <Td className="text-sm font-semibold py-1">{user.role}</Td>
            <Td className="text-sm font-semibold py-1">
              <form action={formAction}>
                <input type="hidden" name="id" value={user?._id} />
                <input type="hidden" name="purpose" value={"permanent"} />
                <Button
                  variant="ghost"
                  className="bg-transparent hover:bg-transparent p-0 text-red-500 hover:underline hover:text-red-600"
                >
                  Delete
                </Button>
              </form>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}