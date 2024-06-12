import Link from 'next/link'
 
export default function NotFound() {  

  return (
    <div className='w-4/5 mx-auto mt-20 flex flex-col justify-center items-center space-y-4'>
        <h1 className='text-4xl font-semibold'>404 - Page Not Found</h1>
        <h4 className='py-10 text-lg text-red-500 font-semibold capitalize'>
          The Nothingness and Emptiness is here...
        </h4>
        <p>
          Use the links below to explore our amazing application
        </p>
        <div className='space-x-4'>
          <Link
            className='underline text-blue-600 hover:text-red-500 duration-300'
            href='/'
          >
            Homepage
          </Link>
          <Link
            className='underline text-blue-600 hover:text-red-500 duration-300'
            href='/dashboard'
          >
            Dashboard
          </Link>
          <Link
            className='underline text-blue-600 hover:text-red-500 duration-300'
            href='/contact-us'
          >
            Contact Us
          </Link>
        </div>
      </div>
  )
}