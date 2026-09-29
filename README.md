# 🌿 Vivero Malva - Tienda Online de Plantas 🪴

¡Llevá el verde a tu casa! Explorá el catálogo, filtrá por categoría y descubrí cada planta en detalle, todo con una navegación fluida y sin recargas de página.

Este proyecto está hecho con **React, Vite y React Router**, e incluye **slider animado, catálogo cargado desde un JSON, filtros por categoría, detalle de producto y diseño responsive**, con una estética cuidada pensada para una tienda real.

🔗 **Demo online:** [emanuelcabral.github.io/Vivero-Malva](https://emanuelcabral.github.io/Vivero-Malva/)

----

## 🔗 Badges

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222?logo=github)

---

## 🛍️ Cómo usar la tienda

1. Abrí la [demo online](https://emanuelcabral.github.io/Vivero-Malva/) o corré el proyecto en tu computadora (ver más abajo).
2. En la **portada**, recorré el slider y las secciones de servicios, testimonios y planes.
3. Entrá a **Productos** y filtrá por categoría: Interior, Exterior, Suculentas, Macetas o Insumos.
4. Hacé clic en **Ver detalle** para conocer el precio, la descripción y el stock de cada producto.
5. Suscribite al **newsletter** desde el footer y conocé al equipo del vivero.

---

## ⚡ Funcionalidades principales

- 🖼️ **Slider de portada** a pantalla completa, con cambio automático y flechas de navegación
- 🧭 **Navegación sin recargas** con `react-router-dom` y enlaces con `Link` / `NavLink` (ruta activa resaltada)
- 📦 **Catálogo dinámico**: los productos se cargan desde `productos.json` con `fetch` y `useEffect`
- 🧩 **Componentes reutilizables**: cada producto se renderiza con `Item.jsx` recibiendo los datos por `props`
- 🏷️ **Filtros por categoría** mediante parámetros de URL (`useSearchParams`)
- 🔎 **Detalle de producto** con ruta dinámica `/producto/:id` (`useParams`)
- ⏳ **Estados de carga y error** al pedir los datos
- 🧱 **Layout consistente**: `Header`, `NavBar` y `Footer` compartidos por todas las páginas con `Outlet`
- 📬 **Footer completo**: datos de contacto, sucursales, horarios, políticas, newsletter con formulario controlado, propiedad intelectual y tarjetas del equipo
- 🚫 **Página 404** para rutas inexistentes
- 📱 **Diseño responsive** para celular, tablet y escritorio
- 🛡️ **Imágenes con respaldo**: si una foto no carga, se muestra un bloque alternativo en lugar de un ícono roto

---

## 🗺️ Rutas

| Ruta | Vista |
|------|-------|
| `/#/` | Portada con slider, servicios, destacados, testimonios y planes |
| `/#/productos` | Catálogo completo con filtros por categoría |
| `/#/producto/:id` | Detalle de un producto |
| `/#/carrito` | Vista del carrito de compras |
| `/#/*` | Página de error 404 |

> El proyecto usa `HashRouter`, por eso las URLs incluyen `#`. Así funciona en GitHub Pages sin errores al recargar la página.

---

## 🧰 Tecnologías utilizadas

- **React 18**: componentes funcionales y hooks (`useState`, `useEffect`)
- **Vite**: entorno de desarrollo y compilación
- **React Router DOM 6**: sistema de ruteo
- **JavaScript (ES6+)**
- **CSS nativo** con variables, Grid y Flexbox
- **GitHub Actions + GitHub Pages**: despliegue automático

---

## 📁 Estructura del proyecto

```
Vivero-Malva/
├── .github/workflows/
│   └── deploy.yml            # Despliegue automático a GitHub Pages
├── public/
│   ├── img/                  # Fotos de productos, slider y servicios
│   └── productos.json        # Datos del catálogo
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx    # Estructura general de las páginas
│   │   │   ├── Header.jsx    # Barra superior con datos de contacto
│   │   │   ├── NavBar.jsx    # Menú de navegación
│   │   │   ├── Footer.jsx    # Información de la empresa y equipo
│   │   │   └── TeamCard.jsx  # Tarjeta de cada integrante
│   │   ├── Item.jsx                  # Tarjeta de producto reutilizable
│   │   ├── ItemListContainer.jsx     # Catálogo con filtros
│   │   ├── ItemDetailContainer.jsx   # Detalle de producto
│   │   └── SmartImage.jsx            # Imagen con respaldo ante errores
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Cart.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx               # Definición de rutas
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos globales
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Instalación y uso local

Necesitás tener instalado [Node.js](https://nodejs.org/) 18 o superior.

```bash
# 1. Clonar el repositorio
git clone https://github.com/emanuelcabral/Vivero-Malva.git

# 2. Entrar a la carpeta
cd Vivero-Malva

# 3. Instalar las dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

Después abrí la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

Para generar la versión de producción:

```bash
npm run build
```

---

## 🛣️ Próximos pasos

*(Espero poder lograrlo)*

- 🛒 Funcionalidad completa del carrito con **Context API** (agregar, quitar y calcular el total)
- 🔢 Selector de cantidad en el detalle de producto
- 🔍 Buscador de productos
- 💳 Pantalla de checkout
- 🌱 Y todo lo nuevo que vaya aprendiendo

---

## 👨‍💻 Autor

**Emanuel Cabral**
Proyecto de pre-entrega del curso **React JS** (2026-2C).

[![GitHub](https://img.shields.io/badge/GitHub-emanuelcabral-181717?logo=github)](https://github.com/emanuelcabral)

