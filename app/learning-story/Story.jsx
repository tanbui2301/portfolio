import React from "react";
import { motion } from "motion/react";

const Story = () => {
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
                Learning Story
            </motion.h2>
            
            <div className="flex justify-center gap-40 mt-12 pl-14">
                <motion.p 
                initial={{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 0.4}}
                className="w-1/2">
                    <b>Name of Child:</b> Child A
                    <br></br>
                    <b>Date of Birth:</b> 15/06/2021
                    <br></br>
                    <b>Date of Observation:</b> June 10, 2024
                </motion.p>
                <motion.p 
                initial={{opacity: 0, x: 30}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 0.4}}
                className="w-1/2">
                    <b>Observer:</b> Minh Thu Ho
                    <br></br>
                    <b>Type of Setting:</b> Preschool classroom
                    <br></br>
                    <b>Classroom Location:</b> Sensory table
                </motion.p>
            </div>

            <motion.div 
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6, delay: 0.6}}
            className="flex justify-center gap-10 overflow-hidden mt-12">
                <img src="/learning-story-01.png" className="w-1/2" alt="Learning Story Image 01"/>
                <img src="/learning-story-02.png" className="w-1/2" alt="Learning Story Image 02"/>
            </motion.div>

            <motion.h4 
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.8}}
            className="text-center text-2xl mt-12">
                Pouring, Scooping and Communicating
            </motion.h4>

            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 1.0}}
            className="text-left mt-6">
                Today, Child A made a wonderful demonstration of fine motor skills by starting to pour the colour pebbles from the white container to the purple cup by using their right hand and kept repeating the same action two to three times. 
                Then, they scooped the pebbles and intended to pour them into their cup again, but instead they poured into their peer funnel.
                <br></br>
                Then, when child C was trying to join in the activity, Child A quickly established their boundaries with clear and expressive language, they said “Hey, I didn’t say put some in there. I’m putting on my own”. 
                After that, they kept scratching the pebbles to their side.
                <br></br>
                Your focused attention on the pouring activity was impressive. 
                I appreciate your curiosity about the materials and your willingness to use different tools to scoop and transfer pebbles. 
                It was so great to see you use such a clear and strong language to express what you wanted to your friends. 
                Keep exploring and using your words to express your needs! Well done.
                <br></br>
                <b>Interpretation and Reflections</b>
                <br></br>
                Child A appeared to explore and develop their fine motor skills. 
                It seems that they love to using their hands to pour the pebbles into the container and transfer it to another. 
                Moreover, child A seems to be great at expressing language by using various vocabularies to communicate with their friends. 
                It appears that they really love to interact with their peers and try to join in the conversations. 
                Furthermore, Child A appeared "excited" and "curious" about what their peers were doing, as they kept looking at their friends' behaviour.
                <br></br>
                <b>Next Steps</b>
                <br></br>
                To improve child A' fine motor skills, providing them with materials that require more complex movements such as tongs or smaller tunnels to help them transfer the materials precisely. 
                Also, as an ECE, I can encourage child A to increase their communication and social skills by having activities that require them to use their strong language to communicate with their peers. 
                With these support and steps, Child A can continue to develop all of the domains areas. 
            </motion.p>

            <h4 className="text-center text-2xl mt-16">
                References
            </h4>

            <p className="mt-6 text-left">
                Ontario Ministry of Education. (2014a). Excerpts from “elect”: Foundational knowledge from the 2007 publication of early learning for every child today: A framework for Ontario early childhood settings. Government of Ontario. Retrieved from
                <br></br>
                <a href="/https://www.dufferincounty.ca/sites/default/files/rtb/Excerpts-from-Early-Learning-for-Every-Child-Today.pdf" className="underline">https://www.dufferincounty.ca/sites/default/files/rtb/Excerpts-from-Early-Learning-for-Every-Child-Today.pdf</a>
                <br></br>
                Focused Observations Chapter 4 Video 9
                <br></br>
                <a href="/https://youtu.be/fdZJiWnxhg0?si=KXxUZtueMaF7MqAV" className="underline">https://youtu.be/fdZJiWnxhg0?si=KXxUZtueMaF7MqAV</a>
            </p>
        </motion.div>
    )
}

export default Story;