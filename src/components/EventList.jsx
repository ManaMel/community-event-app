import { Link } from "react-router-dom";
import { useState } from "react";
import { events } from "../data/events";

export default function EventList() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");

  const categories = ["すべて", "祭り", "ボランティア", "スポーツ", "学び", "交流"];

  const filteredEvents =
    selectedCategory === "すべて"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div>
      <h1>イベント一覧</h1>

      {/* カテゴリボタン */}
      <div>
        {categories.map((cat) => (
          <button key={cat} onClick={() => setSelectedCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* イベント一覧 */}
      {filteredEvents.map((event) => (
        <div key={event.id}>
          <Link to={`/events/${event.id}`}>
            <h2>{event.title}</h2>
          </Link>
          <p>{event.description}</p>
          <p>{event.category}</p>
        </div>
      ))}
    </div>
  );
}