<template>
  <main class="favoritos-page">
    <section class="contenedor">
      <div class="intro">
        <h1>Mis lugares favoritos</h1>
        <p>
          Esta sección muestra las ciudades guardadas como favoritas por el usuario conectado.
        </p>
      </div>

      <section v-if="favoritosConImagen.length > 0" class="favoritos-grid">
        <article
          v-for="ciudad in favoritosConImagen"
          :key="ciudad.id"
          class="favorito-card"
        >
          <img
            :src="ciudad.imagen"
            :alt="ciudad.nombre"
            class="favorito-img"
          />

          <div class="favorito-contenido">
            <div class="favorito-icono">⭐</div>

            <h2>{{ ciudad.nombre }}</h2>

            <p class="pais">
              {{ ciudad.pais }}
            </p>

            <p class="texto-favorito">
              Guardado como favorito de
              <strong>{{ authStore.nombreUsuario }}</strong>.
            </p>

            <button
              class="btn-eliminar"
              type="button"
              @click="eliminarFavorito(ciudad.nombre)"
            >
              Eliminar de favoritos
            </button>
          </div>
        </article>
      </section>

      <section v-else class="sin-favoritos">
        <div class="favorito-icono">⭐</div>

        <h2>Todavía no tienes ciudades favoritas</h2>

        <p>
          Vuelve al inicio y agrega una ciudad para verla en esta sección.
        </p>

        <RouterLink to="/" class="btn">
          Ir al inicio
        </RouterLink>
      </section>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../stores/authStore'
import { ciudadesBase } from '../data/ciudades'

const authStore = useAuthStore()

const favoritosConImagen = computed(() => {
  return ciudadesBase.filter((ciudad) =>
    authStore.favoritos.includes(ciudad.nombre)
  )
})

const eliminarFavorito = (ciudad) => {
  authStore.eliminarFavorito(ciudad)
}
</script>