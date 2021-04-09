export type Product = {
  id: ProductID
  title: string
}

export type ProductID = string & { productId: 'productId' }
