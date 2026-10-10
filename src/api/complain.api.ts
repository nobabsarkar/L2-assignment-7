import apiClient from "@/lib/apiClient";
import {
  ComplainPayload,
  TCreatePaymentPayload,
  TUpdateComplainPayload,
} from "@/types/complain.type";

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

export function updateComplain(id: string, payload: TUpdateComplainPayload) {
  return apiClient(`/complains/${id}`, {
    method: "PATCH",
    body: payload,
  });
}

export function deleteComplain(id: string) {
  return apiClient(`/complains/${id}`, {
    method: "DELETE",
  });
}

export function adminGetAllComplain() {
  return apiClient("/complains/admin-get-all-complains");
}

export function adminGetSingleData(id: string) {
  return apiClient(`/complains/${id}`);
}

export function adminUpdateStatus(id: string, status: string) {
  return apiClient(`/complains/admin-update-status/${id}`, {
    method: "PATCH",
    body: {
      status,
    },
  });
}

export function createPayment(payload: TCreatePaymentPayload) {
  return apiClient("/payments/create-payment", {
    method: "POST",
    body: payload,
  });
}

export function getUserPayments() {
  return apiClient("/payments/user-payments", {
    method: "GET",
  });
}
