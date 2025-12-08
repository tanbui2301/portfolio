import React from "react";
import { motion } from "motion/react";

const RUIP = () => {
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
                Resources Use in Practice
            </motion.h2>

            <motion.h4 
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 0.3}}
            className="text-left text-2xl italic mt-12 text-amber-600 ">
                How does learning happen? Ontario's Pedagogy for Early Years
            </motion.h4>

            <motion.div
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.5, delay: 0.4}}
            className="flex justify-center mt-6">
                <img src="/RUIP-01.png" alt="RUIP image 01" className="w-3/6 object-cover"/>
            </motion.div> 

            <p className="text-center mt-2">
                (OMEd, 2014b, p.1)
            </p>

            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.5}}
            className="text-left mt-6">
                During the journey to become an ECE, I consistently referred to the Excerpts from E.L.E.C.T to structure and interpret children's learning experiences. 
                I also use this framework to identify specific developmental milestones during my observation and documentation progress. 
                From that, I can make sure my interpretations are accurate. 
                I choose to use this resource to put in portfolio because it shapes my practice to view children as a capable and curious co-learners. 
            </motion.p>

            <motion.h4 
            initial={{opacity: 0, x: -25}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 0.6}}
            className="text-left text-2xl italic mt-12 text-amber-600">
                Code of Ethics and Standards of Practice
            </motion.h4>

            <motion.div 
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.5, delay: 0.7}}
            className="flex justify-center mt-6">
                <img src="/RUIP-02.png" alt="RUIP image 02" className="w-3/6 object-cover"/>
            </motion.div>
            
            <p className="text-center mt-2">
                (College of Early Childhood Educators, 2017)
            </p>

            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            className="text-left mt-6">
                This document provides the ethical and professional standards of my practice as an ECE. 
                It guides my moral decision-making and ensures that the well-being and the rights of children and families are always being prioritized. 
                Moreover, the Standards of Practice are a crucial part as they provide the details of the expectations for the ECE to work with children and families. 
                I use this resource to ensure all my interactions with other colleagues, children and families follow the confidentiality, integrity and respect. 
                <br></br>
                During every placement, when I documenting children's behaviour, I always follow strictly to the standards concerning about the privacy and professional boundaries. 
                From that, this document is my self-assessment and the rule for me to maintain the professional standards that an RECE should have. 
            </motion.p>

            <motion.h4 
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 0.9}}
            className="text-left text-2xl italic mt-12 text-amber-600">
                The Child Care and Early Years Act, 2014 (CCEYA).
            </motion.h4>
            
            <motion.div 
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.5, delay: 1}}
            className="flex mt-6">
                <a href="/cceya-certificate.pdf">
                    <img src="/cceya-certificate.jpg" alt="RUIP image 02" className="w-3/4 object-cover"/>
                </a>
            </motion.div>

            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 1.1}}
            className="text-left mt-6">
                The last resource that I choose is the Child Care and Early Years Act, 2014 because it helps me to understand the legal compulsory things in the licensed child care programs in Ontario. 
                Moreover, the important thing in this document is that it places safety and protection first so from that it is vital for me to referred this resource as a professional responsibility to ensure that children can learn in a safe and inclusive learning environment in my care. 
                Besides, it also helps me to ensure that families can belief to choose the place for their children to learn and play. 
                Furthermore, through these regulations it guide my approach to create a warm and welcoming environment where children can foster their developmental growth.
            </motion.p>
        </motion.div>
    )
}

export default RUIP;