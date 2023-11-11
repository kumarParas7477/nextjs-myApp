/** @format */

import { useRouter } from "next/router";
import { Fragment } from "react";
import EvenList from "../../Components/events/event-list";
import ResultsTitle from "../../Components/events/results-title";
import Button from "../../Components/UI/button";
import { getFilteredEvents } from "../../dummy-data";
import ErrorAlert from "./../../Components/UI/error-alert";

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
        return (
            <Fragment>
                <div className='center'>
                    <ErrorAlert>
                        <p className='center'>Invalid Filter.Please try again.</p>
                    </ErrorAlert>

                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        );
    }
    const date = new Date(numYear, numMonth - 1);
    const events = getFilteredEvents({ year: numYear, month: numMonth });
    return (
        <Fragment>
            <ResultsTitle date={date} />
            {events.length ? (
                <EvenList items={events} />
            ) : (
                <Fragment>
                    <ErrorAlert>
                        <p className='center'>No events Found for this filter</p>
                    </ErrorAlert>

                    <div className='center'>
                        <Button link='/events'>Show All Events</Button>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}

export default FilteredEventsPage;
