const cartItems = new Set([])

export const add = (product) => {
  cartItems.add(product)
  
}
export const getCart = () => {
   
    return cartItems
    
  }