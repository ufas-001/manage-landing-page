import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Import Images
import LogoWhite from "./img/logo-white.svg"
import FacbookIcon from "./img/icon-facebook.svg"
import YoutubeIcon from "./img/icon-youtube.svg"
import InstagramIcon from "./img/icon-instagram.svg"
import PininterestIcon from "./img/icon-pinterest.svg"
import TwitterIcon from "./img/icon-twitter.svg"

export default function HomePageFooter() {
  return (
    <footer className="bg-veryDarkBlue">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
            <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                <div className="mx-auto my-8 text-center text-white md:hidden">
                    Copyright &copy; 2022, All Right Reserved
                </div>
                <div>
                    <Image src={LogoWhite} className='h-8' />
                </div>
                <div className="flex justify-center space-x-4">
                    <Link href="#">
                        <Image src={FacbookIcon} className='h-8' />
                    </Link>
                    <Link href="#">
                        <Image src={YoutubeIcon} className='h-8' />
                    </Link>
                    <Link href="#">
                        <Image src={InstagramIcon} className='h-8' />
                    </Link>
                    <Link href="#">
                        <Image src={PininterestIcon} className='h-8' />
                    </Link>
                    <Link href="#">
                        <Image src={TwitterIcon} className='h-8' />
                    </Link>
                </div>
            </div>
            <div  className="flex justify-around space-x-32">
                <div className="flex flex-col space-y-3 text-white">
                    <Link href="#" className="hover:text-brightRed">Home</Link>
                    <Link href="#" className="hover:text-brightRed">Pricing</Link>
                    <Link href="#" className="hover:text-brightRed">Product</Link>
                    <Link href="#" className="hover:text-brightRed">About</Link>
                </div>
                <div className="flex flex-col space-y-3 text-white">
                    <Link href="#" className="hover:text-brightRed">Careers</Link>
                    <Link href="#" className="hover:text-brightRed">Community</Link>
                    <Link href="#" className="hover:text-brightRed">Policy</Link>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <form>
                    <div className="flex space-x-3">
                        <input type="text" className="flex-1 px-4 rounded-full focus:outline-none" placeholder="Updated in your inbox" />
                        <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                            Go
                        </button>
                    </div>
                </form>
                <div className="hidden text-white md:block">
                    Copyright &copy; 2022, All Right Reserved
                </div>
            </div>
        </div>
    </footer>
  )
}
