import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer
        style={{
            width: '99%',
            bottom: 0
        }}
    >
        <center>
            <h3>Created with 💖 by <Link href={"https://github.com/xanthisafk"}>Abhinav</Link></h3>
        </center>
    </footer>
  )
}

export default Footer