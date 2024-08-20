import { useTranslation } from "react-i18next";
import { BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {

    const { t } = useTranslation('common')

    return (
        <footer className="w-[100vw] h-auto bg-[#212121] px-20 max-sm:px-5 py-7">
            <div className="w-full h-full flex max-sm:flex-col-reverse max-sm:items-center max-sm:justify-center max-sm:gap-10  items-end justify-between">
                <div>
                    <p className="text-white font-light text-xs">
                        © {new Date().getFullYear()} {t('footer.rights')}
                    </p>
                </div>

                <div className="flex gap-5">
                    <div className="bg-black p-2 rounded-lg">
                        <a href="#">
                            <BsLinkedin className="text-white text-lg" />
                        </a>
                    </div>
                    <div className="bg-black p-2 rounded-lg">
                        <a href="#">
                            <FaInstagram className="text-white text-lg" />
                        </a>
                    </div>
                    <div className="bg-black p-2 rounded-lg">
                        <a href="#">
                            <FaSquareXTwitter className="text-white text-lg" />
                        </a>
                    </div>
                    <div className="bg-black p-2 rounded-lg">
                        <a href="#">
                            <BsYoutube className="text-white text-lg" />
                        </a>
                    </div>
                </div>

            </div>
            <p className="text-white text-xs text-center font-light mt-10 max-sm:mt-3">
                {t('footer.credits')}
            </p>
        </footer>
    )
}
export default Footer