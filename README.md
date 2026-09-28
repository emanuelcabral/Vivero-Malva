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
