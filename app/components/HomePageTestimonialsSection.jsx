import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnishAvatar from "./img/avatar-anisha.png"

export default function HomePageTestimonialsSection() {
  return (
    <section id="testimonials">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            <h2 className="text-4xl font-bold text-center">
                What&apos;s Different About Manage?
            </h2>
            <div className="flex flex-col mt-24 md:flex-row space-y-14 md:space-x-6 md:space-y-0">
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <Image src={AnishAvatar} className='w-16 -mt-14' alt='user'/>
                    <h5 className="text-lg font-bold">Anisha Li</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        “Manage has supercharged our team’s workflow. The ability to
                        maintain visibility on larger milestones at all times keeps
                        everyone motivated.”  
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <Image src={AnishAvatar} className='w-16 -mt-14' alt='user'/>
                    <h5 className="text-lg font-bold">Anisha Li</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        “Manage has supercharged our team’s workflow. The ability to
                        maintain visibility on larger milestones at all times keeps
                        everyone motivated.”  
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <Image src={AnishAvatar} className='w-16 -mt-14' alt='user'/>
                    <h5 className="text-lg font-bold">Anisha Li</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        “Manage has supercharged our team’s workflow. The ability to
                        maintain visibility on larger milestones at all times keeps
                        everyone motivated.”  
                    </p>
                </div>
            </div>
            <div className="my-16">
                <Link href="#" className="p-3 px-6 pt-2 text-white bg-brightRed baseline rounded-full hover:bg-brightRedLight">Get Started</Link>
            </div>
        </div>
    </section>
  )
}
