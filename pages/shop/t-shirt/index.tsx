import { GetServerSideProps } from 'next'
import Link from 'next/link';
import { Product } from '../../../shared/interfaces'

type Props = {
  items: Product[]
}

const ProductsList = ( { items }: Props) => {
  return (
    <ul className='text-center'>
      {items?.map((item) => (
        <li key={item.id} className='py-5 hover:bg-gray-100'>
          <Link href={`/shop/t-shirt/${item.id}`}>{item.title}</Link>
        </li>
      ))}
  </ul>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  let sampleUserData: any = [];
  try {
    sampleUserData = await fetch("http://localhost:3004/products/").then((res) => res.json())
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
    throw err
  }
  const items: Product[] = sampleUserData
  return { props: { items } }
}

export default ProductsList
