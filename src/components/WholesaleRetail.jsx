import i18next from "i18next";
import { useTranslation } from "react-i18next"

const WholesaleRetail = () => {

    const { t } = useTranslation('common');

    return (
        <section id="wholesale-and-retail" className="w-[100vw] px-20 max-sm:px-5 py-[150px] max-lg:py-[100px] max-sm:py-[60px] flex gap-10 max-lg:flex-col max-lg:justify-center max-lg:items-center">
            <div className="w-[65vw] max-lg:w-[100%] h-[85vh] max-lg:h-[70vh] max-sm:h-[60vh] bg-wholesale bg-no-repeat bg-cover bg-center rounded-xl relative overflow-hidden">
                <div className="bg-black opacity-20 absolute inset-0 z-1"></div>

                <div className="w-full h-full flex flex-col justify-between px-10 max-sm:p-8 py-10">
                    <p className={`text-white max-sm:text-sm z-10
                    ${i18next.language === 'ar' ? 'text-right w-[200px] max-sm:w-[180px] ml-[75%] max-lg:xl-[65%] max-md:ml-[55%] max-sm:ml-[38%]' : 'w-[220px]'}`}>
                        {t('wholesaleretail.subheading')}
                    </p>

                    <h3 className={`text-white font-normal text-6xl max-sm:text-5xl z-10 
                    ${i18next.language === 'ar' ? 'text-right w-[180px] max-sm:w-[150px] ml-[75%] max-md:ml-[57%] max-sm:ml-[50%]' : 'w-[220px] '}
                    `}>
                        {t('wholesaleretail.heading')}
                    </h3>
                    <div className="z-10">
                        <button className={`bg-white px-8 py-3 rounded-full z-10 font-medium cursor-pointer ${i18next.language === 'ar' ? 'ml-[80%] max-md:ml-[68%] max-sm:ml-[53%]' : ''}`}>
                            {t('wholesaleretail.button')}
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative overflow-hidden w-[35vw] max-lg:w-[100%] h-[85vh] max-lg:h-[70vh] max-sm:h-[60vh]   bg-products bg-no-repeat bg-cover bg-center rounded-xl">
                <div className="bg-black opacity-10 absolute inset-0 z-1"></div>

                <div className="w-full h-full flex flex-col justify-between px-10 max-sm:p-8 py-10">
                    <p className={`text-white max-sm:text-sm z-10
                ${i18next.language === 'ar' ? 'text-right w-[90px] max-sm:w-[80px] ml-[75%] max-xl:ml-[65%] max-lg:ml-[75%] max-sm:ml-[72%]' : 'w-[220px] '}`}>
                        {t('products.subheading')}
                    </p>


                    <div className="z-10">
                        <h3 className={`text-white font-normal text-5xl max-sm:text-4xl mb-10 z-10 
                        ${i18next.language === 'ar' ? 'text-right w-[130px] max-sm:w-[100px] ml-[65%]  max-xl:ml-[50%] max-lg:ml-[70%] max-md:ml-[65%] ' : 'w-[220px] '}
                        `}>
                            {t('products.heading')}
                        </h3>

                        <button className={`bg-white px-8 py-3 rounded-full z-10 font-medium cursor-pointer ${i18next.language === 'ar' ? 'ml-[70%]  max-xl:ml-[55%] max-lg:ml-[72%] max-md:ml-[67%] max-sm:ml-[60%]' : ''}`}>
                            <a href="#">{t('products.button')}</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WholesaleRetail