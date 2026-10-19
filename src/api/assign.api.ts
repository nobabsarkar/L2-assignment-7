import apiClient from "@/lib/apiClient";
import {
  CompleteWorkPayload,
  UpdateAssignStatusPayload,
} from "@/types/assign.type";

export function serviceWorkerAssign(payload: {
  complainId: string;
  serviceWorkerId: string;
}) {
  return apiClient("/assigns/assign-service-worker", {
    method: "POST",
    body: payload,
  });
}

export function getAssignData() {
  return apiClient("/assigns/service-wroker-assign");
}

export function updateAssignStatus(
  assignId: string,
  payload: UpdateAssignStatusPayload,
) {
  return apiClient(`/assigns/${assignId}`, {
    method: "PATCH",
    body: payload,
  });
}

export function completeAssignWork(
  assignId: string,
  payload: CompleteWorkPayload,
) {
  const formData = new FormData();

  formData.append("proofDescription", payload.proofDescription);
  formData.append("proofImage", payload.proofImage);

  return apiClient(`/assigns/${assignId}/complete-work`, {
    method: "PATCH",
    body: formData,
  });
}

export function citizenSeeHerComplain() {
  return apiClient("/assigns/citizen-complain-status");
}
