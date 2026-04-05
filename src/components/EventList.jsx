import { Link } from "react-router-dom";
import { events } from "../data/events";

export default function EventList() {
  return (
    <div>
      <h1>イベント一覧</h1>
      {events.map((event) => (
        <div key={event.id}>
          <Link to={`/events/${event.id}`}>
            <h2>{event.title}</h2>
          </Link>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}