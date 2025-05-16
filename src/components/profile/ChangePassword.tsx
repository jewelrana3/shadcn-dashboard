import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type FormData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  // Watch newPassword to validate confirmPassword matches
  const newPassword = watch("newPassword");

  return (
    <div className="flex flex-col mt-[6%]">
      <div className="flex items-center justify-center mt-10">
        <div className="w-full lg:w-2/3 rounded-xl pb-5">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label className="text-[#B8B8B8] text-[20px] font-semibold">
                Current password
              </Label>
              <Input
                type="currentPassword"
                placeholder="Enter your password"
                className="h-12 bg-[#212526] placeholder:text-gray-400 rounded-xl border-none mt-1 text-[#B8B8B8]"
                {...register("currentPassword", {
                  required: "Please input your current password!",
                  minLength: {
                    value: 6,
                    message: "Current password must be at least 6 characters",
                  },
                })}
              />
              {errors.currentPassword && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.currentPassword.message}
                </p>
              )}
            </div>

            <div>
              <Label className="text-[#B8B8B8] text-[20px] font-semibold">
                New Password
              </Label>
              <Input
                type="newPassword"
                placeholder="Enter your new password"
                className="h-12 bg-[#212526] placeholder:text-gray-400 rounded-xl border-none mt-1 text-[#B8B8B8]"
                {...register("newPassword", {
                  required: "Please input your new password!",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.newPassword && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            <div>
              <Label className="text-[#B8B8B8] text-[20px] font-semibold">
                Confirm Password
              </Label>
              <Input
                type="confirmPassword"
                placeholder="Confirm your new password"
                className="h-12 bg-[#212526] placeholder:text-gray-400 rounded-xl border-none mt-1 text-[#B8B8B8]"
                {...register("confirmPassword", {
                  required: "Please confirm your new password!",
                  validate: (value) =>
                    value === newPassword || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="bg-gradient-to-r from-yellow-300 to-orange-400 text-black font-semibold text-lg px-6 w-full mt-4 h-10"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
