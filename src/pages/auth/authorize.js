import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Authorize = () => {
    const router = useRouter();
    useEffect(() => router.push("/"))
  return (
    <div>authorize</div>
  )
}

export default Authorize