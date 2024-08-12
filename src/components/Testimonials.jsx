import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonials } from "../constants";

const Testimonials = () => {
    return (
        <section className="w-[100vw] h-[100vh] mb-20" >
            <div className="w-full h-full bg-testimonials flex flex-col justify-center items-center relative">
                <div className="absolute inset-0 bg-black opacity-10 z-1"></div>

                <h2 className="font-bold uppercase text-2xl text-white z-10">Testimonials</h2>

                <div className="w-[50%] h-[60%] mt-10">

                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={true}
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        className="mySwiper w-full h-full rounded-2xl backdrop-blur-2xl">
                        {
                            testimonials.map((item, i) => (
                                <SwiperSlide key={i} className=" px-20 py-[80px] flex items-center justify-center">
                                    <p className="text-black">{item.content}</p>
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