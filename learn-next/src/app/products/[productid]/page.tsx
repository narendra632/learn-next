import { Metadata } from "next"

type Props = {
    params: {
        productId: string;
    }
}

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Product ${params.productId}`,
    }
}


export default function ProductId({ params } : { params: { productid: string}}) {
    return (
        <div>
            <h1>ProductId</h1>
            <p>This is the Product {(params.productid)}</p>

        </div>
    )
}