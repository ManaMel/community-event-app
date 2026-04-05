import { useParams } from "react-router-dom";
import { events } from "../data/events";
import { Link } from "react-router-dom";

export default function EventDetail() {
  const { id } = useParams();

  const event = events.find((e) => e.id === Number(id));

  const handleJoin = () => {
    alert("参加を受け付けました！");
  };


  if (!event) return <p>イベントが見つかりません</p>;

  return (
    <div>
      <Link to="/">← 一覧に戻る</Link>

      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>定員: {event.capacity}</p>

      <button onClick={handleJoin}>参加申し込み</button>
    </div>
  );
}