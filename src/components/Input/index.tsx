import type { FC } from 'react';

interface InputProps {
  label: string;
  inputType: string;
  placeholder: string;
  id: string;
  className?: string;
}

const Input: FC<InputProps> = ({
  id,
  inputType,
  label,
  placeholder,
  className,
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        type={inputType}
        id={id}
        className="border text-sm rounded-lg block w-full p-2.5 outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
