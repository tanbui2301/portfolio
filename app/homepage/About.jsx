import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'motion/react';

const About = () => {
    return (
        <motion.div id='about' className='w-full px-[12%] py-32 scroll-mt-20'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6}}>

            <motion.h4 
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
            className='text-center text-2xl mb-3'>
                Introduction
            </motion.h4>

            <motion.h2 
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
            className='text-center text-5xl'>
                About me
            </motion.h2>

            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>

                <motion.div 
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 0.6}}
                className='w-68 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.profile_img} alt='user' className='w-full rounded-3xl'/>
                </motion.div>

                <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay: 0.8}}
                className='flex-1'>
                    <p>
                        My name is Minh Thu Ho, I am currently studying Early Childhood Education Diploma at Humber Polytechnic. 
                        Throughout my studies journey, I have gained various of hands-on experiences from doing work placements, part time job related to professional, and professional knowledges to work with children, families and community.
                    </p>
                    <br></br>
                    <p>
                        During the time when I was in my home country, I am an English teaching assistance for a small centre provide English course for children from 6 to 12. 
                        Moreover, I am an aunt of a lovely and energetic 4-year-old nephew. 
                        From playing and taking care of him and other children in the centre when their parents are working, I have raised the passion and motivation to take care of children as my future career. 
                        From that, this portfolio will be a reflection for my whole studies journey to become a wonderful educator that dedicated to creating an inclusive and equitable learning environment that children can feel safe and welcomed. 
                    </p>
                </motion.div>
            </motion.div>

            <motion.h2 
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.8}}
            className='text-center text-5xl mt-32'>
                Land Acknowledgement
            </motion.h2>

            <motion.p 
            initial={{opacity: 0, y: 10}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 1.0}}
            className='my-12'>
                I want to acknowledge that I am grateful to be on the land that I reside to is located within the traditional and treaty lands of Missisaugas of the Credit. 
                I would like to thank for the First Nation people for sharing their traditional homeland and their world views with us, who are just settlers on this land. 
                I also understand that I need to have responsibility to protect this land and treat this land as my homeland. 
            </motion.p>

        </motion.div>
        
    )
}

export default About;