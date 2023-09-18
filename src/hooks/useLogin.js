import Swall from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";

const MySwall = withReactContent(Swall);

export default function useLogin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function postLogin(username, password) {
    if (username && password) {
      setIsLoading(true);
    }

    try {
      const response = await fetch("http://localhost:8080/api/sessions/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setTimeout(() => {
          setIsLoading(false);
          navigate("/products");
        }, 2000);
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

      setIsLoading(true);
      localStorage.setItem("user", JSON.stringify(result.data));
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  return [isLoading, postLogin];
}
