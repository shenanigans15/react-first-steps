import { ItemCounter } from './shopping-cart/ItemCounter'

interface ItemInCart {
  productName: string
  quantity: number
}

const itemsInCart: ItemInCart[] = [
  { productName: 'Nintendo Switch 2', quantity: 1 },
  { productName: 'Mario', quantity: 1 },
  { productName: 'Zelda', quantity: 2 },
]

export function FirstStepsApp() {
  return (
    <>
      <h1>Carritos de compras</h1>

      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}

      {/* <ItemCounter name="Nintendo Switch 2" quantity={1} />
      <ItemCounter name="Mario" quantity={1} />
      <ItemCounter name="Zelda" quantity={2} /> */}
    </>
  )
}
