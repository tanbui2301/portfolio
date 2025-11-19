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
            </div>

            <div>
                <p>
                    
                </p>

                <ul>
                    <li>
                        <a></a>
                    </li>
                    <li>
                        <a></a>
                    </li>
                    <li>
                        <a></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;