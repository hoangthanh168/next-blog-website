import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import config from '@config/config.json'
const Logo = () => {
    const {logo}= config.site;
  return (
    
    <>
        <Link href='/'>
            <Image
                src={logo}
                width='200'
                height='30'
            />
        </Link> 
    </>
  )
}

export default Logo