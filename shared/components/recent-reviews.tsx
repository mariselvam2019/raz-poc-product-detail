import ReviewCard from "../../components/reviewCard";

type Reviews = {
    "id": String,
    "author": String,
    "date": String,
    "rating": Number,
    "comment": any
}

type Props = {
    reviews?: Array<Reviews>
}

const RecentReviews = ({reviews}: Props) => {
    return (
        <div className="my-10">
            <h1 className="text-2xl font-normal mb-5">Recent reviews</h1>
            <hr/>
            {reviews?.map(item => {
                return <div className="py-5 border border-t-0 grid grid-cols-3 border-x-0">
                    <div>
                        <h2 className="font-bold">{item?.author}</h2>
                        <p>{item?.date}</p>
                    </div>
                    <div>
                        <ReviewCard showAllReviewCount= {false} ratingPosition="right" rating={item?.rating}/>
                    </div>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: item?.comment }}/>
                    </div>
                </div>
            })}
        </div>
    )
}

export default RecentReviews
