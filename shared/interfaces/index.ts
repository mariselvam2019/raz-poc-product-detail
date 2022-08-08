
export type RelatedProductItem= {
    id: string,
    title: string,
    slug: string,
    brand: string,
    image: string,
    price: number
}
export type ReviewItem= {
    id: string,
    author: string,
    date: string,
    rating: number,
    comment: string
}
export type ProductSizeItem = {
    type: string,
    unit: number
}

export type Product = {
  id: number
  title: string,
  slug: string,
  brandName: string,
  price: number,
  rating: number,
  reviewCount: number,
  availableColors: Array<string>,
  availableSize: Array<ProductSizeItem>,
  images: Array<string>,
  description: string,
  reviews: Array<ReviewItem>,
  relatedProduct: Array<RelatedProductItem>
}
