import { useState } from "react";

// Acepta rutas locales ("img/monstera.jpg") o URLs completas.
// Si la foto no existe todavía, muestra un bloque verde con texto.
export default function SmartImage({ src, alt, className = "", fallback = "" }) {
  const [fallo, setFallo] = useState(false);
  const url = /^https?:/.test(src) ? src : `${import.meta.env.BASE_URL}${src}`;

  if (fallo) {
    return (
      <div className={`img-fallback ${className}`} role="img" aria-label={alt}>
        {fallback}
      </div>
    );
  }
  return <img className={className} src={url} alt={alt} loading="lazy" onError={() => setFallo(true)} />;
}
