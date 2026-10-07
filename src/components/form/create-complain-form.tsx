"use client";

import { useForm } from "@tanstack/react-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  DollarSignIcon,
  FileText,
  ImagePlus,
  LocationEdit,
  MapPin,
  TextIcon,
  TicketsPlaneIcon,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useComplain } from "@/hooks/complain.hook";
import { toast } from "../ui/toast";
import { complainSchema } from "@/validation/complain.validation";
import { useRouter } from "next/navigation";
import { Spinner } from "../ui/spinner";

const CreateComplainForm = () => {
  const { mutate: createComplain, isPending } = useComplain();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      location: "",
      price: "",
      image: [] as File[],
    },

    validators: {
      onSubmit: complainSchema,
    },

    onSubmit: async ({ value }) => {
      const complainData = {
        title: value.title,
        description: value.description,
        location: value.location,
        price: Number(value.price),
        imageUrl: "",
        image: value.image[0],
      };

      createComplain(complainData, {
        onSuccess: (res) => {
          toast.add({
            title: "Complain Created Successfull",
            description: "Well Done",
            type: "success",
          });
          router.push("/citizen/all-complain");
        },
        onError: (err) => {
          toast.add({
            title: "Complain failure",
            description:
              err.message || "something went wrong, Please try again",
            type: "error",
          });
        },
      });
    },
  });

  return (
    <div className="min-h-full w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        {/* Card */}
        <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          {/* Card Header */}
          <div className="border-b bg-muted/30 px-6 py-6 sm:px-8">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <MapPin className="size-5 text-primary" />
              </div>

              <div>
                <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Create Complain
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                  Report a problem in your city and help make your community
                  better.
                </p>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="px-6 py-7 sm:px-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
              }}
              noValidate
            >
              <FieldGroup>
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Title */}
                  <form.Field name="title">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;

                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>
                            Complain Title
                          </FieldLabel>

                          <div className="relative">
                            <TicketsPlaneIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                              id={field.name}
                              name={field.name}
                              type="text"
                              placeholder="Title"
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              aria-invalid={isInvalid}
                              className="h-10 pl-9"
                            />
                          </div>

                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      );
                    }}
                  </form.Field>

                  {/* Description */}
                  <form.Field name="description">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;

                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>
                            Description
                          </FieldLabel>

                          <div className="relative">
                            <TextIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                              id={field.name}
                              name={field.name}
                              type="text"
                              placeholder="Description"
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              aria-invalid={isInvalid}
                              className="h-10 pl-9"
                            />
                          </div>

                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      );
                    }}
                  </form.Field>

                  {/* Location */}
                  <form.Field name="location">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;

                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Location</FieldLabel>

                          <div className="relative">
                            <LocationEdit className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                              id={field.name}
                              name={field.name}
                              type="text"
                              placeholder="Location"
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              aria-invalid={isInvalid}
                              className="h-10 pl-9"
                            />
                          </div>

                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      );
                    }}
                  </form.Field>

                  {/* Price */}
                  <form.Field name="price">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;

                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Price</FieldLabel>

                          <div className="relative">
                            <DollarSignIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                              id={field.name}
                              name={field.name}
                              type="number"
                              min="0"
                              placeholder="Price"
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              aria-invalid={isInvalid}
                              className="h-10 pl-9"
                            />
                          </div>

                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      );
                    }}
                  </form.Field>
                </div>

                {/* Upload Section */}
                <form.Field name="image">
                  {(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;

                    const files = field.state.value;

                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel>Complain Image</FieldLabel>

                        <div className="rounded-xl border border-dashed bg-muted/20 p-5">
                          <div className="flex flex-col items-center justify-center gap-3 text-center">
                            <div className="flex size-11 items-center justify-center rounded-full bg-primary/10">
                              <ImagePlus className="size-5 text-primary" />
                            </div>

                            <div>
                              <p className="text-sm font-medium">
                                Upload images
                              </p>
                            </div>

                            <label
                              htmlFor="additional-file-field"
                              className="cursor-pointer"
                            >
                              <Button
                                type="button"
                                variant="outline"
                                className="pointer-events-none"
                              >
                                <ImagePlus className="size-4" />
                                Choose Images
                              </Button>
                            </label>

                            <input
                              id="additional-file-field"
                              type="file"
                              accept="image/*"
                              className="sr-only"
                              name={field.name}
                              //   onChange={(e) => {
                              //     const incoming = Array.from(
                              //       e.target.files ?? [],
                              //     );

                              //     if (incoming.length === 0) {
                              //       return;
                              //     }

                              //     field.handleChange([...files, ...incoming]);

                              //     field.handleBlur();
                              //     e.target.value = "";
                              //   }}
                              onChange={(e) => {
                                const file = e.target.files?.[0];

                                if (!file) {
                                  return;
                                }

                                field.handleChange([file]);

                                field.handleBlur();
                                e.target.value = "";
                              }}
                            />

                            <p className="text-[11px] text-muted-foreground">
                              PNG, JPG, JPEG supported
                            </p>
                          </div>

                          {/* Selected Files */}
                          {files.length > 0 && (
                            <div className="mt-5 space-y-2">
                              <p className="text-xs font-medium">
                                Selected Images
                              </p>

                              {files.map((file, index) => (
                                <div
                                  key={`${file.name}-${index}`}
                                  className="flex items-center justify-between gap-3 rounded-lg border bg-background px-3 py-2"
                                >
                                  <div className="flex min-w-0 items-center gap-2">
                                    <FileText className="size-4 shrink-0 text-primary" />

                                    <span className="truncate text-sm">
                                      {file.name}
                                    </span>
                                  </div>

                                  <button
                                    type="button"
                                    aria-label={`Remove ${file.name}`}
                                    onClick={() => {
                                      field.handleChange(
                                        files.filter((_, i) => i !== index),
                                      );

                                      field.handleBlur();
                                    }}
                                    className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                                  >
                                    <X className="size-4" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                </form.Field>
              </FieldGroup>

              {/* Footer */}
              <div className="mt-8 flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => form.reset()}
                >
                  Reset
                </Button>

                <Button type="submit" size="lg" className="cursor-pointer">
                  {isPending ? (
                    <>
                      <Spinner />
                      Submit Complain...
                    </>
                  ) : (
                    "Submit Complain"
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

export default CreateComplainForm;
