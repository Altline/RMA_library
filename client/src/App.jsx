import Container from "react-bootstrap/esm/Container";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import BookshelfPage from "./pages/BookshelfPage";
import HomePage from "./pages/HomePage"
import RegistrationPage from "./pages/RegistrationPage";
import WishlistPage from "./pages/WishlistPage";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <main>
        <Container className="my-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bookshelf" element={<BookshelfPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        </Container>
      </main>
      <footer>
        <p>Web programiranje, FERIT Osijek</p>
        <p>Michael Šrempf, Dominik Živko</p>
      </footer>
    </div>
  );
}
