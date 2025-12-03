import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const Philosophy = () => {

    const philosophy_img = [
        {   
            title: "Teaching & Learning philosophy",
            img: "/Teaching-and-Learning-Philosophy.jpg",
            file: "/Teaching-and-Learning-Philosophy.pdf"
        }
    ]

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
            className="text-center text-5xl text-pink-800">
                Philosophy of Teaching & Learning
            </motion.h2>

            <motion.p 
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
            className="text-center mt-12 mb-12">
                My Curriculum model is Emergent Curriculum and Inquiry-based learning because I believe that children have difference ways to learn independently. 
                It is true that each child has their own characteristics and talents to explore the world through learning and playing. 
            </motion.p>

            <motion.h2
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.7}}
            className="text-center text-5xl mt-36">
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
                    {philosophy_img.map((p, i) => (
                        <Link key={i} href={p.file} target="_blank" 
                        className="w-full border rounded-xl shadow-2xl border-gray-600 overflow-hidden flex"
                        >
                            <Image src={p.img} alt={p.title} width={500} height={500} className="w-full h-full object-cover"/>
                        </Link>
                    ))}
                </motion.div>

                <motion.div 
                initial={{opacity: 0, x: 20}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 0.7}}
                className="flex-1">
                    <p>
                        As a passionate learner, I inspire to create curriculums and programs based on children interests, curiosities and explorations when children are learning and behaving every day. 
                        As family is a supporter and I as an educator will be a facilitator and a collaborator for children to learn through experiences so that they can enhance the skills that they have already had and develop the areas that need further works.  
                        <br></br>
                        <br></br>
                        Moreover, as the future educator, I will reflect on how to support the children with the help of families and communities better by building positive relationships with them. 
                        From that, it can be a base for me to provide a holistic approach for the children. 
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
                    <b>Children</b> are like <b>sailors</b>, full of confidence and bravery but also need collaboration and guidance to grow powerfully to sail the ship to the treasure on the island. 
                </motion.p>
                <br></br>
                <motion.p
                initial={{opacity: 0, x:-15}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 1.6}}>
                    <b>Families</b> are like the <b>ocean</b> and the <b>sea creatures</b> that play an important part in leading the ship to the desire location and to support the children in their playing and learning journey.
                </motion.p>
                <br></br>
                <motion.p
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 1.8}}>
                <b>Educators</b> are like the <b>navigator</b> of the ship who will be the guidance for the children through their learning journey to support their development which is the treasure of the island.
                </motion.p>
            </motion.div>

            
            <motion.div
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 1.9}}>
                <a href="https://docs.google.com/document/d/18UL8585PxrtRGNLuWrYNhBeCPI3fzKx_/edit?usp=sharing&ouid=103596749203023327004&rtpof=true&sd=true"
                target="_blank" className="text-blue-600 underline">
                    <b>Read more</b>
                </a>
            </motion.div>
        </motion.div>
    )
}

export default Philosophy;