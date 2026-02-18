import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MyAwesomeApp } from './MyAwesomeApp'

describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    const { container } = render(<MyAwesomeApp />)
    // screen.debug()
    // console.log(container.innerHTML)

    const h1 = container.querySelector('h1')
    const h3 = container.querySelector('h3')

    expect(h1?.innerHTML).toBe('Adrian') // Se puede usar .toContain si es una palabra contenida en un string (o si hay espacios vacios)
    expect(h3?.innerHTML).toContain('Fayos')
  })

  test('should render firstName and lastName - screen', () => {
    render(<MyAwesomeApp />)
    screen.debug()
    // console.log(container.innerHTML)

    const h1 = screen.getByTestId('first-name-title')

    expect(h1.innerHTML).toContain('Adrian')
  })

  test('should match snapshot', () => {
    render(<MyAwesomeApp />)

    expect(screen.getByTestId('div-app')).toMatchSnapshot()
  })
})
