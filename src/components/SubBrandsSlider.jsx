import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { sliderImages } from "../constants";

const SubBrandsSlider = () => {
    return (
        <section className="bg-[#252826] h-[100vh] w-[100vw] flex items-center justify-center">
            <div className="w-[80%] h-[80%]">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    loop={true}
                    className="mySwiper w-full h-full rounded-lg bg-gradient ">
                    {
                        sliderImages.map((img, i) => (
                            <SwiperSlide key={i} className="bg-white h-full w-full text-black">
                                <img src={img} alt="sub brands" className="rounded-sm w-full h-full object-fit" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}
export default SubBrandsSlider