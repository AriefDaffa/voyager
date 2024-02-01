import type { FC } from 'react';

import Flexer from '@/components/Flexer';
import Button from '@/components/Button';
import Input from '@/components/Input';

interface TouristsModalProps {}

const TouristsModal: FC<TouristsModalProps> = () => {
  return (
    <div className="px-2">
      <div className="text-center font-semibold text-xl">Add new Tourist</div>
      <Input id="name" inputType="text" label="Name" placeholder="John Doe" />
      <Input
        id="email"
        inputType="email"
        label="Email"
        placeholder="example@mail.com"
        className="mt-2"
      />
      <Input
        id="location"
        inputType="text"
        label="Location"
        placeholder="Jakarta"
        className="mt-2"
      />
      <Flexer className="mt-4 justify-end">
        <Button text="Submit" />
      </Flexer>
    </div>
  );
};

export default TouristsModal;
