import Container from "react-bootstrap/esm/Container";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import { AuthProvider } from "./contexts/authContext";
import BookPage from "./pages/BookPage";
import BookshelfPage from "./pages/BookshelfPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import WishlistPage from "./pages/WishlistPage";

export default function App() {
  const navigate = useNavigate();

  function onSearch(query) {
    navigate(`/search/${query}`);
  }

  return (
    <div className="App">
      <AuthProvider>
        <header>
          <Navigation onSearch={onSearch} />
        </header>
        <main>
          <Container className="my-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search/:searchQuery" element={<HomePage />} />
              <Route path="/bookshelf" element={<BookshelfPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/book/:bookId" element={<BookPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <p>Web programiranje, FERIT Osijek</p>
          <p>Michael Šrempf, Dominik Živko</p>
        </footer>
      </AuthProvider>
    </div>
  );
}
