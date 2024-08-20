import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { sliderImages } from "../constants";
import { useTranslation } from "react-i18next";

const SubBrandsSlider = () => {

    const { t } = useTranslation('common')

    return (
        <section className="w-[100vw] bg-[#252826] py-20 max-sm:py-14">
            <div className="w-full h-full flex items-center justify-center flex-col">
                <div className="w-full flex-start ml-[300px] max-md:ml-[140px] max-sm:ml-[30px] mb-5">
                    <p className="text-white uppercase max-sm:text-xs">
                        {t('subbrands.heading1')} <br /> {t('subbrands.heading2')}
                    </p>
                </div>
                <div className="w-[80vw] max-sm:w-[90vw] h-[80vh] max-md:h-[50vh] max-sm:h-[40vh]">
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
                                <SwiperSlide key={i} className="bg-[#252826]  h-full w-full">
                                    <img src={img} alt="sub brands" className="rounded-sm w-full h-full object-fit" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
export default SubBrandsSlider