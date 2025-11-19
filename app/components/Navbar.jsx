import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false);

    const sideMenuRef = useRef();
    
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    const [openSubMenu, setOpenSubMenu] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    },[])

    return (
        <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={assets.header_background} alt='Header background' className='w-full' />
        </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href='#top'>
                    <Image src={assets.logo} className='w-35 cursor-pointer mr-14' alt='logo' />
                </a>

                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-11 py-3 bg-white/50 shadow-sm leading-6'>
                    <li><a className='font-serif whitespace-nowrap' href='#top'>Home</a></li>
                    <li><a className='font-serif whitespace-nowrap' href='#resume-awards'>Resumé/Awards</a></li>
                    <li><a className='font-serif whitespace-nowrap' href='#philosophy'>Philosophy</a></li>
                    <li className='relative group'>
                        <a className='font-serif hover:text-gray-500 flex items-center cursor-pointer' href='#curriculum-pedagory'>Curriculum & Pedagogy ▾</a>
                        
                        {/* Dropdown Menu */}
                        <ul className='absolute top-full left-0 bg-[#ffffff] text-black mt-3 rounded shadow-lg w-45 opacity-0 invisible group-hover:opacity-100 group-hover:visible transaction-all duration-200'>
                            <li className='px-4 py-2 hover:bg-gray-300 cursor-pointer'>
                                <a className='font-serif' href='#RUIP'>Resources Used In Practice</a>
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-300 cursor-pointer'>
                                <a className='font-serif' href='#pedagogical-doc'>Pedagogical Documentation</a>
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-300 cursor-pointer'>
                                <a className='font-serif' href='#learn-story'>Learning Story</a>
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-300 cursor-pointer'>
                                <a className='font-serif' href='#meaning-artifact'>Meaningful Artifacts</a>
                            </li>
                        </ul>
                    </li>
                    <li><a className='font-serif' href='#CPL'>Continuous Professional Learning</a></li>
                    <li><a className='font-serif' href='#references'>References</a></li>
                </ul>

                <div className='flex items-center gap-5'>
                    <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 py-3 font-serif'>Contact <Image src={assets.upper_right_arrow_icon} alt='' className='w-6' /></a>

                    <button>
                        <Image src={assets.moon_icon} alt='Moon' className='w-6 ' />
                    </button>
 
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='Black menu' className='w-6'/>
                    </button>
                </div>

                {/* ----- mobile menu ----- */}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-66 z-50 h-screen bg-rose-50 transition duration-500'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='Close black' className='w-5 cursor-pointer' />
                    </div>

                    <li><a className='font-serif' onClick={closeMenu} href='#top'>Home</a></li>
                    <li><a className='font-serif' onClick={closeMenu} href='#resume-awards'>Resumé/Awards</a></li>
                    <li><a className='font-serif' onClick={closeMenu} href='#philosophy'>Philosophy</a></li>
                    
                    {/* ----- Hybrid link + dropdown ----- */}
                    <li className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <a className='font-serif flex-1' onClick={closeMenu} href='#curriculum-pedagory'>Curriculum & Pedagogy</a>

                            {/* --- Arrow button toggles dropdown --- */}
                            <button onClick={(e) => {
                                e.stopPropagation(); // prevent triggering link
                                setOpenSubMenu(!openSubMenu);
                                }} className='text-3xl px-2'>
                                {openSubMenu ? '▴' : '▾'}
                            </button>
                        </div>

                        {/* --- Dropdown items --- */}
                        {openSubMenu && (
                            <ul className='p-4 mt-2 flex flex-col gap-2 text-sm bg-rose-100'>
                                <li>
                                    <a className='font-serif' onClick={closeMenu} href='#RUIP'>
                                        Resources Used In Practice
                                    </a>
                                </li>
                                <li>
                                    <a className='font-serif' onClick={closeMenu} href='#pedagogical-doc'>
                                        Pedagogical Documentation
                                    </a>
                                </li>
                                <li>
                                    <a className='font-serif' onClick={closeMenu} href='learn-story'>
                                        Learning Story
                                    </a>
                                </li>
                                <li>
                                    <a className='font-serif' onClick={closeMenu} href='meaning-artifact'>Meaningful Artifacts</a>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li><a className='font-serif' onClick={closeMenu} href='#CPL'>Continuous Professional Learning</a></li>
                    <li><a className='font-serif' onClick={closeMenu} href='#contact'>Contact me</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar;