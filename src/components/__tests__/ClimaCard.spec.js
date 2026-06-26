import { describe, it, expect } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import ClimaCard from '../ClimaCard.vue'

describe('ClimaCard.vue', () => {
  const ciudadMock = {
    id: 1,
    nombre: 'Ancud',
    pais: 'Chile',
    imagen: '/ancud.jpg',
    temperatura: 10,
    humedad: 80,
    viento: 20,
    codigoClima: 61,
    descripcion: 'Lluvia ligera',
    icono: '🌧️',
  }

  it('muestra la información principal de la ciudad', () => {
    const wrapper = mount(ClimaCard, {
      props: {
        ciudad: ciudadMock,
        unidad: 'C',
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })

    expect(wrapper.text()).toContain('Ancud')
    expect(wrapper.text()).toContain('Chile')
    expect(wrapper.text()).toContain('Lluvia ligera')
    expect(wrapper.text()).toContain('10°C')
    expect(wrapper.text()).toContain('80%')
    expect(wrapper.text()).toContain('20 km/h')
  })

  it('convierte la temperatura a Fahrenheit cuando la unidad es F', () => {
    const wrapper = mount(ClimaCard, {
      props: {
        ciudad: ciudadMock,
        unidad: 'F',
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })

    expect(wrapper.text()).toContain('50°F')
  })

  it('tiene un enlace al detalle de la ciudad', () => {
    const wrapper = mount(ClimaCard, {
      props: {
        ciudad: ciudadMock,
        unidad: 'C',
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })

    const link = wrapper.findComponent(RouterLinkStub)

    expect(link.exists()).toBe(true)
    expect(link.props('to')).toBe('/detalle/1')
  })
})