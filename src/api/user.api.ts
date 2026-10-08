import apiClient from "@/lib/apiClient";

export function allUsers() {
  return apiClient("/users");
}

export function updateUserStatus(id: string, status: "ACTIVE" | "BLOCKED") {
  return apiClient(`/users/${id}`, {
    method: "PATCH",
    body: {
      status,
    },
  });
}
