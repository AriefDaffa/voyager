import type { FC } from 'react';

import Flexer from '@/components/Flexer';
import Button from '@/components/Button';

interface TouristsModalProps {}

const TouristsModal: FC<TouristsModalProps> = () => {
  return (
    <div className="px-2">
      <div className="text-center font-semibold text-xl">Add new Tourist</div>
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className=" border  text-sm rounded-lg block w-full p-2.5 outline-none"
          placeholder="John Doe"
        />
      </div>
      <div className="mt-2">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className=" border  text-sm rounded-lg block w-full p-2.5 outline-none"
          placeholder="example@mail.com"
        />
      </div>
      <div className="mt-2">
        <label
          htmlFor="location"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          className=" border  text-sm rounded-lg block w-full p-2.5 outline-none"
          placeholder="Jakarta"
        />
      </div>
      <Flexer className="mt-4 justify-end">
        <Button text="Submit" />
      </Flexer>
    </div>
  );
};

export default TouristsModal;
