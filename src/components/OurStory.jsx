import { useTranslation } from 'react-i18next'
import i18next from 'i18next';

const OurStory = () => {

    const { t } = useTranslation('common');

    return (
        <section id="about-us" className='w-[100vw] h-[100vh] max-lg:h-auto px-20 max-sm:px-5 mb-10 max-lg:mt-[100px] max-md:mt-[60px] max-sm:mt-[40px]'>

            <div className='flex max-lg:flex-col w-full h-full justify-center items-center gap-20  max-lg:gap-0'>

                <div className='w-[50%] max-lg:w-full'>
                    <h2 className={`font-medium text-5xl max-md:text-4xl mb-10 max-sm:mb-5 
                    ${i18next.language === 'ar' ? 'text-right' : ''}
                    `}>
                        {t('ourstory.heading')}
                    </h2>
                    <p className={`text-xl max-md:text-lg max-sm:text-base mb-5  ${i18next.language === 'ar' ? 'text-right' : ''}`}>
                        {t('ourstory.para1')}
                    </p>

                    <p className={`text-xl max-md:text-lg mb-5 max-sm:text-base ${i18next.language === 'ar' ? 'text-right' : ''}`}>
                        {t('ourstory.para2')}
                    </p>

                    <p className={`text-xl  max-md:text-lg max-sm:text-base mb-5  ${i18next.language === 'ar' ? 'text-right' : ''}`}>
                        {t('ourstory.para3')}
                    </p>
                </div>


                <div className='w-[50%] max-lg:w-[80%] max-md:w-[90%] max-sm:w-auto h-full max-lg:h-[700px] max-md:h-[500px] flex justify-center items-center'>

                    <div className='w-[100%] h-[80%]  max-sm:w-full'>
                        <img src="https://ik.imagekit.io/99y1fc9mh/alwariz/assets/story1-BrRHXetJ.png?updatedAt=1724299265045" alt="our story" className='w-full h-full object-cover rounded-3xl' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OurStory