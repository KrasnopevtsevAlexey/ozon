import { CartItem } from "./cart-item.model"
import { Product } from "./product.model"

export interface CartContextType{
 isOpen: boolean
 setIsOpen: (value: boolean)=>void  
 addToCart: (product: Product)=>void
  cartItem:  CartItem[]
  deleteCartItem: (product: Product)=>void
}