import * as Label from "@radix-ui/react-label";

export const TextInput = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => {
  return (
    <fieldset className="mb-4 mt-6 flex items-center gap-6">
      <Label.Root className="w-24 text-right text-neutral-900" htmlFor={id}>
        {label}
      </Label.Root>
      <input
        type="text"
        className="block w-full flex-1 border-gray-300 leading-none text-neutral-900 placeholder:italic placeholder:text-neutral-400 focus:border-blue-500 focus:ring-blue-500"
        id={id}
        name={id}
        placeholder={placeholder}
      />
    </fieldset>
  );
};
