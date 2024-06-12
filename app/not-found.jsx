import Link from 'next/link'
import { headers } from 'next/headers'
 
export default async function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')
  const data = await getSiteData(domain)
  
  return (
    <div className="container tracking-widest">
      <h2 className="text-xl md:text-2xl font-semibold">Not Found: {data.name}</h2>
      <p className="text-base md:text-lg">Could not find requested resource</p>
      <p>
        <Link href="/dashboard">Go to dashboard</Link>
      </p>
    </div>
  )
}