import { useState } from "react";
import { useTranslation } from "react-i18next"

const TranslationButton = () => {

    const [t, i18n] = useTranslation('common');
    const [language, setlanguage] = useState('عربي');

    const handleLanguage = (language) => {

        if (language === 'English') {
            setlanguage('عربي');
            i18n.changeLanguage('en')
        } else {
            setlanguage('English');
            i18n.changeLanguage('ar')
        }
    }

    return (
        <div>
            <button
                onClick={() => handleLanguage(language)}
                className={`bg-white px-5  rounded-lg h-[32px] w-[80px] flex items-center justify-center`}
            >{language}</button>
        </div>
    )
}
export default TranslationButton