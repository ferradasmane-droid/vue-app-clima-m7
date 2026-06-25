<template>
  <main class="favoritos-page">
    <section class="contenedor">
      <div class="intro">
        <h1>Mis lugares favoritos</h1>
        <p>
          Esta sección depende del usuario conectado y está protegida por Vue Router.
        </p>
      </div>

      <section v-if="authStore.favoritos.length > 0" class="favoritos-grid">
        <article
          v-for="favorito in authStore.favoritos"
          :key="favorito"
          class="favorito-card"
        >
          <div class="favorito-icono">🌦️</div>

          <h2>{{ favorito }}</h2>

          <p>
            Guardado como ciudad favorita de
            <strong>{{ authStore.nombreUsuario }}</strong>.
          </p>

          <button
            class="btn-eliminar"
            type="button"
            @click="eliminarFavorito(favorito)"
          >
            Eliminar de favoritos
          </button>
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
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const authStore = useAuthStore()

const eliminarFavorito = (ciudad) => {
  authStore.eliminarFavorito(ciudad)
}
</script>