"use client";

import { useEffect, useState } from "react";
import { useForm } from "@tanstack/react-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  FileImage,
  ImagePlus,
  MessageSquareText,
  Upload,
  X,
} from "lucide-react";
import Image from "next/image";
import { useAssignData, useCompleteAssignWork } from "@/hooks/assign.hook";
import { toast } from "../ui/toast";

const ProofComplainForm = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { mutate: proofComplain, isPending } = useCompleteAssignWork();
  const { data, isLoading } = useAssignData();

  const assignments = data?.data ?? [];

  const assignment = assignments.find(
    (item: { status: string }) => item.status === "IN_PROGRESS",
  );

  const assignId = assignment?.id;

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const form = useForm({
    defaultValues: {
      proofDescription: "",
      proofImage: null as File | null,
    },

    onSubmit: async ({ value }) => {
      if (!assignId) {
        toast.add({
          title: "Assignment not found",
          description: "No assignment currently in progress was found.",
          type: "error",
        });
        return;
      }

      if (!value.proofImage) {
        toast.add({
          title: "Proof image required",
          description: "Please upload a proof image.",
          type: "error",
        });
        return;
      }

      proofComplain(
        {
          assignId,
          payload: {
            proofDescription: value.proofDescription.trim(),
            proofImage: value.proofImage,
          },
        },
        {
          onSuccess: () => {
            toast.add({
              title: "Proof submitted successfully",
              description: "The completed work proof has been uploaded.",
              type: "success",
            });

            form.reset();
            setPreviewUrl(null);
          },
          onError: (error) => {
            toast.add({
              title: "Proof submission failed",
              description: error.message || "Please try again.",
              type: "error",
            });
          },
        },
      );
    },
  });

  const handleImageChange = (
    file: File | undefined,
    onChange: (file: File | null) => void,
    onBlur: () => void,
  ) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.add({
        title: "Invalid image",
        description: "Please select a valid image file.",
        type: "error",
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.add({
        title: "Image too large",
        description: "Please select an image smaller than 5 MB.",
        type: "error",
      });
      return;
    }

    setPreviewUrl(URL.createObjectURL(file));
    onChange(file);
    onBlur();
  };

  const removeImage = (
    onChange: (file: File | null) => void,
    onBlur: () => void,
  ) => {
    setPreviewUrl(null);
    onChange(null);
    onBlur();
  };

  if (isLoading) {
    return (
      <div className="flex min-h-64 items-center justify-center">
        <Spinner />
        <span className="ml-2 text-sm text-muted-foreground">
          Loading assignments...
        </span>
      </div>
    );
  }

  if (!assignment) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="rounded-2xl border bg-card p-8 text-center">
          <FileImage className="mx-auto mb-4 size-10 text-muted-foreground" />
          <h2 className="text-xl font-semibold">No Active Assignment</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            You need an assignment with IN_PROGRESS status before submitting
            proof of completed work.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-2xl">
        <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          <div className="border-b bg-muted/30 px-5 py-6 sm:px-8">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FileImage className="size-6" />
              </div>

              <div className="min-w-0">
                <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Submit Work Proof
                </h1>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Upload an image and describe the completed work.
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Assignment: {assignId}
                </p>
              </div>
            </div>
          </div>

          <div className="px-5 py-6 sm:px-8 sm:py-8">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                event.stopPropagation();
                form.handleSubmit();
              }}
              noValidate
            >
              <FieldGroup>
                {/* Proof Description */}
                <form.Field
                  name="proofDescription"
                  validators={{
                    onChange: ({ value }) =>
                      !value.trim()
                        ? "Proof description is required"
                        : value.trim().length < 5
                          ? "Please enter at least 10 characters"
                          : undefined,
                  }}
                >
                  {(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;

                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>
                          Proof Description{" "}
                          <span className="text-destructive">*</span>
                        </FieldLabel>

                        <div className="relative">
                          <MessageSquareText className="pointer-events-none absolute left-3 top-3 size-4 text-muted-foreground" />
                          <Textarea
                            id={field.name}
                            name={field.name}
                            placeholder="Describe the completed work and the final result..."
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(event) =>
                              field.handleChange(event.target.value)
                            }
                            aria-invalid={isInvalid}
                            rows={5}
                            maxLength={1000}
                            className="min-h-36 resize-y pl-9"
                          />
                        </div>

                        <div className="flex items-start justify-between gap-3">
                          {isInvalid ? (
                            <FieldError />
                          ) : (
                            <p className="text-xs text-muted-foreground">
                              Explain what you completed.
                            </p>
                          )}

                          <span className="shrink-0 text-xs text-muted-foreground">
                            {field.state.value.length}/1000
                          </span>
                        </div>
                      </Field>
                    );
                  }}
                </form.Field>

                {/* Proof Image */}
                <form.Field
                  name="proofImage"
                  validators={{
                    onChange: ({ value }) =>
                      !value ? "Proof image is required" : undefined,
                  }}
                >
                  {(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    const file = field.state.value;

                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor="proofImage">
                          Proof Image{" "}
                          <span className="text-destructive">*</span>
                        </FieldLabel>

                        <div className="rounded-xl border border-dashed bg-muted/20 p-4 sm:p-6">
                          {previewUrl && file ? (
                            <div className="space-y-4">
                              <div className="relative overflow-hidden rounded-lg border bg-background">
                                <Image
                                  src={previewUrl}
                                  width={800}
                                  height={600}
                                  alt="Proof image preview"
                                  unoptimized
                                  className="max-h-72 w-full object-contain"
                                />

                                <Button
                                  type="button"
                                  variant="destructive"
                                  size="icon"
                                  className="absolute right-3 top-3 size-8 cursor-pointer"
                                  onClick={() =>
                                    removeImage(
                                      field.handleChange,
                                      field.handleBlur,
                                    )
                                  }
                                  aria-label="Remove proof image"
                                >
                                  <X className="size-4" />
                                </Button>
                              </div>

                              <div className="flex items-center gap-3 rounded-lg border bg-background p-3">
                                <FileImage className="size-5 shrink-0 text-primary" />
                                <div className="min-w-0 flex-1">
                                  <p className="truncate text-sm font-medium">
                                    {file.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {(file.size / 1024).toFixed(1)} KB
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <label
                              htmlFor="proofImage"
                              className="flex cursor-pointer flex-col items-center justify-center rounded-lg px-3 py-8 text-center transition-colors hover:bg-primary/5"
                            >
                              <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <ImagePlus className="size-7" />
                              </div>
                              <p className="text-sm font-semibold">
                                Click to upload proof image
                              </p>
                              <p className="mt-1 text-xs text-muted-foreground">
                                PNG, JPG, JPEG, or WEBP · Max 5 MB
                              </p>
                              <span className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                                <Upload className="size-4" />
                                Choose Image
                              </span>
                            </label>
                          )}

                          <Input
                            id="proofImage"
                            name={field.name}
                            type="file"
                            accept="image/png,image/jpeg,image/webp"
                            className="sr-only"
                            aria-invalid={isInvalid}
                            onChange={(event) => {
                              handleImageChange(
                                event.target.files?.[0],
                                field.handleChange,
                                field.handleBlur,
                              );
                              event.target.value = "";
                            }}
                          />
                        </div>

                        {isInvalid && <FieldError />}
                      </Field>
                    );
                  }}
                </form.Field>
              </FieldGroup>

              <div className="mt-8 flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">
                <Button
                  type="button"
                  variant="outline"
                  className="cursor-pointer"
                  disabled={isPending}
                  onClick={() => {
                    form.reset();
                    setPreviewUrl(null);
                  }}
                >
                  Reset Form
                </Button>

                <Button
                  type="submit"
                  size="lg"
                  className="cursor-pointer"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Spinner />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Upload className="size-4" />
                      Submit Proof
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProofComplainForm;
