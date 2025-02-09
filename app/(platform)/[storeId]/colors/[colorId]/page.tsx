import { db } from '@/lib/db';

import { ColorForm } from './_components/color-form';

const ColorIdPage = async ({ params }: { params: { colorId: string } }) => {
    const color = await db.color.findUnique({
        where: {
            id: params.colorId,
        },
    });

    return (
        <div className='flex-col'>
            <div className='flex-1 space-y-4'>
                <ColorForm initialData={color} />
            </div>
        </div>
    );
};

export default ColorIdPage;
