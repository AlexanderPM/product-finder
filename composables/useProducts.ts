export type Product = {
  id: number
  title: string
  description: string
  warrantyInformation: string
}

export type ProductsResponse = {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export function useProducts() {
  const { data, pending, error } = useAsyncData<ProductsResponse>('products', () =>
    $fetch('https://dummyjson.com/products')
  )

  return {
    data,
    pending,
    error
  }
}
