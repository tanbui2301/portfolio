import Image from "next/image";
import { motion } from "motion/react"
import React from "react";

const ProfExperiences = () => {

    return (
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6}}
        className="w-full px-[12%] pt-36 pb-16 scroll-mt-20">
            <motion.h2 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.3}}
            className="text-center text-5xl text-pink-800">
                Professional Experiences
            </motion.h2>

            <motion.p 
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.5}}
            className="text-center mt-12 mb-12 text-xl">
                The journey to become an Early Childhood Educator has helps me to develop both of my professional skills and the personality.
            </motion.p>

            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.7}}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch w-full">

                <motion.div 
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.7, delay: 0.7}}
                className="flex flex-col gap-6 md:col-span-1">
                    <div className="w-full aspect-square rounded-xl shadow-2xl border-gray-600 overflow-hidden border">
                        <Image src="/prof-page-img-01.jpg" alt="small image 1" width={600} height={600} className="w-full h-full object-cover" />
                    </div>

                    <div className="w-full aspect-square rounded-xl shadow-2xl border-gray-600 overflow-hidden border">
                        <Image src="/prof-page-img-02.jpg" alt="small image 2" width={600} height={600} className="w-full h-full object-cover" />
                    </div>
                </motion.div>

                <motion.div 
                initial={{opacity: 0, x:20}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.7, delay: 0.7}}
                className="md:col-span-2 w-full aspect-[4/4] rounded-xl overflow-hidden border shadow-2xl border-gray-600">
                    <Image src="/prof-page-img-03.jpg" alt="large image" width={1200} height={1500} className="w-full h-full object-cover" />
                </motion.div>

            </motion.div>
        </motion.div>
    )
}

export default ProfExperiences;