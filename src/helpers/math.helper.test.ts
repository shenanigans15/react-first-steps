import { describe, expect, test } from 'vitest'
import { add, divide, multiply, substract } from './math.helper'

describe('add', () => {
  test('should add two positives numbers', () => {
    // ! 1. Arrange
    const a = 1
    const b = 2

    // ! 2. Act
    const result = add(a, b)

    // ! 3. Assert
    expect(result).toBe(a + b)
  })

  test('should add two negatives numbers', () => {
    const a = -1
    const b = -2

    const result = add(a, b)

    expect(result).toBe(a + b)
  })
})

describe('substract', () => {
  test('should subtract two positives numbers', () => {
    const a = 4
    const b = 2

    const result = substract(a, b)

    expect(result).toBe(a - b)
  })

  test('should subtract two negatives numbers', () => {
    const a = -1
    const b = -2
    const result = substract(a, b)

    expect(result).toBe(a - b)
  })
})

describe('multiply', () => {
  test('should multiply two positives numbers', () => {
    const a = 4
    const b = 2

    const result = multiply(a, b)

    expect(result).toBe(a * b)
  })

  test('should multiply two negatives numbers', () => {
    const a = -3
    const b = -2

    const result = multiply(a, b)

    expect(result).toBe(a * b)
  })
})

describe('divide', () => {
  test('should divide two positives numbers', () => {
    const a = 4
    const b = 2

    const result = divide(a, b)

    expect(result).toBe(a / b)
  })
})
