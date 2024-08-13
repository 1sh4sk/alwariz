import { BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="w-[100vw] h-[20vh] bg-[#212121] px-20 py-7">
            <div className="w-full h-full flex items-end justify-between">
                <div>
                    <p className="text-white font-light text-xs">© 2024 AlWazir. All Rights Reserved.</p>
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
        </footer>
    )
}
export default Footer