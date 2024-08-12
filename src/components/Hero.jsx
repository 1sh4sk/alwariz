
const Hero = () => {
    return (
        <section className="relative">
            <div className='w-[100vw] h-[100vh] bg-hero bg-no-repeat bg-cover bg-left-bottom flex justify-start items-center'>

                <div className='h-full w-full bg-hero-gradient absolute top-0 left-0 right-0 z-1'></div>
                <div className='text-white ml-20 w-[650px] z-10'>
                    <h1 className="font-bold text-5xl leading-normal">
                        Elevate Your Clean Game with Our Trusted Products.
                    </h1>

                    <h4 className="leading-normal text-xl mt-4 ">
                        Since 1970, AlWazir Lix offers top-quality cleaning solutions for every need. Trusted across the Middle East, our diverse range ensures impeccable results.
                    </h4>

                    <button className="text-black rounded-full bg-white px-7 py-3 mt-8">shop now</button>
                </div>
            </div>
        </section>
    )
}
export default Hero