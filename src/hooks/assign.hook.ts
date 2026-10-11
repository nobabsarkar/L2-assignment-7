import { getAssignData, serviceWorkerAssign } from "@/api/assign.api";
import { useMutation, useQuery } from "@tanstack/react-query";

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
