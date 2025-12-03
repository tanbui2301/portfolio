import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div className="mt-20">
            <div className="text-center">
                <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-2" />

                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={assets.footer_mail_icon} alt="footer mail icon" className="w-6" />
                    thuho2705@gmail.com
                </div>
                <br></br>
                <p>Disclaimer: All the content presented in the portfolio is original, accurate, current, and cited where necessary.</p>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-500 mx-[10%] mt-12 py-6">
                <p>
                    © 2025 Minh Thu Ho. All rights reserved.
                </p>

                <ul className="flex items-center justify-center gap-10 sm:mt-0">
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/minh-thu-ho-68bb9b1ba">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;