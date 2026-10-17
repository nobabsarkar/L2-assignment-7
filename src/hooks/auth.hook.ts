import {
  getMe,
  updateCurrentUserProfile,
  userLogin,
  userLogout,
  userRegistration,
  verifyAccount,
} from "@/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationFn: userLogin,
  });
}

export function useVerifyAccount() {
  return useMutation({
    mutationFn: verifyAccount,
  });
}

export function useRegistration() {
  return useMutation({
    mutationFn: userRegistration,
  });
}

export function useLogout() {
  return useMutation({
    mutationFn: userLogout,
  });
}

export function useGetMe() {
  return useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    retry: false,
  });
}

interface IUpdateProfilePayload {
  name: string;
  email: string;
  file: File | null;
}

export function useUpdateCurrentUserProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    // mutationFn: ({ name, email, file }: IUpdateProfilePayload) => {
    mutationFn: ({ name, email, file }: any) => {
      const formData = new FormData();

      formData.append(
        "data",
        JSON.stringify({
          name,
          email,
        }),
      );

      if (file) {
        formData.append("file", file);
      }

      return updateCurrentUserProfile(formData);
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
}
