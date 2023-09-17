import Swall from "sweetalert2";
import { useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";

const MySwall = withReactContent(Swall);

export default function useLogin() {
  const navigate = useNavigate();

  async function postLogin(username, password) {
    console.log(username, password);
    try {
      const response = await fetch("http://localhost:8081/api/sessions/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        navigate("/products");
      }

      if (!response.ok) {
        MySwall.fire({
          icon: "error",
          title: "Oops...",
          text: "Usuario o contraseña incorrectos",
        });
        return;
      }

      const result = await response.json();

      if (!result) {
        MySwall.fire({
          icon: "error",
          title: "Oops...",
          text: "Usuario o contraseña incorrectos",
        });
        return;
      }

      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  return [postLogin];
}
