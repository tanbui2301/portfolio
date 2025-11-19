import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
    return (
        <div className="w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">

            <div>
                <Image src={assets.profile_img} alt="Profile image" className="rounded-full w-40"/>
            </div>
            <h3 className="flex items-end gap-2 text-xl md:text-3xl mb-3 font-serif">
                Hi! I'm Theresa Ho <Image src={assets.hand_icon} alt="Hand icon" className="w-6" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-serif">
                EARLY CHILDHOOD EDUCATOR
            </h1>
            <p className="max-w-3xl mx-auto font-serif">
                Compassionate and creative Early Childhood Educator, a recent graduate of Humber Polytechnic - Ontario, CA. 
                With a strong foundation in child development, play-based learning, and curriculum design.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2">
                    contact me <Image src={assets.white_arrow} alt="White arrow" className="w-4"/>
                </a>

                <a href="/theresa-resume.pdf" download 
                className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">
                my resume <Image src={assets.download_icon} alt="Download icon" className="w-4"/>
                </a>
            </div>
        </div>
    )
}

export default Header