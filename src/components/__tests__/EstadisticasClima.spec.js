import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EstadisticasClima from '../EstadisticasClima.vue'

describe('EstadisticasClima.vue', () => {
  it('calcula y muestra temperatura mínima, máxima y promedio', () => {
    const wrapper = mount(EstadisticasClima, {
      props: {
        temperaturasMinimas: [5, 7, 4, 6],
        temperaturasMaximas: [10, 12, 14, 16],
      },
    })

    expect(wrapper.text()).toContain('4°C')
    expect(wrapper.text()).toContain('16°C')
    expect(wrapper.text()).toContain('13°C')
  })

  it('muestra el título de estadísticas de la semana', () => {
    const wrapper = mount(EstadisticasClima, {
      props: {
        temperaturasMinimas: [5, 7, 4, 6],
        temperaturasMaximas: [10, 12, 14, 16],
      },
    })

    expect(wrapper.text()).toContain('Estadísticas de la semana')
  })
})