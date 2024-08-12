import Factory from '../assets/factory.png'
import Certificate from '../assets/certificate.jpg'
import Map from '../assets/map.png'
import Open from '../assets/open.svg'

const Grid = () => {
    return (
        <section className="w-[100vw] h-[1200px] px-20 py-[100px]">
            <div className="w-full h-full flex gap-[80px]">
                <div className="w-[50%] h-full flex flex-col relative">
                    <img src={Factory} alt="factory image" className='h-full w-full object-over rounded-2xl' />

                    <img src={Open} alt="" width={180} height={180} className='absolute -top-[80px] right-0' />
                    <div className='flex gap-[20px] mt-5 items-center'>
                        <h6 className='font-bold text-lg'>Sub Brands</h6>
                        <p className='font-medium'>Explore our 6 premium sub-brands</p>
                    </div>
                </div>

                <div className="w-[50%] h-full flex flex-col gap-[50px]">
                    <div className='w-full h-[50%]'>
                        <img src={Map} alt="" className='h-[85%] w-full rounded-2xl object-cover' />
                        <div className='flex gap-[20px] mt-5 items-center'>
                            <h6 className='font-bold text-lg'>Locations</h6>
                            <p className='font-medium'>Our top-quality products across the Middle East</p>
                        </div>
                    </div>

                    <div className='w-full h-[50%]'>
                        <img src={Certificate} alt="" className='h-[85%] w-full rounded-2xl object-cover' />

                        <div className='flex gap-[20px] mt-5 items-center'>
                            <h6 className='font-bold text-lg'>Registered</h6>
                            <p className='font-medium'>We are a fully registered and trusted company</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Grid