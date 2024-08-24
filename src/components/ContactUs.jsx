import i18next from "i18next";
import { useTranslation } from "react-i18next";


const ContactUs = () => {

    const { t } = useTranslation('common')

    return (
        <section id="contact-us" className="w-[100vw] h-[100vh] max-sm:h-[75vh] mb-10" >
            <div className="w-full h-full bg-testimonials flex flex-col justify-center items-center relative">
                <div className="absolute inset-0 bg-black opacity-10 z-1"></div>

                <h2 className="font-bold uppercase text-2xl max-sm:text-base text-white z-10">
                    {t('contactus.heading')}
                </h2>

                <div className="w-[50%] md:w-[70%] lg:w-[60%] bg-black/60 backdrop-blur-md border-[3px] border-black/10 rounded-2xl max-lg:w-[70%] max-sm:w-[90%] max-sm:h-auto mt-10 max-sm:mt-5">

                    <form action="" className="p-10 max-sm:p-5 flex gap-5 max-sm:gap-2 flex-col">
                        <div className="w-full flex flex-wrap gap-4 max-sm:gap-2">
                            <div className="w-[100%] md:w-[50%] flex flex-col gap-2">
                                <label htmlFor="first-name" className={`text-white font-light ${i18next.language === 'ar' ? 'text-right' : ''}`}>
                                    {t('contactus.firstname')}
                                </label>
                                <input type="text" id="first-name" placeholder={t('contactus.firstnameplaceholder')}
                                    className={`px-5 py-2 rounded-lg outline-none max-sm:text-sm  ${i18next.language === 'ar' ? 'text-right' : ''}`}
                                />
                            </div>

                            <div className="w-[100%] md:w-[50%] flex flex-1 flex-col gap-2">
                                <label htmlFor="last-name" className={`text-white font-light ${i18next.language === 'ar' ? 'text-right' : ''}`}>
                                    {t('contactus.lastname')}
                                </label>
                                <input type="text" id="last-name" placeholder={t('contactus.firstnameplaceholder')}
                                    className={`px-5 py-2 rounded-lg outline-none max-sm:text-sm  ${i18next.language === 'ar' ? 'text-right' : ''}`}
                                />
                            </div>
                        </div>

                        <div className="w-[100%] flex flex-1 flex-col gap-2">
                            <label htmlFor="e-mail" className={`text-white font-light ${i18next.language === 'ar' ? 'text-right' : ''}`}>
                                {t('contactus.mail')}
                            </label>
                            <input type="email" id="e-mail" placeholder={t('contactus.firstnameplaceholder')}
                                className={`px-5 py-2 rounded-lg outline-none max-sm:text-sm ${i18next.language === 'ar' ? 'text-right' : ''}`}
                            />
                        </div>

                        <div className="w-[100%]  flex flex-1 flex-col gap-2">
                            <label htmlFor="message" className={`text-white font-light ${i18next.language === 'ar' ? 'text-right' : ''}`}>
                                {t('contactus.message')}
                            </label>
                            <textarea name="message" id="message" placeholder={t('contactus.firstnameplaceholder')}
                                className={`px-5 py-2 rounded-lg outline-none max-sm:text-sm ${i18next.language === 'ar' ? 'text-right' : ''}`}
                            />
                        </div>

                        <div className="w-full flex justify-center mt-7 max-sm:mt-5">
                            <button type="submit" className="w-[120px] bg-color-maroon text-white px-8 py-2 rounded-xl ">
                                {t('contactus.button')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default ContactUs