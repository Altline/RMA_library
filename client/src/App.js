import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import BookshelfPage from "./pages/BookshelfPage";
import HomePage from "./pages/HomePage"
import WishlistPage from "./pages/WishlistPage";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookshelf" element={<BookshelfPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </main>
      <footer>

      </footer>
    </div>
  );
}
