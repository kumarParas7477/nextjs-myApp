/** @format */

import { useRouter } from "next/router";
import { Fragment } from "react";
import EvenList from "../../Components/events/event-list";
import ResultsTitle from "../../Components/events/results-title";
import { getFilteredEvents } from "../../dummy-data";
function FilteredEventsPage() {
    const { query } = useRouter();
    const { slug } = query;
    if (!slug) {
        return <p className='center'>Loading...</p>;
    }
    const numYear = +slug[0];
    const numMonth = +slug[1];
    const invalidFilter =
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12;
    if (invalidFilter) {
        return <p className='center'>Invalid Filter.Please try again.</p>;
    }
    const date = new Date(numYear, numMonth - 1)
    const events = getFilteredEvents({ year: numYear, month: numMonth });
    return (
        <Fragment>
            <ResultsTitle date={date} />
            {events.length ? (
                <EvenList items={events} />
            ) : (
                <h1>No events Found for this filter</h1>
            )}
        </Fragment>
    );
}

export default FilteredEventsPage;
