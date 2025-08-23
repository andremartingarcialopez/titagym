import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // cada vez que cambia la ruta, sube al inicio
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
