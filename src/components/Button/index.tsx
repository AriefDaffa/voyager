import type { FC } from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  text,
  className,
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`p-2 rounded-md font-medium text-white ${className} ${
        disabled
          ? 'bg-gray-300 cursor-default'
          : 'bg-primary hover:bg-primaryDarker'
      } `}
    >
      {text}
    </button>
  );
};

export default Button;
