import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog"
}


export default function Blog() {
    return (
        <div>
            <h1>Blog</h1>
            <p>This is the Blog content</p>

            <h2>Blog Post 1</h2>
            <h2>BLog Post 2</h2>
            <h2>Blog Post 3</h2>

        </div>
    )
}