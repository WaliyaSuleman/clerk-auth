import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-5 h-screen w-full items-center justify-center'>
      <h1 className="text-5xl">
        Home
      </h1>
      <Button asChild>
        <Link href="/dashboard">
          Go to Dashboard
        </Link>
      </Button>
    </div>
  )
}

export default page