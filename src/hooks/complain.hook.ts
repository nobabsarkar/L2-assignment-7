import {
  allComplain,
  createComplain,
  deleteComplain,
  singleComplain,
  updateComplain,
} from "@/api/complain.api";
import { TUpdateComplainPayload } from "@/types/complain.type";
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

export function useUpdateComplain() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: TUpdateComplainPayload;
    }) => updateComplain(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["complain"],
      });
    },
  });
}

export function useDeleteComplain() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: { id: string }) => deleteComplain(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["complain"],
      });
    },
  });
}
