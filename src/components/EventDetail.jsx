import { useParams, Link } from "react-router-dom";
import { events } from "../data/events";

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));

  const handleJoin = () => {
    alert("参加を受け付けました！");
  };

  if (!event) return <p>イベントが見つかりません</p>;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <Link to="/" className="text-blue-500 text-sm">
        ← 一覧に戻る
      </Link>

      <h1 className="text-2xl font-bold mt-2">{event.title}</h1>

      <p className="text-gray-600 mt-2">{event.description}</p>

      <p className="text-gray-500 text-sm mt-2">{event.date}</p>
      <p className="text-gray-500 text-sm">{event.location}</p>

      <button
        onClick={handleJoin}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        参加申し込み
      </button>
    </div>
  );
}