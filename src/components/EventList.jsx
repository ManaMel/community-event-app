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
      <h1 className="text-2xl font-bold mb-4">イベント一覧</h1>

      {/* タブ */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setViewMode("all")}
          className={`px-4 py-2 rounded-full text-sm ${
            viewMode === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          すべて
        </button>

        <button
          onClick={() => setViewMode("favorites")}
          className={`px-4 py-2 rounded-full text-sm ${
            viewMode === "favorites"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          お気に入り
        </button>
      </div>

      {/* カテゴリ */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCategory === cat
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* イベント一覧 */}
      <div className="grid gap-4 sm:grid-cols-2">
        {displayedEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-sm p-4 transition hover:shadow-lg hover:-translate-y-1"
          >
            <Link to={`/events/${event.id}`}>
              <h2 className="text-lg font-semibold text-gray-800">
                {event.title}
              </h2>
            </Link>

            <p className="text-gray-600 text-sm mt-1">
              {event.description}
            </p>

            <p className="text-gray-500 text-xs mt-1">
              {event.category}
            </p>

            <button
              onClick={() => toggleFavorite(event.id)}
              className="mt-2 text-sm"
            >
              {favorites.includes(event.id) ? "★ お気に入り済み" : "☆ お気に入り"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}