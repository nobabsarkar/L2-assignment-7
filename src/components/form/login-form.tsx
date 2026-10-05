// "use client";

// import { useForm } from "@tanstack/react-form";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
// import { useState } from "react";
// import { Eye, EyeClosed } from "lucide-react";
// import { LoginSchema } from "@/validation";
// import { useLogin } from "@/hooks/auth.hook";
// import { toast } from "../ui/toast";
// import { useRouter } from "next/navigation";
// import { Spinner } from "../ui/spinner";

// const LoginForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();

//   const { mutate: login, isPending: loginPending } = useLogin();

//   const form = useForm({
//     defaultValues: {
//       email: "superadmin@gmail.com",
//       password: "123456Aa@",
//     },

//     validators: {
//       onSubmit: LoginSchema,
//     },

//     onSubmit: ({ value }) => {
//       const loginData = {
//         email: value.email,
//         password: value.password,
//       };

//       login(loginData, {
//         onSuccess: (res) => {
//           toast.add({
//             title: "Login Success",
//             description: "Welcome back",
//             type: "success",
//           });
//           router.push("/");
//         },

//         onError: (err) => {
//           toast.add({
//             title: "Authorization failure",
//             description:
//               err.message || "something went wrong, Please try again",
//             type: "error",
//           });
//         },
//       });
//     },
//   });

//   return (
//     <div className="flex flex-col gap-5">
//       <div className="flex flex-col items-center gap-2 text-center">
//         <h1 className="text-2xl font-bold tracking-tight">Login Account</h1>
//       </div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           form.handleSubmit();
//         }}
//       >
//         <FieldGroup>
//           <form.Field name="email">
//             {(field) => {
//               const isInvalid =
//                 field.state.meta.isTouched && !field.state.meta.isValid;

//               return (
//                 <Field data-invalid={isInvalid}>
//                   <FieldLabel htmlFor={field.name}>Email</FieldLabel>
//                   <Input
//                     id={field.name}
//                     name={field.name}
//                     onChange={(e) => field.handleChange(e.target.value)}
//                     onBlur={field.handleBlur}
//                     value={field.state.value}
//                     autoComplete="off"
//                     aria-invalid={isInvalid}
//                   />
//                   {isInvalid && <FieldError errors={field.state.meta.errors} />}
//                 </Field>
//               );
//             }}
//           </form.Field>

//           <form.Field name="password">
//             {(field) => {
//               const isInvalid =
//                 field.state.meta.isTouched && !field.state.meta.isValid;

//               return (
//                 <Field data-invalid={isInvalid}>
//                   <FieldLabel htmlFor={field.name}>Password</FieldLabel>
//                   <div className="relative">
//                     <Input
//                       id={field.name}
//                       name={field.name}
//                       type={showPassword ? "text" : "password"}
//                       onChange={(e) => field.handleChange(e.target.value)}
//                       onBlur={field.handleBlur}
//                       value={field.state.value}
//                       autoComplete="off"
//                       aria-invalid={isInvalid}
//                     />
//                     <button
//                       className="absolute right-3 top-1/2 -translate-y-1/2"
//                       onClick={() => setShowPassword((prev) => !prev)}
//                       type="button"
//                     >
//                       {showPassword ? (
//                         <EyeClosed className="size-5 cursor-pointer" />
//                       ) : (
//                         <Eye className="size-5 cursor-pointer" />
//                       )}
//                     </button>
//                   </div>

//                   {isInvalid && <FieldError errors={field.state.meta.errors} />}
//                 </Field>
//               );
//             }}
//           </form.Field>
//           <Button
//             disabled={loginPending}
//             className="cursor-pointer"
//             type="submit"
//           >
//             {loginPending ? (
//               <>
//                 <Spinner />
//                 Login...
//               </>
//             ) : (
//               "Login"
//             )}
//           </Button>
//         </FieldGroup>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

"use client";

import { useForm } from "@tanstack/react-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { useState } from "react";
import { Eye, EyeClosed, ShieldCheck, User, Wrench } from "lucide-react";
import { LoginSchema } from "@/validation";
import { useLogin } from "@/hooks/auth.hook";
import { toast } from "../ui/toast";
import { useRouter } from "next/navigation";
import { Spinner } from "../ui/spinner";

const demoAccounts = [
  {
    role: "Admin",
    email: "superadmin@gmail.com",
    password: "123456Aa@",
    icon: ShieldCheck,
  },
  {
    role: "CITIZEN",
    email: "nobabsarkar2020@gmail.com",
    password: "123456Aa@",
    icon: User,
  },
  {
    role: "SERVICE_WORKER",
    email: "nobabsarkar2016@gmail.com",
    password: "123456Aa@",
    icon: Wrench,
  },
];

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { mutate: login, isPending: loginPending } = useLogin();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    validators: {
      onSubmit: LoginSchema,
    },

    onSubmit: ({ value }) => {
      const loginData = {
        email: value.email,
        password: value.password,
      };

      login(loginData, {
        onSuccess: () => {
          toast.add({
            title: "Login Success",
            description: "Welcome back",
            type: "success",
          });

          router.push("/");
        },

        onError: (err) => {
          toast.add({
            title: "Authorization failure",
            description:
              err.message || "Something went wrong, Please try again",
            type: "error",
          });
        },
      });
    },
  });

  const handleDemoLogin = (email: string, password: string) => {
    form.setFieldValue("email", email);
    form.setFieldValue("password", password);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Login Heading */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">
          Login to your account
        </h1>

        <p className="text-muted-foreground text-sm">
          Enter your email and password to continue
        </p>
      </div>

      {/* Login Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup>
          {/* Email */}
          <form.Field name="email">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>

                  <Input
                    id={field.name}
                    name={field.name}
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    value={field.state.value}
                    autoComplete="email"
                    aria-invalid={isInvalid}
                  />

                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>

          {/* Password */}
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
                      placeholder="Enter your password"
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      value={field.state.value}
                      autoComplete="current-password"
                      aria-invalid={isInvalid}
                    />

                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword((prev) => !prev)}
                      type="button"
                    >
                      {showPassword ? (
                        <EyeClosed className="size-5 cursor-pointer" />
                      ) : (
                        <Eye className="size-5 cursor-pointer" />
                      )}
                    </button>
                  </div>

                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>

          {/* Login Button */}
          <Button
            disabled={loginPending}
            className="w-full cursor-pointer"
            type="submit"
          >
            {loginPending ? (
              <>
                <Spinner />
                Login...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </FieldGroup>
      </form>

      {/* Divider */}
      <div className="relative flex items-center">
        <div className="grow border-t" />

        <span className="bg-background px-3 text-xs text-muted-foreground">
          OR
        </span>

        <div className="grow border-t" />
      </div>

      {/* Demo Login */}
      <div className="flex flex-col gap-3">
        <div className="text-center">
          <h2 className="font-semibold">Quick Demo Login</h2>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {demoAccounts.map((account) => {
            const Icon = account.icon;

            return (
              <button
                key={account.role}
                type="button"
                onClick={() => handleDemoLogin(account.email, account.password)}
                className="group rounded-xl border bg-background p-4 text-left transition-all hover:border-primary hover:bg-muted/50 hover:shadow-md"
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>

                  <div>
                    <p className="font-semibold text-sm">{account.role}</p>
                  </div>

                  <span className="mt-1 rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Demo Login
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
