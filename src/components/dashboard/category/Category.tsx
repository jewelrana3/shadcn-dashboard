import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CategoryModal } from "@/modal/CategoryModal";
import { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
const category = [
  {
    key: "1",
    name: "Title name 1",
  },
  {
    key: "2",
    name: "Title name 2",
  },
  {
    key: "3",
    name: "Title name 3",
  },
];

type CategoryType = { key: string; name: string };

export function Category() {
  const [modal, setModal] = useState<boolean | null>(null);
  const [edit, setEdit] = useState<CategoryType | undefined>(undefined);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Serial ID</TableHead>
            <TableHead className="">Name</TableHead>
            <TableHead className="flex justify-end px-24">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {category.map((invoice) => (
            <TableRow key={invoice.key}>
              <TableCell className="font-medium">{invoice.key}</TableCell>
              <TableCell className="font-medium">{invoice.name}</TableCell>
              <TableCell className="font-medium">
                <div className="flex justify-end gap-5 px-20">
                  <button
                    onClick={() => {
                      setModal(true);
                      setEdit(invoice);
                    }}
                  >
                    <LiaEditSolid className="text-[#5C5C3D] text-[22px] cursor-pointer" />
                  </button>
                  <button onClick={handleDelete}>
                    <RiDeleteBin6Line className=" text-[22px] cursor-pointer text-red-500" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {modal && (
        <CategoryModal
          edit={edit}
          isOpen={modal}
          onClose={() => {
            setModal(null);
            setEdit(undefined);
          }}
        />
      )}
    </>
  );
}
