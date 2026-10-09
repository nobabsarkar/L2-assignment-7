import { allUsers, updateUserRole } from "@/api/user.api";
import apiClient from "@/lib/apiClient";
import { UserRole } from "@/types/user.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetAllUser() {
  return useQuery({
    queryKey: ["users"],
    queryFn: allUsers,
    retry: false,
  });
}

export function useUpdateUserRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, role }: { id: string; role: UserRole }) =>
      updateUserRole(id, role),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}
