import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
export default function Products() {
    return (
        <div className="w-full">
            <div className="mx-auto container mt-36">
                <p className="text-5xl 2xl:text-8xl  font-normal">Magasinez par  <br />catégories de filtres</p>
            </div>
            <div className="mt-8 flex items-center justify-between px-2">
            {/* <div className="cursor-pointer" style={{border: '1px solid red'}}>
                <Image src="/static/icons/slider_left.svg" width={35} height={70} alt="right_arrow" />
            </div> */}
            <div className="mx-auto container">
                <Swiper pagination={{ clickable: true, el: '' }} spaceBetween={44} slidesPerView={4} 
                modules={[Navigation]}
                navigation
                className="!pt-12"
                >
                    {
                        new Array(10).fill("").map((item, index) => (
                            <SwiperSlide className="!overflow-visible " key={index}>
                                <div>
                                    <div className="w-full h-[440px] 2xl:h-[470px] bg-white-1 rounded-3xl relative !overflow-visible">
                                        <div className="absolute z-10 -top-24 left-1/2 w-[488px] h-[488px] bg-contain -translate-x-1/2" style={{backgroundImage: 'url("/static/images/product1.png")'}}>
                                        </div>
                                        <div className="absolute bottom-6 left-4 2xl:left-8 text-lg 2xl:text-sbase1 font-medium text-left">Filtration moléculaire</div>
                                    </div>
                                    <div className="w-3/4 bg-green-1 flex items-center justify-between mt-9 space-x-5 py-2 cursor-pointer pl-9 pr-5">
                                        <div className="uppercase text-white text-xl font-medium ">MAGASINEZ</div>
                                        <div className="mt-2">
                                            <Image src="/static/icons/right_arrow.svg" width={30} height={30} alt="right_arrow" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            {/* <div className="cursor-pointer" style={{border: '1px solid red'}}>
                <Image src="/static/icons/slider_right.svg" width={35} height={70} alt="right_arrow" />
            </div> */}
            </div>
        </div>
    )
}