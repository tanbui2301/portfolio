import React from "react";
import { motion } from 'motion/react';

const Resume = () => {
    return (
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6}}
        className="pt-36 pb-10 px-6 flex flex-col items-center gap-6">
            <motion.h2 
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.3}}
            className="text-center text-5xl font-serif">
                My resume
            </motion.h2>

            <motion.div 
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.5}}
            className="w-full max-w-4xl h-[85vh] rounded-xl overflow-hidden shadow-xl border border-gray-500">
                <iframe className="w-full h-full" src="theresa-resume.pdf"/>
            </motion.div>
        </motion.div>
    )
}

export default Resume;