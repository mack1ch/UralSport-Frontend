import { ViewEvent } from '@/widgets/viewEvent';

export default function DynamicEvent({ params }: { params: { id: number } }) {
    return (
        <>
            <ViewEvent id={params.id} />
        </>
    );
}
