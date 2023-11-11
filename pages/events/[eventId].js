import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "./../../Components/event-detail/event-summary"
import EventLogistics from "./../../Components/event-detail/event-logistics"
import EventContent from "./../../Components/event-detail/event-content"
function EventDetailPage() {
    const { query } = useRouter();
    const { eventId } = query;
    const event = getEventById(eventId);
    const { title, description } = event || {};
    if (!event) {
        return <p> No Event Found</p>;
    }
    return (
        <Fragment>
            <EventSummary title={title} />
            <EventLogistics event={event} />
            <EventContent>
                <p>{description}</p>
            </EventContent>
        </Fragment>
    );
}

export default EventDetailPage;
