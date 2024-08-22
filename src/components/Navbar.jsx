import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import TranslationButton from './TranslationButton';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { t } = useTranslation('common');

    const navLinks = t('navbar.navlinks', { returnObjects: true }) || [];

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }


    return (
        <header className={` z-50 w-[100vw] h-24  px-16 max-md:px-10 max-sm:px-5 md:px-14 absolute top-0 left-0 right-0 transition-all duration-500 `}>
            <div className={`w-full h-full flex justify-between items-center px-[20px] max-md:pl-[0px] max-md:pr-[30px] max-sm:px-[15px] max-sm:pl-[0px] max-lg:mt-[10px] z-10`}>
                <div>
                    <a href='#hero z-10'>
                        <img src="https://ik.imagekit.io/99y1fc9mh/alwariz/assets/logo-BgiSQs5c.png?updatedAt=1724299244804" alt="logo" width={80} height={80} className='object-fit z-10 max-sm:h-[50px] max-sm:w-[60px]' />
                    </a>
                </div>
                <div className='flex gap-10 max-sm:gap-5 items-center '>

                    <nav className={`max-lg:absolute left-0 max-lg:w-full max-lg:mx-14 max-sm:mx-3 max-md:mx-6 max-lg:items-center transition-all duration-[500ms] max-lg:justify-center max-lg:-z-10 ${clicked ? 'top-5  max-lg:opacity-1' : '-top-5  max-lg:opacity-0 '}`} >


                        <div className={`flex  gap-8 items-center justify-center max-lg:flex-col ${clicked ? 'max-lg:backdrop-blur-lg max-lg:bg-black/20 max-lg:opacity-1 gap-4' : 'max-lg:backdrop-blur-md max-lg:opacity-0 '} transition-all duration-[500ms] max-lg:h-full max-lg:p-10 max-lg:w-[90%] max-md:w-[92%] max-lg:rounded-3xl max-lg:border-2 max-lg:border-white/30 max-lg:items-center max-lg:pt-20`}>
                            {
                                navLinks.map((item, i) => (
                                    <a href={item.url} key={i} className={`font-medium text-[16px] transition-all duration-400 text-white cursor-pointer hover:text-black hover:bg-white px-4 py-2 rounded-full`}>
                                        {item.title}
                                    </a>
                                ))
                            }
                            <a href="https://linktr.ee/alwazir.sa" target="_blank" rel="noreferrer" className='text-white font-normal text-[14px] bg-color-maroon px-5 py-1.5 rounded-full cursor-pointer w-[120px] text-center'>{t('navbar.navbutton')}</a>
                        </div>
                    </nav>

                    <TranslationButton />

                    {clicked ? <p onClick={handleClick}
                        className='cursor-pointer text-white text-2xl font-medium'>X</p> : <FaBars className='text-white text-2xl cursor-pointer lg:hidden z-10' onClick={handleClick} />}


                </div>
            </div>
        </header>
    )
}
export default Navbar