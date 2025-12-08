import React from "react";
import { motion } from "motion/react";

const CPL = () => {

    const cpl = [
        {
            title: "Children",
            img: "/children.jpg",
            description: (
                <>
                    <span className="italic text-rose-700">In order to </span>
                    strengthen children sense of belonging and other domains of development, 
                    <span className="italic text-rose-700"> I will </span>
                    make sure that every child's primary language and their home culture will incorporated into the learning environment and daily program planning. 
                    <br></br>
                    <br></br>
                    <b>Strategy 1: </b>
                    I will incorporate songs and stories from various countries to promote language development for the children and help foster the sense of belonging. 
                    <br></br>
                    <b>Strategy 2: </b>
                    I will review the program plan and child portfolio to make sure that one culturally or individually responsive activity is implemented and documented.
                </>
            )
        },
        {
            title: "Families",
            img: "/family.jpg",
            description: (
                <>
                    <span className="italic text-rose-700">In order to </span>
                    build stronger relationships with families, 
                    <span className="italic text-rose-700"> I will </span>
                    personally engage with three different families when they drop off or pick up their children. From that, meaningful couple minutes of communication and talking about child's strengths and learning goal for the week, it can help me to understand the child better and build a program that suitable for them to learn and play.
                    <br></br>
                    <br></br>
                    <b>Strategy 1: </b>
                    I will implement a simple journal to connect with families and send one open-ended question about a specific curiosity or activity that the child engage in the day and ask the family to write back a brief comment or answer.
                    <br></br>
                    <b>Strategy 2: </b>
                    I will establish a day which I can invite a parent by having a short conversation with them to contribute a item based on their culture such as sharing a family photo wearing cultural outfit to display at the classroom or invite them to the classroom to share about their culture stories.
                </>
            )
        },
        {
            title: "Colleagues",
            img: "/team.jpg",
            description: (
                <>
                    <span className="italic text-rose-700">In order to </span>
                    build better relationships with other colleagues to encourage collaboration, 
                    <span className="italic text-rose-700"> I will </span>
                    have monthly meetings with my colleagues to discuss best practices and strategies to help children learn in the learning environment starting my second month of employment.
                    <br></br>
                    <br></br>
                    <b>Strategy 1: </b>
                    I will be initiated in creating a survey among colleagues so that I can identify their style of teaching and way of working so that I can collaborate with them easier.
                    <br></br>
                    <b>Strategy 2: </b>
                    Trying to conclude each meeting by having a challenge for the colleagues. From this, all of the employees has chance to shared and collaborate together to finish the challenge.
                </>
            )
        },
        {
            title: "Communities",
            img: "/community.jpg",
            description: (
                <>
                    <span className="italic text-rose-700">In order to </span>
                    build connection with the communities, 
                    <span className="italic text-rose-700"> I will </span>
                    identify one local resource such as library to align with the children's curiosity and interests to raise the awareness about the community around where children lives.
                    <br></br>
                    <br></br>
                    <b>Strategy 1: </b>
                    I will research for the local library during non-program time to research for the cultural and literacy resources in the library
                    <br></br>
                    <b>Strategy 2: </b>
                    I will prioritize resources that directly align with the current dominant interests of the children.
                </>
            )
        },
        {
            title: "Environment",
            img: "/environment.jpg",
            description: (
                <>
                    <span className="italic text-rose-700">In order to </span>
                    promote deeper appreciation to the natural environment, 
                    <span className="italic text-rose-700"> I will </span>
                    practice outdoor inquiry activities focused on observation and interaction of the children with the natural materials each month beginning with the first three months of employment.
                    <br></br>
                    <br></br>
                    <b>Strategy 1: </b>
                    I will set up simple experiences such as scarvenger hunt or  planting activity with child friendly instructions to encourage children to explore more about the natural world.
                    <br></br>
                    <b>Strategy 2: </b>
                    let children collect natural materials in the outdoor play time. In the next day, wash and add these natural items to the indoor play or their art activity. From that, children can learn that these material can be reuse for the activity and they will respect and appreciate the world around us more.
                </>
            )
        }
    ]

    return (
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6}}
        className="w-full px-[12%] pt-36 pb-16 scroll-mt-20">
            <motion.h2
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            className="text-center text-5xl text-pink-800">
                Continuous Professional Learning
            </motion.h2>

            <motion.p 
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.4}}
            className="text-center mt-12 mb-20 text-xl">
                This section outlines my S.M.A.R.T Goals for professional growth in several components including supporting children, engaging with families, collaborating with colleagues, contributing to the communities and the environments. 
            </motion.p>

            {cpl.map((c, i) => (
                <motion.section
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay: 0.6}}
                key={i}
                className={`flex flex-col items-center gap-10 lg:gap-16 mb-12
                ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="w-full max-w-md aspect-square overflow-hidden shadow-md border-gray-600">
                            <img src={c.img} alt={c.title} className="w-full h-full object-cover"/>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <p className="text-2xl font-semibold mt-10 mb-4 text-cyan-500">
                            {c.title}
                        </p>
                        <p className="leading-relaxed mb-12">
                            {c.description}
                        </p>
                    </div>
                </motion.section>
            ))}
        </motion.div>
    )
}

export default CPL;