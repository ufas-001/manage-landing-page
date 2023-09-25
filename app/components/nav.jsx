import React from 'react'
import Image from 'next/image'
import Logo from "./img/logo.svg"
import Link from 'next/link'

export default function NavBar () {
  return (
    <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
            <div className="pt-2">
                <Image src={Logo} alt="" />
            </div>
            <div className="hidden md:flex space-x-6">
                <a href="#" className="hover:bg-darkGrayishBlue">Pricing</a>
                <a href="#" className="hover:bg-darkGrayishBlue">Product</a>
                <a href="#" className="hover:bg-darkGrayishBlue">About Us</a>
                <a href="#" className="hover:bg-darkGrayishBlue">Careers</a>
                <a href="#" className="hover:bg-darkGrayishBlue">Community</a>
            </div>

            <Link href="#" className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed baseline rounded-full hover:bg-brightRedLight">Get Started</Link>
            <button id="menu-btn" className="block hamburger md:hidden focus:outline-none">
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
        </div>
        <div className="md:hidden">
            <div id="menu" className="absolute hidden flex-col items-center self-center py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-ceenter left-6 right-6 drop-shadow-md">
                <a href="#">Pricing</a>
                <a href="#">Product</a>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Community</a>
            </div>
        </div>
    </nav>
  )
}
