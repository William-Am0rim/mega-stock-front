import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, InputProps } from "@/components/ui/input";
import React, { useState } from "react";
import { TogglePasswordButton } from "@/components/toggle-password-button";

type RHFTextFieldProps = InputProps & {
  name: string;
  label?: string;
  icon?: React.ReactNode;
  iconTogglePassword?: boolean;
};

export function RHFTextField({
  name,
  label,
  icon,
  iconTogglePassword,
  ...rest
}: RHFTextFieldProps) {
  const { control } = useFormContext();
  const inputPaddingClass = icon ? "pl-10" : "";

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}

          <div className="relative">
            {icon && (
              <div className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground z-10">
                {icon}
              </div>
            )}

            <FormControl>
              <Input
                type={iconTogglePassword ? (showPassword ? "text" : "password") : rest.type}
                autoComplete="off"
                className={inputPaddingClass}
                {...field}
                {...rest}
              />
            </FormControl>

            {iconTogglePassword && (
              <div className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground z-10 cursor-pointer">
                <TogglePasswordButton toggleShowInputValue={handleTogglePassword} />
              </div>
            )}
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
