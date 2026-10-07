import apiClient from "@/lib/apiClient";
import { ComplainPayload } from "@/types/complain.type";

export function createComplain(payload: ComplainPayload) {
  const formData = new FormData();

  formData.append("data", JSON.stringify(payload));
  if (payload.image) {
    formData.append("image", payload.image);
  }

  return apiClient("/complains/create-complain", {
    method: "POST",
    body: formData,
  });
}

export function allComplain() {
  return apiClient("/complains/my-complains");
}

export function singleComplain(id: string) {
  return apiClient(`/complains/${id}`);
}
