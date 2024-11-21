import React from 'react'
import Link from 'next/link'

const Headder = () => {
  return (
    <header className='header'>
    <h1 className='logo'>Welcome to my car website</h1>
    <nav><Link href="/">Home</Link></nav>
    <nav><Link href="/about">About</Link></nav>
    <nav><Link href="/car">Cars</Link></nav>
    <nav><Link href="/contact">Contact</Link></nav>



    
</header>
  )
}

export default Headder