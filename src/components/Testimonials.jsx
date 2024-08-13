import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonials } from "../constants";

const Testimonials = () => {
    return (
        <section className="w-[100vw] h-[100vh] max-sm:h-[55vh] mb-10" >
            <div className="w-full h-full bg-testimonials flex flex-col justify-center items-center relative">
                <div className="absolute inset-0 bg-black opacity-10 z-1"></div>

                <h2 className="font-bold uppercase text-2xl text-white z-10">Testimonials</h2>

                <div className="w-[50%] max-lg:w-[70%] max-sm:w-[90%] h-[60%] max-sm:h-auto mt-10 ">

                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={true}
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        className="mySwiper w-full h-full rounded-2xl backdrop-blur-2xl border-2 border-[#A5EFFF] ">
                        {
                            testimonials.map((item, i) => (
                                <SwiperSlide key={i} className=" px-20 max-sm:px-5 py-[80px] max-sm:py-[50px] flex items-center justify-center">
                                    <p className="text-black text-xl max-sm:text-sm">{item.content}</p>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
export default Testimonials