import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Solutions() {
    const arr = [{
        title: 'Résidentiel',
    },{
        title: 'Commercial',
    },{
        title: 'Industriel',
    },{
        title: 'Institutionnel',
    },{
        title: 'Cimenterie',
    },{
        title: 'Cannabis',
    },{
        title: 'Minier',
    },{
        title: 'Construction',
    },{
        title: 'Aviation',
    }]
    return (
        <div className="w-full mt-28 mb-16">
            <div className="mx-auto container">
                <div className="flex flex-col space-y-8">
                <Swiper pagination={{ clickable: true, el: '' }} spaceBetween={20} slidesPerView={3}
                                modules={[Navigation]}
                                navigation
                            >
                                {
                                    arr.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="w-full">
                                                <div className="flex items-center w-full space-x-4">
                                                    <div className="w-16 h-16  bg-green-1 flex items-center justify-center rounded-full">
                                                        <Image src="/static/icons/solutions/residential.svg" width={24} height={24} alt="Residential" />
                                                    </div>
                                                    <div className="text-4xl text-black-2">{item.title}</div>
                                                </div>
                                                <div className="w-full h-60 bg-100% mt-7" style={{ backgroundImage: 'url("/static/images/solutions/residential.png")' }}>

                                                </div>
                                                <div className="w-2/5 bg-green-1 flex items-center justify-between mt-6 space-x-5 py-2 cursor-pointer px-3">
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

            </div>
        </div>
    )
}