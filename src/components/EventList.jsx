import { Link } from "react-router-dom";
import { useState } from "react";
import { events } from "../data/events";

export default function EventList() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [favorites, setFavorites] = useState([]);
  const [viewMode, setViewMode] = useState("all");

  const categories = ["すべて", "祭り", "ボランティア", "スポーツ", "学び", "交流"];

  const filteredEvents =
    selectedCategory === "すべて"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  const toggleFavorite = (eventId) => {
    if (favorites.includes(eventId)) {
      setFavorites(favorites.filter((id) => id !== eventId));
    } else {
      setFavorites([...favorites, eventId]);
    }
  };

  const displayedEvents =
    viewMode === "favorites"
      ? filteredEvents.filter((event) => favorites.includes(event.id))
      : filteredEvents;

  return (
    <div>
      <h1>イベント一覧</h1>

      {/* タブ */}
      <div>
        <button onClick={() => setViewMode("all")}>すべて</button>
        <button onClick={() => setViewMode("favorites")}>お気に入り</button>
      </div>

      {/* カテゴリ */}
      <div>
        {categories.map((cat) => (
          <button key={cat} onClick={() => setSelectedCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* イベント一覧 */}
      {displayedEvents.map((event) => (
        <div key={event.id}>
          <Link to={`/events/${event.id}`}>
            <h2>{event.title}</h2>
          </Link>

          <p>{event.description}</p>
          <p>{event.category}</p>

          <button onClick={() => toggleFavorite(event.id)}>
            {favorites.includes(event.id)
              ? "★ お気に入り済み"
              : "☆ お気に入り"}
          </button>
        </div>
      ))}
    </div>
  );
}