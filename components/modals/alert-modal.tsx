'use client';

import { useHasMounted } from '@/hooks/use-has-mounted';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
};

export const AlertModal = ({ isOpen, loading, onClose, onConfirm }: Props) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return (
    <Modal
      title='Are you sure you wish to delete?'
      description='This action cannot be undone'
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
        <Button
          disabled={loading}
          variant='outline'
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          disabled={loading}
          variant='destructive'
          onClick={onConfirm}
        >
          {loading ? <Loader2 className='animate-spin' /> : 'Confirm'}
        </Button>
      </div>
    </Modal>
  );
};
