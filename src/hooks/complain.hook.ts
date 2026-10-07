import {
  allComplain,
  createComplain,
  singleComplain,
} from "@/api/complain.api";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useComplain() {
  return useMutation({
    mutationFn: createComplain,
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
