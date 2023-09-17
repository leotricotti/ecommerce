import { useState } from "react";
import Swall from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwall = withReactContent(Swall);

export default function useLogin(username, password) {
  const [response, setResponse] = useState(null);
  async function postLogin(user, password) {
    try {
      const response = await fetch("/api/sessions/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setResponse(null);
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
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  return [response, postLogin];
}
