# App del Clima con Vue 3 y Open-Meteo

## Descripción

Este proyecto recrea una App del Clima como una SPA, aplicación de una sola página, desarrollada con Vue 3, Vite, Vue Router y Composition API.

La aplicación consume datos reales desde la API Open-Meteo para mostrar el clima actual y el pronóstico semanal de distintas ciudades.

## Objetivo del proyecto

Recrear una aplicación del clima utilizando Vue, separando la lógica en componentes, vistas, rutas, datos y servicios.


## Vistas principales

### Inicio

La vista Inicio muestra el listado de ciudades de Chiloé en tarjetas. Cada tarjeta presenta una imagen, nombre de la ciudad, país, estado del clima, temperatura, humedad, viento y un botón para acceder al detalle.

También incluye un buscador mediante `v-model` y un selector para cambiar la unidad de temperatura entre Celsius y Fahrenheit.

### Detalle

La vista Detalle muestra información ampliada de la ciudad seleccionada mediante una ruta dinámica `/detalle/:id`.

En esta vista se presenta el clima actual, el pronóstico semanal y las estadísticas de la semana, como temperatura mínima, máxima y promedio.

### ℹ️ Acerca

La vista Acerca muestra información general del proyecto, las tecnologías utilizadas, las funcionalidades principales y el uso de la API Open-Meteo.

## 🛠️ Tecnologías utilizadas

- Vue 3
- Vite
- Vue Router
- Composition API con `<script setup>`
- JavaScript
- CSS
- Open-Meteo API
- Git y GitHub

## Estructura del proyecto

```txt
vue-app-clima/
├── public/
├── src/
│   ├── assets/
│   │   ├── img/
│   │   └── main.css
│   ├── components/
│   │   ├── ClimaCard.vue
│   │   └── EstadisticasClima.vue
│   ├── data/
│   │   └── ciudades.js
│   ├── router/
│   │   └── index.js
│   ├── services/
│   │   └── ClimaServices.js
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── DetalleView.vue
│   │   └── AboutView.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
└── README.md
```

##  🔗 Repositorio

💻 [Ver repositorio en GitHub](https://github.com/ferradasmane-droid/vue-app-clima-m6)

## 🧭 Rutas


- `/` : Vista principal con listado de ciudades.
- `/detalle/:id` : Vista de detalle de una ciudad seleccionada.
- `/about` : Acerca, muestra información sobre la aplicación, la API utilizada y las tecnologías del proyecto.


## Funcionalidades

- Visualización de ciudades de Chiloé en tarjetas.
- Consumo de datos reales desde Open-Meteo.
- Búsqueda de ciudades mediante `v-model`.
- Cambio de unidad entre Celsius y Fahrenheit.
- Vista de detalle por ciudad.
- Pronóstico semanal.
- Estadísticas de temperatura mínima, máxima y promedio.
- Colores dinámicos en tarjetas según el estado del clima.
- Vista Acerca con información del proyecto.
- Navegación interna sin recargar la página usando Vue Router.


## Directivas y recursos de Vue usados

- `v-for` para recorrer ciudades y pronóstico.
- `v-if` para mensajes de carga, error y ciudad no encontrada.
- `v-show` para mostrar cantidad de resultados.
- `v-model` para el buscador y selector de unidad.
- `@submit.prevent` para controlar el formulario.
- `@click` para limpiar la búsqueda.
- `RouterLink` para navegar entre vistas.
- `RouterView` para mostrar las rutas.
- `ref` para datos reactivos.
- `computed` para datos calculados.
- `onMounted` para consumir la API al cargar la vista.



## 🚀 Instalación

Para instalar las dependencias del proyecto:

```bash
npm install
```

## Ejecutar el proyecto

Para iniciar el servidor de desarrollo

```bash
npm run dev
```

## Autora
Nelly Ferrada

