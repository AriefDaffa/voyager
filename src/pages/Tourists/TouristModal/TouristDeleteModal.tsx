import type { FC } from 'react';

import Button from '@/components/Button';
import Flexer from '@/components/Flexer';

interface TouristDeleteModalProps {
  name: string;
  email: string;
  isLoading: boolean;
  handleSubmit: () => void;
}

const TouristDeleteModal: FC<TouristDeleteModalProps> = ({
  email,
  name,
  isLoading,
  handleSubmit,
}) => {
  return (
    <div className="px-2 ">
      <div className="py-10">
        <div className="text-center text-sm text-gray-500">{email}</div>
        <div className="text-center font-semibold text-4xl">{name}</div>
      </div>
      <div className="p-2 rounded-lg border border-red-600 text-red-600">
        <div className="text-center font-medium text-sm">
          Are you sure you want to delete this user?
        </div>
        <Flexer className="mt-4 justify-end">
          <Button
            className="w-full"
            type="warning"
            text={isLoading ? 'Loading...' : 'Delete'}
            disabled={isLoading}
            onClick={handleSubmit}
          />
        </Flexer>
      </div>
    </div>
  );
};

export default TouristDeleteModal;
