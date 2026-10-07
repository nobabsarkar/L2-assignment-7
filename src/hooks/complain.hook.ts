import { createComplain } from "@/api/complain.api";
import { useMutation } from "@tanstack/react-query";

export function useComplain() {
  return useMutation({
    mutationFn: createComplain,
  });
}
