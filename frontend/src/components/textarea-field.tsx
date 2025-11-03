import { Textarea } from "./ui/textarea";

export const TextareaField = ({
  label,
  placeholder,
  rows,
  value,
  onChange,
}: Readonly<{
  label: string;
  placeholder?: string;
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}>) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">{label}</label>
      <Textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows ?? 6}
        required
      />
    </div>
  );
};
