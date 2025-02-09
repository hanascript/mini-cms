import { db } from '@/lib/db';
import { BillboardForm } from './_components/billboard-form';

const BillboardIdPage = async ({ params }: { params: { storeId: string; billboard: string; billboardId: string } }) => {
  const billboard = await db.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4'>
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};
export default BillboardIdPage;
