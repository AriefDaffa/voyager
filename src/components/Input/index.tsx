import type { ChangeEvent, FC } from 'react';

interface InputProps {
  label: string;
  inputType: string;
  placeholder: string;
  id: string;
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: FC<InputProps> = ({
  id,
  inputType,
  label,
  placeholder,
  value,
  name,
  onChange,
  className = '',
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
        id={id}
        name={name}
        type={inputType}
        value={value}
        onChange={onChange}
        className="border text-sm rounded-lg block w-full p-2.5 outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
