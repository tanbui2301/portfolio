import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const Awards = () => {

    const badges = [
        { title: "Cert1", img: "/23735-standard-first-aid-with-cpr-aed-level-c-c5b8265e34.jpg" , file: "/23735-standard-first-aid-with-cpr-aed-level-c-c5b8265e34.pdf"},
        { title: "Cert2", img: "/cceya-certificate.jpg" , file: "/cceya-certificate.pdf"},
        { title: "Cert3", img: "/Minh-Thu-Ho-Reconciliation-Education.jpg" , file: "/Minh-Thu-Ho-Reconciliation-Education.pdf"},
        { title: "Badge1", img: "/Minh-Thu-Ho-badge.jpg" ,file: "/Minh-Thu-Ho-badge.jpg"},
        { title: "Badge2", img: "/Minh-Thu-Ho-badge-2.jpg" ,file: "/Minh-Thu-Ho-badge-2.jpg"},
        { title: "Badge3", img: "/Minh-Thu-Ho-badge-3.jpg" ,file: "/Minh-Thu-Ho-badge-3.jpg"},
    ];

    return (
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className="w-full px-[10%] py-32 scroll-mt-20">
            <motion.h2 
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.6}}
            className="text-center text-5xl text-pink-800">
                My Awards
            </motion.h2>
            <div className="w-full flex justify-center pt-12 ">
                <div className="grid grid-cols-3 gap-6 max-w-3xl">
                    {badges.map((b, i) => (
                        <Link 
                        key={i}
                        href={b.file}
                        target="_blank"
                        className="w-full aspect-square border rounded-xl overflow-hidden flex items-center justify-center shadow-2xl border-gray-600">
                            <Image src={b.img} alt={b.title} width={300} height={300} className="object-cover w-full h-full"/>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Awards;