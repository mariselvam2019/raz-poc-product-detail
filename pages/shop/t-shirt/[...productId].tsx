import { GetServerSideProps } from 'next'
import Head from 'next/head';

import ReviewCard from '../../../components/reviewCard';
import BadgeComponent from '../../../shared/components/badge';
import RecentReviews from '../../../shared/components/recent-reviews';
import RelatedProduct from '../../../shared/components/product-item-card';
import { Product } from '../../../shared/interfaces';
import { badges } from '../../../shared/constants';
import SEO from '../../../shared/components/seo/seo';

type Props = {
  item?: Product
  errors?: string
}

export default function ProductDetail({ item }: Props) {
  const schema = {
		'@context': 'http://schema.org',
		'@type': 'Person',
		name: item.title,
		url: `http://localhost:3000/shop/t-shirt/${item.id}`,
		jobTitle: 'Editor',
		image: 'https://cdn.realestateview.com.au/illuminate/author-images/1320-au-0-d42cb7513f1700.jpeg',
		worksFor: {
			'@type': 'Organization',
			name: 'Real Estate View',
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `http://localhost:3000/shop/t-shirt/${item.id}`,
		},
		sameAs: [`http://localhost:3000/shop/t-shirt/${item.id}`],
	};

  return (
    <div>
      <Head>
          <script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
      </Head>
        <SEO
          title={item.brandName}
          description={item.title}
          type={'website'}
          url={`http://localhost:3000/shop/t-shirt/${item.id}`}
          keywords={'Tshirts'}
          image={item.images[0]}
        />
      <div className="bg-white">
        <div className="w-full grid lg:grid-cols-2 md:grid-cols-2">
            {/* Left - Image section */}
            <div className="hidden md:block aspect-w-2 aspect-h-3 overflow-hidden">
              <img src={item?.images[0]} alt="Two each of gray, white, and black shirts arranged on table." className="w-full object-cover object-top" />
              <div className='w-full grid grid-cols-2 gap-5 mt-5'>
                <div>
                  <img src={item?.images[1]} alt="Two each of gray, white, and black shirts arranged on table."   className="object-cover object-top" />
                </div>
                <div>
                  <img src={item?.images[2]} alt="Two each of gray, white, and black shirts arranged on table."   className="object-cover object-top" />
                </div>
              </div> 
            </div>
            <div className="block md:hidden lg:hidden aspect-w-2 aspect-h-3 bg-gray-100 overflow-hidden">
              <img src={item?.images[0]} alt="Two each of gray, white, and black shirts arranged on table." className="w-full object-cover object-top" />
            </div>

            {/* Right - Content section */}
            <div className="px-5">
              <div className='flex justify-between py-5'>
                <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{item?.title}</h2>
                <p className="text-2xl text-gray-900 font-bold">${item?.price}</p>
              </div>
              <section aria-labelledby="information-heading" className="mt-2">
                <ReviewCard showAllReviewCount= {true} ratingPosition="left" rating={item?.rating} reviewCount={item?.reviewCount}/>
              </section>
              <section aria-labelledby="options-heading" className="mt-10">
                <h3 id="options-heading" className="sr-only">Product options</h3>
                <form>
                  <div>
                    <h4 className="text-sm text-gray-900 font-medium">Color</h4>
                    <fieldset className="mt-4">
                      <legend className="sr-only">Choose a color</legend>
                      <span className="flex items-center space-x-3">
                        {item?.availableColors.map((color, index) => {
                          return <label key={index} className={`-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none`}>
                            <span aria-hidden="true" className={`h-8 w-8 bg-${color?.trim()}-500 border border-black border-opacity-10 rounded-full`}></span>
                          </label>
                        })}
                      </span>
                    </fieldset>
                  </div>
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm text-gray-900 font-medium">Size</h4>
                      <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                    </div>
                    <fieldset className="mt-4">
                      <legend className="sr-only">Choose a size</legend>
                      <div className="grid lg:grid-cols-6 grid-cols-3 gap-4">
                        {item?.availableSize.map((size, index) => {
                          return <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value={size.type} className="sr-only" aria-labelledby="size-choice-0-label" />
                            <span id="size-choice-0-label"> {size.type} </span>
                            <span className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></span>
                          </label>
                        })}
                      </div>
                    </fieldset>

                  </div>
                  <button type="submit" className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to cart</button>
                </form>
              </section>
              <section aria-labelledby="description">
                <div className='my-4'>Description</div>
                <div dangerouslySetInnerHTML={{ __html: item?.description }} />
              </section>
              <hr className='my-4' />
              <section aria-labelledby="Fabric">
                <div className='my-4'>Fabric & care</div>
                <div>
                  <ul className='list-disc ml-4'>
                    <li>Only the best materials</li>
                    <li>Ethically and locally made</li>
                    <li>Pre-wahsed and pre-shrunk</li>
                    <li>Machine wash cold with similar colors</li>
                  </ul>
                </div>
              </section>
              <section className='mt-8'>
                <div className='w-full grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                  {badges?.map(badge => {
                    return <BadgeComponent item={badge} />
                  })}
                </div>
              </section>
            </div>
        </div>
        <div className="w-full grid grid-cols-1">
          <RecentReviews reviews={item?.reviews}/>
        </div>
        <div className="w-full my-10">
            <h1 className="text-2xl font-normal mb-5">Customers also purchased</h1>
            <hr/>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            {item?.relatedProduct.map(product => {
              return <RelatedProduct product={product}/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let productData: any = {};
  try {
    const id = params?.productId
    productData = await fetch(`http://localhost:3004/products/${id}`).then((res) => res.json())
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
    throw err
  }
  const item: Product = productData


  return { props: { item } }
}
