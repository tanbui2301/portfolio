import React from "react";
import { motion } from "motion/react";

const Pedagogical = () => {

    return (
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6}}
        className="w-full px-[12%] pt-36 pb-32 scroll-mt-20">
            <motion.h2 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            className="text-center text-5xl text-pink-800">
                Pedagogical Documentation
            </motion.h2>

            <motion.p 
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.4}}
            className="text-center mt-12 mb-12">
                The following is an example of one of the pedagogical documentation I developed with my classmates. 
                It hightlights a rich learning experiences that align with my philosphy of teaching that experiences are being created where children's curiosities is  being explored. 
                Children engaged in parallel play with blocks in the block area which is driven by their interest in stacking blocks to build their own structures. 
                The documentation captures children are exploring the new knowledge through playing and also illustrating mathematical skills as they counted blocks to show numbers. 
                Moreover, they also experiment the balance and stability to prevent towers from falling down. 
            </motion.p>

            <motion.div 
            initial={{opacity: 0, scale: 0.6}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6, delay: 0.6}}
            className="flex justify-center gap-5 overflow-hidden shadow-md border-gray-600">
                <img src="/pedagogical-01.png" className="w-1/2" alt="Pedagogical 01"/>
                <img src="/pedagogical-02.png" className="w-1/2"alt="Pedagogical 02"/>
            </motion.div>

            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            className="text-center mt-12">
                The role of educator is a facilitator and a collaborator to help children to enhance different skills by introduce intentionally extensions to build upon their developing skills in counting, creativity and problem-solving.
            </motion.p>

            <motion.div 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 1}}
            className="w-full max-w-5xl h-[100vh] overflow-hidden shadow-xl border-gray-600 mt-12 mb-32">
                <iframe  className="w-full h-full" src="/Group-8-Pedagogycal-Documentation.pdf"/>
            </motion.div>

            <h4 className="text-center text-2xl mt-12">
                Reference
            </h4>

            <p className="text-center text-cyan-600 mt-6">
                Suitt, R. (Director). (2015). CDE103 Observation Block Building Towers [Film]. https://www.youtube.com/watch?v=nIXbHFn6Sfw
            </p>
        </motion.div>
    )
}

export default Pedagogical;