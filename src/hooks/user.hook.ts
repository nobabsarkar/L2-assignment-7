import {
  adminGetAllPayments,
  createPayment,
  getUserPayments,
} from "@/api/complain.api";
import { allUsers, updateUserRole } from "@/api/user.api";
import { UserRole } from "@/types/user.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

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

export function useCreatePayment() {
  return useMutation({
    mutationFn: createPayment,

    onSuccess: (response) => {
      console.log("Payment response:", response);

      const paymentUrl = response?.data?.paymentUrl;

      if (paymentUrl) {
        window.location.href = paymentUrl;
      } else {
        toast.error("Payment gateway URL not found");
      }
    },
  });
}

export function useGetUserPayments() {
  return useQuery({
    queryKey: ["user-payments"],
    queryFn: getUserPayments,
  });
}

export function useGetAllPayments() {
  return useQuery({
    queryKey: ["get-all-payments"],
    queryFn: adminGetAllPayments,
  });
}
