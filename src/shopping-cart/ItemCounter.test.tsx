import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { ItemCounter } from './ItemCounter'

describe('ItemCounter', () => {
  test('should render with default values', () => {
    const name = 'Test item'

    render(<ItemCounter name={name} />)

    expect(screen.getByText(name)).not.toBeNull()
    expect(screen.getByText(name)).toBeDefined()
  })

  test('should render with custom quantity', () => {
    const name = 'Mario'
    const quantity = 10

    render(<ItemCounter name={name} quantity={quantity} />)

    expect(screen.getByText(quantity)).toBeDefined()
  })

  test('should increase count when +1 button is pressed', () => {
    render(<ItemCounter name={'Test item'} quantity={1} />)

    const [buttonAdd] = screen.getAllByRole('button')

    fireEvent.click(buttonAdd)

    expect(screen.getByText('2')).toBeDefined()
  })

  test('should decrease count when -1 button is pressed', () => {
    const quantity = 5
    render(<ItemCounter name={'Test item'} quantity={quantity} />)

    const [, buttonSubtract] = screen.getAllByRole('button')

    fireEvent.click(buttonSubtract)

    expect(screen.getByText('4')).toBeDefined()
  })

  test('should not decrease count when -1 button is pressed and quantity is 0', () => {
    const quantity = 0
    render(<ItemCounter name={'Test item'} quantity={quantity} />)

    const [, buttonSubtract] = screen.getAllByRole('button')

    fireEvent.click(buttonSubtract)

    expect(screen.getByText('0')).toBeDefined()
  })

  test('should change to red when count is 0', () => {
    const quantity = 0
    const name = 'Test item'
    render(<ItemCounter name={'Test item'} quantity={quantity} />)

    const itemText = screen.getByText(name)

    expect(itemText.style.color).toBe('red')
  })

  test('should change to black when count is greater than 0', () => {
    const quantity = 2
    const name = 'Test item'
    render(<ItemCounter name={'Test item'} quantity={quantity} />)

    const itemText = screen.getByText(name)

    expect(itemText.style.color).toBe('black')
  })
})
