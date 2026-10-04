"use client";

import Link from "next/link";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { useForm } from "@tanstack/react-form";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRegistration } from "@/hooks/auth.hook";
import { toast } from "../ui/toast";
import { RegistrationSchema } from "@/validation";

const RegisterForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const defaultValues = {
    name: "Nobab",
    email: "nobab@gmail.com",
    password: "123456Aa@",
  };

  const { mutate: registration } = useRegistration();

  const form = useForm({
    defaultValues,

    validators: {
      onSubmit: RegistrationSchema,
    },

    onSubmit: async ({ value }) => {
      const registrationData = {
        name: value.name,
        email: value.email,
        password: value.password,
      };

      registration(registrationData, {
        onSuccess: (res) => {
          if (!res.success) {
            toast.add({
              title: "Server Failure",
              description: "something went wrong, Please try again",
              type: "error",
            });
          }

          toast.add({
            title: "Registration successfull",
            description: "Please verify your account",
            type: "success",
          });

          const params = new URLSearchParams({ email: registrationData.email });
          router.push(`/register/verify-account?${params.toString()}`);
        },
        onError: (err) => {
          toast.add({
            title: "Authorization failure",
            description:
              err.message || "something went wrong, Please try again",
            type: "error",
          });
        },
      });
    },
  });

  return (
    <div className="flex flex-col gap-6 rounded-xl border bg-card p-6 shadow-lg">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Create account</h1>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <FieldGroup>
          <form.Field name="name">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>

                  <div className="relative">
                    <Input
                      id={field.name}
                      name={field.name}
                      type="text"
                      placeholder="Name"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      autoComplete="name"
                    />
                  </div>

                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>

          <form.Field name="email">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>

                  <div className="relative">
                    <Input
                      id={field.name}
                      name={field.name}
                      type="email"
                      placeholder="Email"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      autoComplete="off"
                    />
                  </div>

                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>

          <form.Field name="password">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>

                  <div className="relative">
                    <Input
                      id={field.name}
                      name={field.name}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      className="pr-10"
                      autoComplete="off"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="size-4 cursor-pointer" />
                      ) : (
                        <Eye className="size-4 cursor-pointer" />
                      )}
                    </button>
                  </div>

                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>

          <Button className="cursor-pointer" type="submit">
            Register
          </Button>
        </FieldGroup>
      </form>

      <div className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className=" font-medium text-primary hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
