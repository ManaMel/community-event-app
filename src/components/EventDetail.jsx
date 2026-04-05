import { useParams } from "react-router-dom";
import { events } from "../data/events";

export default function EventDetail() {
  const { id } = useParams();

  const event = events.find((e) => e.id === Number(id));

  if (!event) return <p>イベントが見つかりません</p>;

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>定員: {event.capacity}</p>
    </div>
  );
}