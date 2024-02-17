import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
export default function Products() {
    const arr = [{
        title: 'Filtration moléculaire',
        imgSrc: 'product1.png',
    },{
        title: 'Filtration CVAC',
        imgSrc: 'product2.png',
    },{
        title: 'Filtre  à haute pureté',
        imgSrc: 'product3.png',
    },{
        title: 'Purificateurs d’air',
        imgSrc: 'product4.png',
    }]
    return (
        <div className="w-full">
            <div className="mx-auto container mt-36">
                <p className="text-5xl  font-normal">Magasinez par  <br />catégories de filtres</p>
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
                        arr.map((item, index) => (
                            <SwiperSlide className="!overflow-visible " key={index}>
                                <div>
                                    <div className="w-full h-[344px]  bg-white-1 rounded-3xl relative !overflow-visible">
                                        <div className="absolute z-10 -top-16 left-1/2 w-96 h-96 bg-contain -translate-x-1/2" style={{backgroundImage: `url("/static/images/${item.imgSrc}")`}}>
                                        </div>
                                        <div className="absolute bottom-6 left-4  font-medium text-left">{item.title}</div>
                                    </div>
                                    <div className="w-1/2 bg-green-1 flex items-center justify-between mt-6 space-x-5 py-2 cursor-pointer px-3">
                                        <div className="uppercase text-white text-sm 2xl:text-base">MAGASINEZ</div>
                                        <div className="mt-2">
                                            <Image src="/static/icons/right_arrow.svg" width={24} height={24} alt="right_arrow" />
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