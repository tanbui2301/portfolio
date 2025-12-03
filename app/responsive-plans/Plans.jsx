import React from "react";
import { motion } from "motion/react";

const Plans = () => {
    return (
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className="w-full px-[12%] pt-36 pb-16 scroll-mt-20">
            <motion.h2 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="text-center text-5xl text-pink-800">
                Responsive Inclusive Plans
            </motion.h2>

            <motion.h4 
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            className="text-left text-2xl mt-28">
                Responsive Inclusive Plan: Outdoor
            </motion.h4>

            <motion.p 
            initial={{opacity: 0, x: -40}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 0.4}}
            className="text-left mt-12 mb-12">
                During the second placement, I have an opportunity to do my placement at infant room. 
                From that, I implemented an activity called “Toss the Rings” which children can use the material that I prepared to toss the plastic rings to the puppet sticks. 
                Children can participate and join in the activity together when they have outdoor play time. 
                Moreover, because it was very vibrant with different animals and colours so infants really love to engage with it. 
                My experience is to increase their fine and gross motors skills and also, they can build up their emotional and social skills with their peers and other educators.
            </motion.p>

            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.5}}
            className="w-full max-w-5xl h-[100vh] rounded-xl overflow-hidden shadow-xl border border-gray-600">
                <iframe className="w-full h-full" src="Responsive-Inclusive-Experience-OUTDOOR.pdf"/>
            </motion.div>

            <motion.h4
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 0.6}}
            className="text-left text-2xl mt-28">
                Responsive Inclusive Plan: Children
            </motion.h4>

            <motion.p 
            initial={{opacity: 0, x: -40}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 0.8}}
            className="text-left mt-12 mb-12">
                During my last placement, I implemented a children plan which based on children interest and curiosity as they love to build complex structures in the classroom, whenever there is activity time of the day. 
                Children can build whatever they want using the loose parts materials that I prepared for them. 
                This experience encouraged their critical thinking and problem-solving skill as they have to think how to use these loose parts to build something complex as they want. 
                Moreover, this activity also builds children social interaction as they can play with their peers and together be creative and build something wonderful with these materials. 
                Children was very engaging in this acitvity which brings me a sense of relief but also I have more ideas to think what I can plan for them to engage with in the future. 
            </motion.p>

            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.9}}
            className="w-full max-w-5xl h-[100vh] rounded-xl overflow-hidden shadow-xl border border-gray-600 mb-32">
                <iframe className="w-full h-full" src="Responsive-Inclusive-Experience-CHILDREN-2.pdf"/>
            </motion.div>
        </motion.div>
    )
}

export default Plans;