import apiClient from "@/lib/apiClient";
import { UserRole } from "@/types/user.type";

export function allUsers() {
  return apiClient("/users");
}

export function updateUserRole(id: string, role: UserRole) {
  return apiClient(`/users/${id}`, {
    method: "PATCH",
    body: {
      role,
    },
  });
}
