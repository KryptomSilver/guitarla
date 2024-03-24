type Guitar = {
  id: number
  name: string
  image: string
  description: string
  price: number
}
type CartItem = Guitar & {
  quantity: number
}
