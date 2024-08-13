
const Hero = () => {
    return (
        <section className="relative">
            <div className='w-[100vw] h-[100vh] bg-hero bg-no-repeat bg-cover bg-left-bottom max-sm:bg-center flex flex-col justify-center items-start'>

                <div className='h-full w-full bg-hero-gradient absolute top-0 left-0 right-0 -z-5'></div>


                <div className='text-white ml-20 max-md:ml-8 max-sm:mx-5 w-[650px] max-md:w-[450px] max-sm:w-auto z-10 max-md:pt-[350px]'>
                    <h1 className="font-bold max-md:font-medium text-5xl max-md:text-4xl max-sm:text-[28px] leading-normal z-5 ">
                        Elevate Your Clean Game with Our Trusted Products.
                    </h1>

                    <h4 className="leading-normal text-2xl max-sm:text-base max-md:text-lg mt-4 ">
                        Since 1970, AlWazir Lix offers top-quality cleaning solutions for every need. Trusted across the Middle East, our diverse range ensures impeccable results.
                    </h4>


                </div>

                <button className="z-10 max-md:w-[200px] ml-20 max-md:ml-8 max-sm:ml-4 text-black rounded-full bg-white px-7 py-3 mt-8 hover:bg-black border border-white hover:text-white hover:border-white cursor-pointer">shop now</button>
            </div>
        </section>
    )
}
export default Hero