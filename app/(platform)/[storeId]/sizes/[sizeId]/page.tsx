import { db } from '@/lib/db';

import { SizeForm } from './_components/size-form';

const SizeIdPage = async ({ params }: { params: { sizeId: string } }) => {
    const size = await db.size.findUnique({
        where: {
            id: params.sizeId,
        },
    });

    return (
        <div className='flex-col'>
            <div className='flex-1 space-y-4'>
                <SizeForm initialData={size} />
            </div>
        </div>
    );
};

export default SizeIdPage;
