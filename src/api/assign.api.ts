import apiClient from "@/lib/apiClient";

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
