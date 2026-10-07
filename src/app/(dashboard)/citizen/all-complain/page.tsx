// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// const AllComplain = () => {
//   return (
//     <Table>
//       <TableHeader>
//         <TableRow>
//           <TableHead>Title</TableHead>
//           <TableHead>Description</TableHead>
//           <TableHead>Location</TableHead>
//           <TableHead>Price</TableHead>
//           <TableHead>Details</TableHead>
//           <TableHead>Update</TableHead>
//           <TableHead>Delete</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         <TableRow>
//           <TableCell className="font-medium">INV001</TableCell>
//           <TableCell>Paid</TableCell>
//           <TableCell>Credit Card</TableCell>
//           <TableCell className="text-right">$250.00</TableCell>
//           <Button>Details</Button>
//           <Button>Update</Button>
//           <Button>Delete</Button>
//         </TableRow>
//       </TableBody>
//     </Table>
//   );
// };

// export default AllComplain;

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Pencil, Trash2 } from "lucide-react";

const AllComplain = () => {
  return (
    <div className="w-full space-y-4">
      {/* Header */}

      {/* Responsive Table */}
      <div className="w-full overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="min-w-[180px] font-semibold">
                  Title
                </TableHead>

                {/* <TableHead className="min-w-[250px] font-semibold">
                  Description
                </TableHead> */}

                <TableHead className="min-w-[180px] font-semibold">
                  Location
                </TableHead>

                <TableHead className="min-w-[100px] font-semibold">
                  Price
                </TableHead>

                <TableHead className="text-center font-semibold">
                  Details
                </TableHead>

                <TableHead className="text-center font-semibold">
                  Update
                </TableHead>

                <TableHead className="text-center font-semibold">
                  Delete
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow className="transition-colors hover:bg-muted/30">
                <TableCell className="font-medium">Damaged Road</TableCell>

                {/* <TableCell className="max-w-[300px] truncate text-muted-foreground">
                  The main road has been damaged and needs immediate repair.
                </TableCell> */}

                <TableCell className="text-muted-foreground">
                  Rajshahi City
                </TableCell>

                <TableCell className="font-semibold">৳250.00</TableCell>

                <TableCell className="text-center">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:border-blue-900 dark:text-blue-400 dark:hover:bg-blue-950"
                  >
                    <Eye className="mr-1.5 size-4" />
                    Details
                  </Button>
                </TableCell>

                <TableCell className="text-center">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-amber-200 text-amber-600 hover:bg-amber-50 hover:text-amber-700 dark:border-amber-900 dark:text-amber-400 dark:hover:bg-amber-950"
                  >
                    <Pencil className="mr-1.5 size-4" />
                    Update
                  </Button>
                </TableCell>

                <TableCell className="text-center">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950"
                  >
                    <Trash2 className="mr-1.5 size-4" />
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AllComplain;
