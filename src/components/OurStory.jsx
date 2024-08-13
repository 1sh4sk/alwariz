import Story from '../assets/story.png'

const OurStory = () => {
    return (
        <section id="about-us" className='w-[100vw] h-[100vh] max-lg:h-auto px-20 max-sm:px-5 mb-10 max-lg:mt-[100px] max-md:mt-[60px] max-sm:mt-[40px]'>

            <div className='flex max-lg:flex-col w-full h-full justify-center items-center gap-20  max-lg:gap-0'>

                <div className='w-[50%] max-lg:w-full'>
                    <h2 className='font-medium text-5xl max-md:text-4xl mb-10 max-sm:mb-5'>Our story</h2>
                    <p className='text-xl max-md:text-lg max-sm:text-base mb-5 text-justify'>
                        AlWazir Cleaning, specializes in the production and distribution
                        of multi-purpose cleaning products. Founded in Syria in1970, AlWazir Cleaning aspires to provide comprehensive solutions that cover the
                        different cleaning needs of clients, from household cleaning to personal care
                        products.
                    </p>

                    <p className='text-xl max-md:text-lg mb-5 text-justify max-sm:text-base'>
                        Over the years, the company expanded to Jordan, Iraq, Turkey, all the way to
                        Saudi Arabia by the year 2021.

                    </p>

                    <p className='text-xl max-md:text-lg max-sm:text-base mb-5 text-justify'>

                        Today, AlWazir’s product range includes over 250 products in many shapes and
                        sizes to meet the everchanging needs of customers in Saudi Arabia and Middle
                        East.
                    </p>
                </div>


                <div className='w-[50%] max-lg:w-[80%] max-md:w-[90%] max-sm:w-auto h-full max-lg:h-[700px] max-md:h-[500px] flex justify-center items-center'>

                    <div className='w-[90%] h-[80%] max-sm:w-full'>
                        <img src={Story} alt="our story" className='w-full h-full object-fit rounded-3xl' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OurStory