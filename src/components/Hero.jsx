import i18next from "i18next";
import { useTranslation } from "react-i18next";


const Hero = () => {


    const { t, i18n } = useTranslation('common');

    return (
        <section className="relative overflow-hidden">
            <div className={`w-[100vw] h-[100vh] bg-hero bg-no-repeat bg-cover bg-center max-sm:bg-center flex flex-col justify-center items-start 
            ${i18n.language === 'ar' ? 'items-end' : ''}
            `}>

                <div className='h-full w-full bg-hero-gradient absolute top-0 left-0 right-0 -z-5'></div>


                <div className={`text-white ml-20 max-md:ml-8 max-sm:mx-5 w-[650px] max-md:w-[450px] max-sm:w-auto z-10 max-md:pt-[350px]
                 ${i18n.language === 'ar' ? 'mr-20' : ''}
                `}>

                    <h1 className={`
                    
                    font-bold max-md:font-medium text-5xl max-md:text-4xl max-sm:text-[28px] leading-normal z-5 text-left
                    
                    ${i18next.language === 'ar' ? 'text-right' : ''}`}>
                        {t('hero.heading')}
                    </h1>

                    <h4 className={`leading-normal text-2xl max-sm:text-base max-md:text-lg mt-4 
                     ${i18n.language === 'ar' ? 'text-right' : ''}
                    `}>
                        {t('hero.subheading')}
                    </h4>


                </div>

                <button className={`z-10 max-md:w-[200px] ml-20 max-md:ml-8 max-sm:ml-4 text-black rounded-full bg-white px-7 py-3 mt-8 hover:bg-black border border-white hover:text-white hover:border-white cursor-pointer
                 ${i18n.language === 'ar' ? 'mr-24' : ''}
                `}

                >{t('hero.button')}</button>
            </div>
        </section>
    )
}
export default Hero