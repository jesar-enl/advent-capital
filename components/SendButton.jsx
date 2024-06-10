import { EnvelopeOpenIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';

export default function ButtonWithIcon() {
  return (
    <Button
      type="submit"
      className="p-2 rounded-md bg-green-600 hover:bg-green-700 transform transition duration-500 hover:scale-110 text-gray-100 font-bold text-xl"
    >
      <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Send Mail
    </Button>
  );
}
