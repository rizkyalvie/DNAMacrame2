import Navbar from './components/navbar/page'
import Image from 'next/image'
import productImage from '../public/images/product.webp'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="w-full h-screen">
      <Image 
      alt='Product Image'
      className='absolute w-screen h-screen object-cover'
      blurDataURL={'../public/images/product.webp'}
      placeholder="blur"
      src={productImage}
      />
      <p className="text-3xl absolute top-80 left-1/3 bg-black/50 p-2">Best Handmade Custom Bracelets</p>
      </div>
    </main>
  )
}
