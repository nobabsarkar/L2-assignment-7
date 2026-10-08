import { allUsers, updateUserStatus } from "@/api/user.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useGetAllUser() {
  return useQuery({
    queryKey: ["users"],
    queryFn: allUsers,
    retry: false,
  });
}

export function useUpdateUserStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      status,
    }: {
      id: string;
      status: "ACTIVE" | "BLOCKED";
    }) => updateUserStatus(id, status),

    onSuccess: () => {
      toast.success("User status updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },

    onError: (error) => {
      console.error("Update user status error:", error);
      toast.error("Failed to update user status");
    },
  });
}

// export function useUpdateUserStatus() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: ({
//       id,
//       status,
//     }: {
//       id: string;
//       status: "ACTIVE" | "BLOCKED";
//     }) => updateUserStatus(id, status),

//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["users"],
//       });
//     },
//   });
// }
