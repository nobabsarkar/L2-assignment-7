import {
  citizenSeeHerComplain,
  completeAssignWork,
  getAssignData,
  serviceWorkerAssign,
  updateAssignStatus,
} from "@/api/assign.api";
import {
  CompleteWorkPayload,
  UpdateAssignStatusPayload,
} from "@/types/assign.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useServiceWorkerAssign() {
  return useMutation({
    mutationFn: serviceWorkerAssign,
  });
}

export function useAssignData() {
  return useQuery({
    queryKey: ["assigns"],
    queryFn: getAssignData,
    retry: false,
  });
}

export function useUpdateAssignStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      assignId,
      payload,
    }: {
      assignId: string;
      payload: UpdateAssignStatusPayload;
    }) => updateAssignStatus(assignId, payload),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["assign"],
      });
    },
  });
}

export function useCompleteAssignWork() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      assignId,
      payload,
    }: {
      assignId: string;
      payload: CompleteWorkPayload;
    }) => completeAssignWork(assignId, payload),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["assign"],
      });
    },
  });
}

export function useCitizenSeeHerComplain() {
  return useQuery({
    queryKey: ["assigns"],
    queryFn: citizenSeeHerComplain,
    retry: false,
  });
}
