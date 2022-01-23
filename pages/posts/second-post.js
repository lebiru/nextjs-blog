import Link from 'next/link'

export default function SecondPost() {
    return (
    <>
      <h1>Second Post</h1>
      <h2>
        <Link href="/">
          <a>Back to Home</a> 
        </Link>
      </h2>
    </>
    )
}
