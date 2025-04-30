"use client";

import { useState } from "react";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const PasswordInput = ({ state, defaultValue }: { state?: any; defaultValue: string | undefined }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="grid gap-2">
      <Label htmlFor="password" className="flex justify-between">
        Password
        {state?.errors?.password && (
          <p className="text-right text-xs text-red-400 font-normal">
            {state.errors.password}
          </p>
        )}
      </Label>

      <div className="relative">
        <Input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          required
          className="pr-10"
          defaultValue={defaultValue}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
