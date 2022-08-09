import { useState } from "react"
import { Product } from '../shared/interfaces'
import { IconRating } from './icons'

type Props = {
    showAllReviewCount?: Boolean,
    ratingPosition?: String,
    rating?: Number,
    reviewCount? :Number
}

export default function ReviewCard({
    showAllReviewCount,
    ratingPosition,
    rating,
    reviewCount
}: Props) {
    return (
        <div className="flex items-center">
            <div className="flex items-center">
                {rating && ratingPosition === "left" &&  <span className="mr-1">{rating}</span>}
                {[1,2,3,4,5].map((review, index) => {
                    return <IconRating customClass={`${rating >= review ? "text-yellow-400" : "text-gray-200" }`}/>
                    })
                }
                {rating && ratingPosition === "right" &&  <span className="ml-1">{rating}</span>}
            </div>
            {showAllReviewCount && reviewCount &&
                <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{`See all ${reviewCount} reviews`}</a>
            }
        </div>
    )
}