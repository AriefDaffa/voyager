import type { FC } from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  disabled?: boolean;
  type?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  text,
  className,
  disabled = false,
  type = 'primary',
  onClick = () => {},
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`p-2 rounded-md font-medium text-white ${className} ${
        disabled
          ? 'bg-gray-300 cursor-default'
          : type === 'primary'
          ? 'bg-primary hover:bg-primaryDarker'
          : 'bg-red-600'
      } `}
    >
      {text}
    </button>
  );
};

export default Button;
