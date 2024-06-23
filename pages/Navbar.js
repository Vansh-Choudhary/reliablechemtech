import Link from 'next/link';
import React, { useRef, useState } from 'react';

export default function Navbar() {
    return (
            <div className='Navbar'>
            <img src='logo.png' style={{width:'3rem'}}/>
            <div className='NavbarLink'>
            <Link href={'/#home'}>
            <h2>Home</h2>
            </Link>
            <Link href={'/#about'}>
            <h2>About Us</h2>
            </Link>
            <Link href={'/product'}>
            <h2>Products</h2>
            </Link>
            <Link href={'/#contactus'}>
            <h2>Contact</h2>
            </Link>
            </div>
            <Link href={'/#contact'}>
            <button className='rounded-3xl font-coolvetica  text-black text-2xl p-2 px-5 my-5 bg-white'>
                Contact Us
            </button>
            </Link>
            </div>
    );
}
