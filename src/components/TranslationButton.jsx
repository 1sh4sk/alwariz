import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"

const TranslationButton = () => {

    const initialLanguage = localStorage.getItem('language') || 'en';
    const initialButtonLabel = initialLanguage === 'en' ? 'عربي' : 'English';

    const [t, i18n] = useTranslation('common');
    const [language, setLanguage] = useState(initialButtonLabel);

    const handleLanguage = (language) => {

        if (language === 'English') {
            setLanguage('عربي');
            i18n.changeLanguage('en');
            localStorage.setItem('language', 'en');
        } else {
            setLanguage('English');
            i18n.changeLanguage('ar');
            localStorage.setItem('language', 'ar');
        }
    }

    useEffect(() => {
        i18n.changeLanguage(initialLanguage);
    }, [i18n, initialLanguage])

    return (
        <div>
            <button
                onClick={() => handleLanguage(language)}
                className={`bg-white px-5  rounded-lg h-[32px] w-[80px] flex items-center justify-center`}
            >
                {language}
            </button>
        </div>
    )
}
export default TranslationButton