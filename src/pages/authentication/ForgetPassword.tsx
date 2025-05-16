"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
};

export default function ForgetPassword() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Submitted:", data);
    navigate("/verify-otp");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="bg-[#212526] text-[#B8B8B8] p-7 rounded-md">
        <CardContent className="w-[550px]">
          <div className="text-center space-y-3 my-7">
            <h1 className="text-3xl font-medium mt-2">Login</h1>
            <p className="text-[#929292]">
              Please enter your email and password to continue
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label className="text-[#B8B8B8] text-xl">Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 px-6 mt-2 bg-[#212526] border border-[#b8b8b8] text-[#B8B8B8]"
                {...register("email", { required: "Please enter your email!" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="bg-gradient-to-r from-yellow-300 to-orange-400 text-black font-bold text-lg px-6 w-full mt-4 h-10 cursor-pointer"
            >
              GET OTP
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
