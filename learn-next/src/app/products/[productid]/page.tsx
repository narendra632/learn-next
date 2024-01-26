export default function ProductId({ params } : { params: { productid: string}}) {
    return (
        <div>
            <h1>ProductId</h1>
            <p>This is the Product {(params.productid)}</p>

        </div>
    )
}