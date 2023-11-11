import EventItem from "./event-item";
import classes from "./event-list.module.css";
function EvenList(props) {
    const { items } = props;
    return (
        <ul className={classes.list}>
            {items.map((event, index) => (
                <EventItem key={event.id} event={event} />
            ))}
        </ul>
    );
}

export default EvenList;
