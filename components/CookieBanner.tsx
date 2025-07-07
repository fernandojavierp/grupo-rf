"use client"
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Solo mostrar si no se ha aceptado antes
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-neutral-900 text-white p-4 flex flex-col md:flex-row items-center justify-between z-50">
      <span>
        Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestra{" "}
        <a href="/privacidad" className="underline text-blue-300">Política de Privacidad</a>.
      </span>
      <button
        onClick={acceptCookies}
        className="mt-2 md:mt-0 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded transition"
      >
        Aceptar
      </button>
    </div>
  );
}