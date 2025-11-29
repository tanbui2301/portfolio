import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Philosophy = () => {
    return (
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        className="w-full px-[12%] pt-36 pb-16 scroll-mt-20">
            <motion.h2 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
            className="text-center text-5xl">
                Philosophy of Teaching & Learning
            </motion.h2>

            <motion.p 
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
            className="text-center mt-12 mb-12">
                The following beliefs demonstrate my philosophy of teaching and learning, 
                which I create in my Reflective Professionals course during my studies in Early Childhood Education program.
            </motion.p>

            <motion.h2
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.7}}
            className="text-center text-5xl">
                Summary
            </motion.h2>

            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            className="flex w-full flex-col lg:flex-row items-center gap-12 my-12">
                <motion.div 
                initial={{x: -20, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.7}}
                className="w-40 sm:w-80 rounded-2xl max-w-none">
                    <Image src={assets.profile_img} alt="philosophy picture" className="w-full rounded-2xl"/>
                </motion.div>

                <motion.div 
                initial={{opacity: 0, x: 20}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 0.7}}
                className="flex-1">
                    <p>
                        As a passionate learner, I inspire to build the love for the children by creating curriculums and programs based on children interests, 
                        curious and exploration when children are learning and behaving every day. 
                        As family is a supporter and I as an educator will be a facilitator for children to learn through playing, 
                        so that they can enhance the skills that they have already had and develop the areas that need further works.
                    </p>
                </motion.div>
            </motion.div>

            <motion.h2 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            className="text-center text-5xl">
                I Believe
            </motion.h2>

            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 1.0}}
            className="my-12">
                <motion.p
                initial={{opacity: 0, x: -5}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 1.2}}>
                    Teaching and learning to me, is like <b>Sailing a ship to the desire destination</b>.
                </motion.p>
                <br></br>
                <motion.p
                initial={{opacity: 0, x: -10}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 1.4}}>
                    That <b>children</b> are like <b>sailors</b>, full of confidence and bravement, but also need collaboration and guidance to grow powerfully.
                </motion.p>
                <br></br>
                <motion.p
                initial={{opacity: 0, x:-15}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 1.6}}>
                    That <b>families</b> are like the <b>ocean</b> and <b>sea creatures</b> that play an important part in leading the ship to the desire location.
                </motion.p>
                <br></br>
                <motion.p
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 1.8}}>
                    That <b>educators</b> are like a <b>captain</b> of the ship who will be a guidance for the children through their learning journey to support their development.
                </motion.p>
            </motion.div>
        </motion.div>
    )
}

export default Philosophy;