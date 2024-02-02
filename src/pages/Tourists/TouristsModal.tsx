import type { ChangeEvent, FC, SyntheticEvent } from 'react';

import Flexer from '@/components/Flexer';
import Button from '@/components/Button';
import Input from '@/components/Input';

interface TouristsModalProps {
  email: string;
  location: string;
  name: string;
  isLoading: boolean;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onLocationChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: SyntheticEvent) => void;
}

const TouristsModal: FC<TouristsModalProps> = ({
  email,
  handleSubmit,
  isLoading,
  location,
  name,
  onEmailChange,
  onLocationChange,
  onNameChange,
}) => {
  return (
    <form onSubmit={handleSubmit} className="px-2">
      <div className="text-center font-semibold text-xl">Add new Tourist</div>
      <Input
        id="name"
        inputType="text"
        label="Name"
        placeholder="John Doe"
        value={name}
        onChange={onNameChange}
      />
      <Input
        id="email"
        inputType="email"
        label="Email"
        placeholder="example@mail.com"
        className="mt-2"
        value={email}
        onChange={onEmailChange}
      />
      <Input
        id="location"
        inputType="text"
        label="Location"
        placeholder="Jakarta"
        className="mt-2"
        value={location}
        onChange={onLocationChange}
      />
      <Flexer className="mt-4 justify-end">
        <Button
          text={isLoading ? 'Loading...' : 'Submit'}
          disabled={isLoading}
        />
      </Flexer>
    </form>
  );
};

export default TouristsModal;
