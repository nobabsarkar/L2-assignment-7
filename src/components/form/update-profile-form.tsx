"use client";

import { useEffect, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, ImagePlus, X } from "lucide-react";
import { Field, FieldLabel } from "@/components/ui/field";
import { useGetMe, useUpdateCurrentUserProfile } from "@/hooks/auth.hook";
import Image from "next/image";
import { toast } from "../ui/toast";
import { Spinner } from "../ui/spinner";

const UpdateProfileForm = () => {
  const { data, isLoading } = useGetMe();

  const { mutate: updateProfile, isPending } = useUpdateCurrentUserProfile();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
    },

    onSubmit: async ({ value }) => {
      const payload = {
        name: value?.name,
        email: value?.email,
        file: selectedFile,
      };

      console.log(payload);

      updateProfile(payload, {
        onSuccess: () => {
          toast.add({
            title: "Update Successfull",
            description: "Profile Updated Successfull",
            type: "success",
          });
        },
        onError: (error) => {
          toast.add({
            title: "Update Failed",
            description: error?.message || "Failed to update your profile",
            type: "error",
          });
        },
      });
    },
  });

  useEffect(() => {
    const user = data?.data;

    if (!user) return;

    form.reset({
      name: user.name ?? "",
      email: user.email ?? "",
    });

    setPreviewUrl(user.imageUrl ?? "");
    setSelectedFile(null);
  }, [data, form]);

  useEffect(() => {
    if (!selectedFile) return;

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    if (data?.data) {
      form.setFieldValue("name", data?.data?.name);
      form.setFieldValue("email", data?.data?.email);
    }
  }, [data, form]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center gap-2 text-muted-foreground">
        <Spinner className="size-5" />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="px-4 py-12 sm:py-20">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="mx-auto w-full max-w-lg space-y-5 rounded-xl border bg-card p-6"
      >
        <div>
          <h2 className="text-2xl font-bold">Update Profile</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Update your personal information.
          </p>
        </div>

        <form.Field name="name">
          {(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>Name</Label>
              <Input
                id={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
          )}
        </form.Field>

        <form.Field name="email">
          {(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>Email</Label>
              <Input
                id={field.name}
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
          )}
        </form.Field>

        <Field>
          <FieldLabel>Profile Picture</FieldLabel>

          <div className="rounded-xl border border-dashed bg-muted/20 p-5">
            <div className="flex flex-col items-center gap-3 text-center">
              {previewUrl ? (
                <Image
                  src={previewUrl}
                  height={200}
                  width={200}
                  alt="Profile preview"
                  className="size-24 rounded-full border object-cover"
                />
              ) : (
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <ImagePlus className="size-6 text-primary" />
                </div>
              )}

              <p className="text-sm text-muted-foreground">
                Choose a new profile image (PNG or JPG).
              </p>

              <label htmlFor="profile-picture">
                <Button
                  type="button"
                  variant="outline"
                  className="cursor-pointer"
                  onClick={() =>
                    document.getElementById("profile-picture")?.click()
                  }
                >
                  <ImagePlus className="size-4" />
                  Choose Image
                </Button>
              </label>

              <input
                id="profile-picture"
                type="file"
                accept="image/png,image/jpeg"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (!file) return;

                  if (!["image/png", "image/jpeg"].includes(file.type)) {
                    alert("Please select a PNG or JPG image.");
                    e.target.value = "";
                    return;
                  }

                  if (file.size > 5 * 1024 * 1024) {
                    alert("Image size must be less than 5 MB.");
                    e.target.value = "";
                    return;
                  }

                  setSelectedFile(file);
                  e.target.value = "";
                }}
              />

              {selectedFile && (
                <div className="flex w-full items-center justify-between gap-3 rounded-lg border bg-background px-3 py-2">
                  <div className="flex min-w-0 items-center gap-2">
                    <FileText className="size-4 shrink-0 text-primary" />
                    <span className="truncate text-sm">
                      {selectedFile.name}
                    </span>
                  </div>

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="Remove selected image"
                    onClick={() => setSelectedFile(null)}
                  >
                    <X className="size-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Field>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full cursor-pointer"
        >
          {isPending ? (
            <>
              <Spinner className="mr-2 size-4 animate-spin" />
              Updating Profile...
            </>
          ) : (
            "Update Profile"
          )}
        </Button>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
