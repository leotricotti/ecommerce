import "./css/app.css";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import Products from "./pages/ProductsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
