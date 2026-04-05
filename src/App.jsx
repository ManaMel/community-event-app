import { Routes, Route } from "react-router-dom";  // BrowserRouterを削除
import EventList from "./components/EventList";
import EventDetail from "./components/EventDetail";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-4xl p-4">
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/events/:id" element={<EventDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;