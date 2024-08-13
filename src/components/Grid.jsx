import Factory from '../assets/factory.png'
import Certificate from '../assets/certificate.jpg'
import Map from '../assets/map.png'
import Open from '../assets/open.svg'

const Grid = () => {
    return (
        <section className="w-[100vw] h-[1100px] max-lg:h-auto px-20 max-sm:px-5 py-[100px] max-sm:py-[60px]">
            <div className="w-full h-full flex gap-[80px] max-md:gap-[50px] max-sm:gap-[30px] max-lg:flex-col">
                <div className="w-[50%] max-lg:w-full h-full flex flex-col relative">
                    <img src={Factory} alt="factory image" className='h-full w-full object-over rounded-2xl' />

                    <img src={Open} alt="" width={180} height={180} className='absolute -top-[80px] max-sm:-top-[45px] right-0 max-sm:w-[100px] max-sm:h-[100px] ' />

                    <div className='flex gap-[20px] max-sm:gap-[10px]  mt-5 max-sm:mt-3 items-center'>
                        <h6 className='font-bold text-lg max-sm:text-sm'>Sub Brands</h6>
                        <p className='font-medium max-sm:text-sm'>Explore our 6 premium sub-brands</p>
                    </div>
                </div>

                <div className="w-[50%] max-lg:w-full h-full flex flex-col gap-[50px] max-md:gap-[30px] ">
                    <div className='w-full h-[48%] max-md:h-[450px] max-lg:h-[600px] max-sm:h-[300px]'>
                        <img src={Map} alt="" className='h-[85%] w-full rounded-2xl object-cover ' />
                        <div className='flex gap-[20px] max-sm:gap-[10px]  mt-5 max-sm:mt-3 items-center'>
                            <h6 className='font-bold text-lg max-sm:text-sm'>Locations</h6>
                            <p className='font-medium max-sm:text-sm'>Our top-quality products across the Middle East</p>
                        </div>
                    </div>

                    <div className='w-full h-[48%]'>
                        <img src={Certificate} alt="" className='h-[85%] w-full rounded-2xl object-cover' />

                        <div className='flex gap-[20px] max-sm:gap-[10px]  mt-5 max-sm:mt-3 items-center'>
                            <h6 className='font-bold text-lg max-sm:text-sm'>Registered</h6>
                            <p className='font-medium max-sm:text-sm'>We are a fully registered and trusted company</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Grid