import type { FC } from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ text, onClick = () => {}, className }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`bg-primary p-2 rounded-md font-bold text-white ${className} hover:bg-primaryDarker`}
    >
      {text}
    </button>
  );
};

export default Button;
