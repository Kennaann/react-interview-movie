import React from 'react'

import { AiFillVideoCamera } from 'react-icons/ai'

function NavBar() {
    return (
        <nav className='py-3 xs:pb-0 mb-6 sm:pt-6 md:w-[744px] m-auto'>
            <a href='/' className='flex items-center space-x-1 text-2xl sm:text-3xl pl-2 hover:cursor-pointer'>
                <AiFillVideoCamera className=' text-blue-500 text-3xl sm:text-4xl' />
                <h1>Watch<span className='text-blue-500' >Films</span></h1>
            </a>

        </nav>
    )
}

export default NavBar