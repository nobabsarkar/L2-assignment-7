import { serviceWorkerAssign } from "@/api/assign.api";
import { useMutation } from "@tanstack/react-query";

export function useServiceWorkerAssign() {
  return useMutation({
    mutationFn: serviceWorkerAssign,
  });
}
