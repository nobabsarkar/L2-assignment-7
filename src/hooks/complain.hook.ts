import {
  allComplain,
  createComplain,
  singleComplain,
} from "@/api/complain.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useComplain() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createComplain,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["complain"],
      });
    },
  });
}

export function useGetAllComplain() {
  return useQuery({
    queryKey: ["complain"],
    queryFn: allComplain,
    retry: false,
  });
}

export function useSingleComplain(id: string) {
  return useQuery({
    queryKey: ["complain", id],
    queryFn: () => singleComplain(id),
    enabled: !!id,
  });
}
