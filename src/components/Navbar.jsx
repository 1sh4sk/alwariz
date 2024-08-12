import Logo from '../assets/logo.png'
import { navLinks } from '../constants'

const Navbar = () => {


    return (
        <header className={`z-10 w-full h-24 flex justify-between items-center px-16 absolute top-0 left-0 right-0 transition-all duration-500`}>

            <div>
                <a href='#hero'>
                    <img src={Logo} alt="logo" width={80} height={80} className='object-cover' />
                </a>
            </div>

            <nav>
                <div className='flex gap-8 items-center'>
                    {
                        navLinks.map((item, i) => (
                            <a href={item.url} key={i} className={`font-medium text-[16px] transition-all duration-400 text-white cursor-pointer`}>
                                {item.title}
                            </a>
                        ))
                    }
                    <a href="#" className='text-white font-normal text-[14px] bg-color-maroon px-5 py-1.5 rounded-full cursor-pointer'>Contact Us</a>
                </div>
            </nav>

        </header>
    )
}
export default Navbar