import "./css/app.css";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import Products from "./pages/ProductsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </main>
  );
}

export default App;
