import { notFound } from "next/navigation";

export default function ReviewId({ params}:{params:{productid:string,reviewId:string}}) {
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return (
        <div>
            <h1>ReviewId</h1>
            <p>This is the product {params.productid} review {params.reviewId} </p>

        </div>
    )
}