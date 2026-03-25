import { Product } from "./products"

export const getFinalPrice = (product: Product) => {
  if (!product.offer) return product.price

  if (product.offer.type === "percentage") {
    return Math.round(
      product.price - (product.price * product.offer.value) / 100
    )
  }

  if (product.offer.type === "flat") {
    return product.price - product.offer.value
  }

  return product.price
}