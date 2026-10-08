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
  LocationEdit,
  TextIcon,
  TicketsPlaneIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useSingleComplain, useUpdateComplain } from "@/hooks/complain.hook";
import { useEffect } from "react";
import { toast } from "../ui/toast";
import { Spinner } from "../ui/spinner";

const UpdateComplainForm = () => {
  const params = useParams();
  const id = params.id as string;
  const { data, isLoading } = useSingleComplain(id);

  const { mutate: updateData, isPending } = useUpdateComplain();

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      location: "",
      price: "",
    },

    onSubmit: async ({ value }) => {
      const data = {
        title: value.title,
        description: value.description,
        location: value.location,
        price: Number(value.price),
      };

      updateData(
        { id, payload: data },
        {
          onSuccess: (res) => {
            toast.add({
              title: "Complain Updated Successfull",
              description: "Well Done",
              type: "success",
            });
          },
          onError: (err) => {
            toast.add({
              title: "Updated failure",
              description:
                err.message || "something went wrong, Please try again",
              type: "error",
            });
          },
        },
      );
    },
  });

  useEffect(() => {
    if (data?.data) {
      form.setFieldValue("title", data.data.title);
      form.setFieldValue("description", data.data.description);
      form.setFieldValue("location", data.data.location);
      form.setFieldValue("price", String(data.data.price));
    }
  }, [data, form]);

  if (isLoading) {
    return (
      <div className="flex min-h-full items-center justify-center">
        <p className="text-sm text-muted-foreground">
          {" "}
          <Spinner /> Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-full w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        {/* Card */}
        <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          {/* Card Header */}
          <div className="border-b bg-muted/30 px-6 py-6 sm:px-8">
            <div className="flex justify-center">
              <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Update Complain
              </h1>
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
              </FieldGroup>

              {/* Footer */}
              <div className="mt-8 flex flex-col-reverse gap-3  pt-6 sm:flex-row sm:justify-end">
                <Button type="submit" size="lg" className="cursor-pointer">
                  {isPending ? (
                    <>
                      <Spinner />
                      Update Complain...
                    </>
                  ) : (
                    " Update Complain"
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

export default UpdateComplainForm;
