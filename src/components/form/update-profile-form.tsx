"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, ImagePlus, X } from "lucide-react";
import { FieldLabel } from "../ui/field";
import { useForm } from "@tanstack/react-form";
import { Field } from "@/components/ui/field";
import { ProfileValues } from "@/types/updateUser.type";

const UpdateProfileForm = ({
  initialValues,
}: {
  initialValues: ProfileValues;
}) => {
  const form = useForm({
    defaultValues: {
      name: initialValues?.name ?? "",
      email: initialValues?.email ?? "",
      imageUrl: initialValues?.imageUrl || null,
    },

    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return (
    <div className="py-20">
      <form
        onSubmit={(e) => {
          e.preventDefault();
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

        <form.Field name="imageUrl">
          {(field) => {
            const file = field.state.value;

            return (
              <Field>
                <FieldLabel>Profile Picture</FieldLabel>

                <div className="rounded-xl border border-dashed bg-muted/20 p-5">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                      <ImagePlus className="size-6 text-primary" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">Upload</p>
                    </div>

                    <label htmlFor="profile-picture" className="cursor-pointer">
                      <Button
                        type="button"
                        variant="outline"
                        className="pointer-events-none"
                      >
                        <ImagePlus className="size-4" />
                        Choose Image
                      </Button>
                    </label>

                    <input
                      id="profile-picture"
                      type="file"
                      accept="image/png,image/jpeg,image/jpg"
                      className="sr-only"
                      onChange={(e) => {
                        const selectedFile = e.target.files?.[0];

                        if (!selectedFile) return;

                        field.handleChange(selectedFile);
                        field.handleBlur();
                        e.target.value = "";
                      }}
                    />
                  </div>

                  {file && (
                    <div className="mt-5 flex items-center justify-between gap-3 rounded-lg border bg-background px-3 py-2">
                      <div className="flex min-w-0 items-center gap-2">
                        <FileText className="size-4 shrink-0 text-primary" />

                        <span className="truncate text-sm">{file.name}</span>
                      </div>

                      <button
                        type="button"
                        aria-label="Remove profile picture"
                        onClick={() => field.handleChange(null)}
                        className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  )}
                </div>
              </Field>
            );
          }}
        </form.Field>

        <Button type="submit" className="w-full cursor-pointer">
          Update Profile
        </Button>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
