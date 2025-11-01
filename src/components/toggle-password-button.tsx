import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type TogglePasswordProps = {
  toggleShowInputValue: (show: boolean) => void;
};

export const TogglePasswordButton = ({ toggleShowInputValue }: TogglePasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    const newValue = !showPassword;
    setShowPassword(newValue);
    toggleShowInputValue(newValue);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="focus:outline-none text-muted-foreground hover:text-foreground transition"
    >
      {showPassword ? <EyeOff className="w-5 h-5"/> : <Eye className="w-5 h-5"/>}
    </button>
  );
};
