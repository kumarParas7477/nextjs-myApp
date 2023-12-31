import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../Components/events/event-list";
import EventsSearch from "../../Components/events/events-search";
import { getAllEvents, getFilteredEvents } from "../../dummy-data";
function AllEventsPage() {
    const router = useRouter()
    const events = getAllEvents();
    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }
    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </Fragment>
    );
}

export default AllEventsPage;
