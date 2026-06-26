import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '../authStore'

const localStorageMock = (() => {
  let store = {}

  return {
    getItem(key) {
      return store[key] || null
    },

    setItem(key, value) {
      store[key] = String(value)
    },

    removeItem(key) {
      delete store[key]
    },

    clear() {
      store = {}
    },
  }
})()

vi.stubGlobal('localStorage', localStorageMock)

describe('authStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
  })

  it('inicia sin usuario autenticado', () => {
    const authStore = useAuthStore()

    expect(authStore.usuario).toBe(null)
    expect(authStore.isAuthenticated).toBe(false)
  })

  it('permite agregar una ciudad favorita al usuario', () => {
    const authStore = useAuthStore()

    authStore.usuario = {
      id: 1,
      nombre: 'Nelly',
      email: 'nelly@test.com',
      preferencias: {
        unidad: 'C',
        tema: 'claro',
      },
      favoritos: [],
    }

    authStore.agregarFavorito('Ancud')

    expect(authStore.favoritos).toContain('Ancud')
  })

  it('evita agregar una ciudad favorita duplicada', () => {
    const authStore = useAuthStore()

    authStore.usuario = {
      id: 1,
      nombre: 'Nelly',
      email: 'nelly@test.com',
      preferencias: {
        unidad: 'C',
        tema: 'claro',
      },
      favoritos: ['Ancud'],
    }

    authStore.agregarFavorito('Ancud')

    expect(authStore.favoritos).toEqual(['Ancud'])
  })

  it('permite eliminar una ciudad favorita', () => {
    const authStore = useAuthStore()

    authStore.usuario = {
      id: 1,
      nombre: 'Nelly',
      email: 'nelly@test.com',
      preferencias: {
        unidad: 'C',
        tema: 'claro',
      },
      favoritos: ['Ancud', 'Castro'],
    }

    authStore.eliminarFavorito('Ancud')

    expect(authStore.favoritos).not.toContain('Ancud')
    expect(authStore.favoritos).toContain('Castro')
  })
})