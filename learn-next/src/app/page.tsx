import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the Home content</p>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </div>
  );
}