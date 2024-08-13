import Story from '../assets/story.png'

const OurStory = () => {
    return (
        <section id="about-us" className='w-[100vw] h-[100vh] px-20 mb-10'>
            <div className='flex w-full h-full justify-center items-center gap-20'>
                <div className='w-[50%]'>
                    <h2 className='font-medium text-5xl mb-10'>Our story</h2>
                    <p className='text-xl mb-5 text-justify'>
                        AlWazir Cleaning, specializes in the production and distribution
                        of multi-purpose cleaning products. Founded in Syria in1970, AlWazir Cleaning aspires to provide comprehensive solutions that cover the
                        different cleaning needs of clients, from household cleaning to personal care
                        products.
                    </p>

                    <p className='text-xl mb-5 text-justify'>
                        Over the years, the company expanded to Jordan, Iraq, Turkey, all the way to
                        Saudi Arabia by the year 2021.

                    </p>

                    <p className='text-xl mb-5 text-justify'>

                        Today, AlWazir’s product range includes over 250 products in many shapes and
                        sizes to meet the everchanging needs of customers in Saudi Arabia and Middle
                        East.
                    </p>
                </div>


                <div className='w-[50%] h-full  flex justify-center items-center'>

                    <div className='w-[90%] h-[80%]'>
                        <img src={Story} alt="our story" className='w-full h-full object-fit rounded-3xl' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OurStory