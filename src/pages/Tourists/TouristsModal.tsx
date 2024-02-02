import type { ChangeEvent, FC, SyntheticEvent } from 'react';

import Flexer from '@/components/Flexer';
import Button from '@/components/Button';
import Input from '@/components/Input';

interface TouristsModalProps {
  name: string;
  email: string;
  location: string;
  isLoading: boolean;
  editMode: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: SyntheticEvent) => void;
}

const TouristsModal: FC<TouristsModalProps> = ({
  name,
  email,
  location,
  isLoading,
  editMode,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="px-2">
      <div className="text-center font-semibold text-xl">
        {editMode ? `Edit existing Tourist` : `Add new Tourist`}
      </div>
      <Input
        id="name"
        name="name"
        inputType="text"
        label="Name"
        placeholder="Tourist Name"
        value={name}
        onChange={handleChange}
      />
      <Input
        id="email"
        name="email"
        inputType="email"
        label="Email"
        placeholder="Tourist Email"
        className="mt-2"
        value={email}
        onChange={handleChange}
      />
      <Input
        id="location"
        name="location"
        inputType="text"
        label="Location"
        placeholder="Tourist location"
        className="mt-2"
        value={location}
        onChange={handleChange}
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
