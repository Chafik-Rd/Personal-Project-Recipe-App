import { Input } from "./ui/input";

export const InputField = ({
  label,
  placeholder,
  value,
  onChange,
}: Readonly<{
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">{label}</label>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
