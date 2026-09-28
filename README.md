# Vivero Malva — Pre-entrega React JS

Tienda online de plantas hecha con React + Vite + react-router-dom.

## Cómo correrlo
```bash
npm install
npm run dev
```

## Estructura
```
src/
  components/
    layout/   Layout, Header, NavBar, Footer, TeamCard
    Item.jsx, ItemListContainer.jsx, ItemDetailContainer.jsx
  pages/      Home, Cart, NotFound
public/productos.json
```

## Rutas
- `/` inicio
- `/productos` catálogo (fetch a `productos.json`)
- `/producto/:id` detalle
- `/carrito` carrito (la lógica con Context va en la entrega final)

## Fotos
Las imágenes viven en `public/img/`. Ver `public/img/LEEME.txt` para los nombres de archivo.

## Publicar en GitHub Pages
1. Subí el proyecto a un repo público (rama `main`).
2. En GitHub: Settings → Pages → Source: **GitHub Actions**.
3. Hacé un push; en la pestaña Actions se despliega solo.
4. El sitio queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.
