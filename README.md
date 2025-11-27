# Wake Up Cafeteria – Frontend

Wake Up Cafeteria es una aplicación web desarrollada con **React + Vite**, pensada para ofrecer una experiencia moderna y rápida para una cafetería. Incluye catálogo de productos, carrito de compras, páginas informativas y conexión con backend para funcionalidades completas.

---

## 🚀 Tecnologías utilizadas

* **React 19**
* **React DOM**
* **React Router DOM** (para navegación)
* **Tailwind CSS** + plugin para Vite
* **Stripe** (`@stripe/react-stripe-js` y `@stripe/stripe-js`) para pagos
* **React Toastify** para notificaciones
* **Lucide React** para íconos
* **Vite** como bundler y dev server
* **ESLint** con plugins para React y React Hooks

---

## 📂 Estructura del proyecto

```
wake-up-cafeteria-front/
│── public/
│── src/
│   ├── assets/        # Imágenes y recursos
│   ├── components/    # Componentes reutilizables
│   ├── hooks/         # Custom hooks
│   ├── pages/         # Páginas principales
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│── .env               # Variables de entorno (no subir)
│── package.json
│── vite.config.js
│── README.md
│── estructura.txt
```

---

## ⚙️ Instalación y ejecución local

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/usuario/wake-up-cafeteria-front.git
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Configurar variables de entorno

Crear un archivo `.env` en la raíz con el siguiente ejemplo:

```env
# Backend API
VITE_URL_BACK=http://localhost:3000

# Stripe
VITE_STRIPE_SECRET=pk_test_51SLVoaCEX1tTsJPUOgmXgzIm3PIUH5JAlAnKhMgipJRlqH7f5lBz9WhYI1umZXOnsUUy1QtCA1KR8RAmQcy4watd004XLBpEmu
```

> ⚠️ **No subir tu `.env` real**. Podés subir un `.env.example` con las mismas variables pero sin datos sensibles.

### 4️⃣ Levantar el servidor en modo desarrollo

```bash
npm run dev
```

La app abrirá en:

```
http://localhost:5173/
```

---

## 🛠️ Build para producción

```bash
npm run build
```

Esto genera la carpeta **dist/** lista para deploy.

---

## 🔗 Conexión con el backend

Este frontend consume la API backend mediante:

* `VITE_URL_BACK` → URL base de la API
* Endpoints típicos:

  * `/productos`
  * `/pedidos`
  * `/auth`
  * `/checkout` (Stripe)

Asegurate que el backend esté corriendo para que la app funcione correctamente.

---

## 🛒 Funciones principales

* Catálogo de productos
* Carrito de compras
* Página de detalles de productos
* Página “About Us”
* Integración con Stripe para pagos
* Diseño responsive
* Notificaciones con React Toastify
* Íconos con Lucide React

---

## 🌐 Deploy recomendado

* **Vercel**
* **Netlify**
* **Render**
* **Firebase Hosting**

---

## 👨‍💻 Autor

**Salomón Prieto (Salo)** – Frontend Developer

---

## 📌 Notas

* Seguir el `.env.example` para configurar el proyecto localmente.
* Mantener las dependencias actualizadas con `npm update` periódicamente.
* Usar `npm run lint` para mantener el código limpio y consistente.
 con mensajes descriptivos.
Esto ayuda a entender el historial y resolver conflictos fácilmente.
