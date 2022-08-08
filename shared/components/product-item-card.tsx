type RelatedProductProp = {
    id: Number,
    title: String,
    slug: String,
    image: String,
    brand: String,
    price: Number
}

type Props = {
    product?: RelatedProductProp
}

const RelatedProduct = ({product}: Props) => {
    return (
        <div className="bg-gray-100">
            <img src={product?.image} alt="" className="w-full object-cover object-top" />
            <div className='w-full grid grid-cols-2 p-3 pb-0'>
                <div>
                    <h5>{product?.title}</h5>
                </div>
                <div className="text-right font-bold">
                    {`$${product?.price}`}
                </div>
            </div>
            <p className="p-3 font-light">{product?.brand}</p>
        </div>
    )
}

export default RelatedProduct
