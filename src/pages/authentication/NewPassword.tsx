"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  type FormData = {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };

  const onSubmit = (data: FormData) => {
    console.log("Submitted:", data);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="bg-[#212526] text-[#B8B8B8] p-7 rounded-md">
        <CardContent className="w-[550px]">
          <div className="text-center space-y-3 my-7">
            <h1 className="text-3xl font-medium mt-2">Reset Password</h1>
            <p className="text-[#929292]">
              Please enter your email and password to continue
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label className="text-[#B8B8B8] text-xl">Current Password</Label>
              <Input
                type="password"
                placeholder="Enter current password"
                className="h-12 px-6 mt-2 bg-[#212526] border border-[#b8b8b8] text-[#B8B8B8]"
                {...register("currentPassword", { required: true })}
              />
              {errors.currentPassword && (
                <p className="text-red-500 text-sm mt-1">
                  Please input current password!
                </p>
              )}
            </div>

            <div>
              <Label className="text-[#B8B8B8] text-xl">New Password</Label>
              <Input
                type="password"
                placeholder="Enter new password"
                className="h-12 px-6 mt-2 bg-[#212526] border border-[#b8b8b8] text-[#B8B8B8]"
                {...register("newPassword", { required: true })}
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm mt-1">
                  Please input new password!
                </p>
              )}
            </div>

            <div>
              <Label className="text-[#B8B8B8] text-xl">Confirm Password</Label>
              <Input
                type="password"
                placeholder="Enter confirm password"
                className="h-12 px-6 mt-2 bg-[#212526] border border-[#b8b8b8] text-[#B8B8B8]"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  Please input confirm password!
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="bg-gradient-to-r from-yellow-300 to-orange-400 text-black font-bold text-lg px-6  w-full mt-4 h-10 cursor-pointer"
            >
              Confirm
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
