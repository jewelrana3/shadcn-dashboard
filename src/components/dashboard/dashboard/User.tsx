import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserModal from "@/modal/UserModal";
import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const invoices = [
  {
    key: "1",
    no: "#24721",
    name: "Admin Asadujjaman",
    address: "3891 Ranchview Dr. Richardson",
    email: "kenzi.lawson@example.com",
    contact: "225.555.0118",
    date: "2/11/12",
  },
  {
    key: "2",
    no: "#26552",
    name: "Admin Asadujjaman",
    address: "4517 Washington Ave. Manchester",
    email: "sara.cruz@example.com",
    contact: "203.555.0106",
    date: "8/30/14",
  },
  {
    key: "3",
    no: "#24563",
    name: "Admin Asadujjaman",
    address: "3517 W. Gray St. Utica",
    email: "nathan.roberts@example.com",
    contact: "239.555.0108",
    date: "8/2/19",
  },
  {
    key: "4",
    no: "#2424",
    name: "Dr. Anna KOWALSKA",
    address: "2118 Thornridge Cir. Syracuse",
    email: "alma.lawson@example.com",
    contact: "270.555.0117",
    date: "8/16/13",
  },
  {
    key: "5",
    no: "#247865",
    name: "Dr. Michael O'CONNOR",
    address: "2972 Westheimer Rd. Santa Ana",
    email: "tim.jennings@example.com",
    contact: "262.555.0131",
    date: "5/19/12",
  },
  {
    key: "6",
    no: "#24456",
    name: "Dr. Yasmin AL-FARSI",
    address: "2464 Royal Ln. Mesa",
    email: "willie.jennings@example.com",
    contact: "205.555.0100",
    date: "7/27/13",
  },
  {
    key: "7",
    no: "#24727",
    name: "Dr. Leila BEN AMAR",
    address: "8502 Preston Rd. Inglewood",
    email: "bill.sanders@example.com",
    contact: "307.555.0133",
    date: "10/6/13",
  },
  {
    key: "8",
    no: "#24578",
    name: "Dr. Elena PETROVA",
    address: "6391 Elgin St. Celina",
    email: "debra.holt@example.com",
    contact: "201.555.0124",
    date: "9/23/16",
  },
  {
    key: "9",
    no: "#2499",
    name: "Dr. Sergei IVANOV",
    address: "2118 Thornridge Cir. Syracuse",
    email: "curtis.weaver@example.com",
    contact: "704.555.0127",
    date: "12/10/13",
  },
  {
    key: "10",
    no: "#242310",
    name: "Dr. Sofia OLIVEIRA",
    address: "4140 Parker Rd. Allentown",
    email: "michelle.rivera@example.com",
    contact: "671.555.0110",
    date: "5/30/14",
  },
  {
    key: "11",
    no: "#249811",
    name: "Dr. Ahmed KHAN",
    address: "3517 W. Gray St. Utica",
    email: "felicia.reid@example.com",
    contact: "603.555.0123",
    date: "4/4/18",
  },
];

export default function User() {
  const [userDetails, setUserDetails] = useState(false);
  return (
    <>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="bg-[#212526] h-12">
            <TableHead className="w-[100px] rounded-tl-lg">Invoice</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="">Email</TableHead>
            <TableHead className="">Contact</TableHead>
            <TableHead className="">Date</TableHead>
            <TableHead className="rounded-tr-lg">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.key} className="">
              <TableCell className="font-medium p-3">{invoice.no}</TableCell>
              <TableCell>{invoice.name}</TableCell>
              <TableCell>{invoice.address}</TableCell>
              <TableCell className="">{invoice.email}</TableCell>
              <TableCell className="">{invoice.contact}</TableCell>
              <TableCell className="">{invoice.date}</TableCell>
              <TableCell
                className="pl-6 cursor-pointer"
                onClick={() => setUserDetails(true)}
              >
                <MdOutlineRemoveRedEye size={22} className="text-[#6CA0DC]" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* user details show */}
      <UserModal isOpen={userDetails} onClose={() => setUserDetails(false)} />
    </>
  );
}
