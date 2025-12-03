import React from "react";
import { motion } from "motion/react"

const Artifact = () => {

    const artifacts = [
        {
            title: "The Flower of Thankfulness", img: "/meaningful-artifact-01.jpg", 
            description: "I selected this handprint flower canvas from my first placement as my first artifact because it powerfully illustrates my application of Emergent Curriculum. This canvas created together by children in the infant room that aligns well with my philosophy of teaching which based on children natural curiosity to touch, colours and textures. With the guidance from the Educators, this canvas has been made by use infant interest which is sensory exploration to make this beautiful flower."
        },
        {
            title: "Thank you Card", img: "/meaningful-artifact-02.jpg", 
            description: "This Thank you card is from my last placement and it also show all my hard works has been granted. As they show appreciations for me with warm notes, has confirm that I successfully help them on their learning journey. Moreover, this artifact show that I have succeed in create a safe and welcome environment where children can feel they valued and belong in the classroom."
        }
    ]

    return (
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6}}
        className="w-full px-[12%] pt-36 pb-36 scroll-mt-20">
            <motion.h2 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.3}}
            className="text-center text-5xl text-pink-800 mb-24">
                Meaningful Artifacts
            </motion.h2>

            {artifacts.map((a, i) => (
                <motion.section
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay: 0.5}}
                key={i}
                className={`flex flex-col items-center gap-10 lg:gap-16
                ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-md border-gray-600">
                            <img src={a.img} alt={a.title} className="w-full h-full object-cover"/>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <p className="text-2xl font-semibold mb-4 text-pink-600">
                            {a.title}
                        </p>
                        <p className="leading-relaxed mb-12">
                            {a.description}
                        </p>
                    </div>
                </motion.section>
            ))}
        </motion.div>
    )
}

export default Artifact;