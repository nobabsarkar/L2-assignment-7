"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { Field, FieldLabel } from "../ui/field";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";

const VerifyAccountForm = () => {
  const searchParams = useSearchParams();
  const [otp, setOtp] = useState("");

  const email = searchParams.get("email");

  const handleOTP = () => {
    console.log(otp);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Verify Account</CardTitle>
        <CardDescription>
          Please provide the OTP we send you in your email
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="otp-form"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleOTP();
          }}
        >
          <Field>
            <FieldLabel htmlFor="otp">OTP</FieldLabel>
            <InputOTP
              maxLength={6}
              onChange={(value: string) => setOtp(value)}
              autoComplete="off"
              name="otp"
              id="otp"
              pattern={REGEXP_ONLY_DIGITS}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </Field>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="cursor-pointer">Resend</Button>
        <Button className="cursor-pointer" type="submit" form="otp-form">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VerifyAccountForm;
