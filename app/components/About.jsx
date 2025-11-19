import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center text-2xl mb-3'>Introduction</h4>
            <h2 className='text-center text-5xl'>About me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-68 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.profile_img} alt='user' className='w-full rounded-3xl'/>
                </div>
                <div className='flex-1'>
                    <p>
                        My name is Minh Thu Ho, 
                        I am currently studying Early Childhood Education Diploma at Humber Polytechnic. 
                        Throughout my studies journey, I have gained various of hands-on experiences from doing placements and professional knowledges to work with children, families and community.
                    </p>
                    <br></br>
                    <p>
                        During the time when I was in my home country, I am an aunt of a lovely and energetic 4-year-old nephew. 
                        From playing and taking care of him when his parents are working, I have raised the passion and motivation to take care of children as my future career. 
                        From that, this portfolio will be a reflection for my whole studies journey to become a wonderful educator that dedicated to creating an inclusive and equitable learning environment that children can feel safe and welcomed. 
                    </p>
                </div>
            </div>

            <h2 className='text-center text-5xl mt-32'>Land Acknowledgement</h2>
            <p className='my-12'>
                I want to acknowledge that I am grateful to be on the land that I reside to is located within the traditional and treaty lands of Missisaugas of the Credit. 
                I would like to thank for the First Nation people for sharing their traditional homeland and their world views with us, who are just settlers on this land. 
                I also understand that I need to have responsibility to protect this land and treat this land as my homeland. 
            </p>

        </div>
        
    )
}

export default About;