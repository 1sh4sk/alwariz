import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const Grid = () => {

    const { t } = useTranslation('common');

    return (
        <section className="w-[100vw] h-[1100px] max-lg:h-auto px-20 max-sm:px-5 py-[100px] max-sm:py-[60px]">
            <div className="w-full h-full flex gap-[80px] max-md:gap-[50px] max-sm:gap-[30px] max-lg:flex-col">
                <div className="w-[50%] max-lg:w-full h-full flex flex-col relative">
                    <img src="https://ik.imagekit.io/99y1fc9mh/alwariz/assets/factory-CElGA76L.png?updatedAt=1724299245949" alt="factory image" className='h-full w-full object-cover
                     rounded-2xl' />

                    <img src="https://ik.imagekit.io/99y1fc9mh/alwariz/assets/open-kgM8Fhp3.svg?updatedAt=1724299232721" alt="" width={180} height={180} className='absolute -top-[80px] max-sm:-top-[45px] right-0 max-sm:w-[100px] max-sm:h-[100px] ' />

                    <div className={`flex ${i18next.language === 'ar' && 'flex-row-reverse text-right'} gap-[20px] max-sm:gap-[10px]  mt-5 max-sm:mt-3 items-center`}>
                        <h6 className='font-bold text-lg max-sm:text-sm'>
                            {t('grid.subbrands.heading')}
                        </h6>
                        <p className='font-medium max-sm:text-sm'>
                            {t('grid.subbrands.para')}
                        </p>
                    </div>
                </div>

                <div className="w-[50%] max-lg:w-full h-full flex flex-col gap-[50px] max-md:gap-[30px] ">
                    <div className='w-full h-[48%] max-md:h-[450px] max-lg:h-[600px] max-sm:h-[300px]'>
                        <img src="https://ik.imagekit.io/99y1fc9mh/alwariz/assets/map-QDHVCkwW.png?updatedAt=1724299238670" alt="" className='h-[85%] w-full rounded-2xl object-cover ' />
                        <div className={`flex  ${i18next.language === 'ar' && 'flex-row-reverse text-right'} gap-[20px] max-sm:gap-[10px]  mt-5 max-sm:mt-3 items-start`}>
                            <h6 className='font-bold text-lg max-sm:text-sm'>
                                {t('grid.locations.heading')}
                            </h6>
                            <p className='font-medium max-sm:text-sm'>
                                {t('grid.locations.para')}
                            </p>
                        </div>
                    </div>

                    <div className='w-full h-[48%]'>
                        <img src="https://ik.imagekit.io/99y1fc9mh/alwariz/assets/certificate-BpLXjPQg.jpg?updatedAt=1724299267894" alt="" className='h-[85%] w-full rounded-2xl object-cover' />

                        <div className={`flex  ${i18next.language === 'ar' && 'flex-row-reverse text-right'} gap-[20px] max-sm:gap-[10px]  mt-5 max-sm:mt-3 items-start`}>
                            <h6 className='font-bold text-lg max-sm:text-sm'>
                                {t('grid.registered.heading')}
                            </h6>
                            <p className='font-medium max-sm:text-sm'>
                                {t('grid.registered.para')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Grid