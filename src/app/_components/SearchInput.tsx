import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

type SearchInputProps = {
  value: string;
  handleChange: (_event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({ value, handleChange }: SearchInputProps) => {
  return (
    <Input
      type="text"
      value={value}
      placeholder="Search..."
      onChange={handleChange}
      className="h-10 p-4"
    />
  );
};
