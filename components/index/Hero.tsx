

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
export default function Hero() {
    return (
        <div className="mx-auto container  relative" >
            <Swiper pagination={{clickable: true,el: ''}}>
              <SwiperSlide>
                <div className="relative w-full  rounded-lg bg-100%   h-[640px] " style={{backgroundImage: 'url("/static/images/swiper1.png")'}}>
                  <div className="absolute left-[5%] top-1/2 -translate-y-1/2  w-8/12 text-left flex flex-col items-start">
                      <p className="text-4xl  font-medium text-white">Votre source de confiance <br/> en approvisionnement de filtres</p>
                      <p className="text-base font-normal text-white w-2/3 mt-4">
                        La qualité de l’air qu’on respire est plus importante que jamais, c’est pourquoi nous offrons les meilleurs produits disponibles sur le marché. 
                      </p>
                      <div className="h-12  bg-white flex items-center justify-center mt-9 space-x-5  px-4 cursor-pointer">
                        <div className="uppercase text-green-1 text-sm font-medium ">VOIR TOUS LES PRODUITS</div>
                      </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full  rounded-lg bg-100%   h-[640px] " style={{backgroundImage: 'url("/static/images/swiper2.png")'}}>
                  <div className="absolute left-[5%] top-1/2 -translate-y-1/2  w-8/12 text-left flex flex-col items-start">
                      <p className="text-4xl font-medium text-white">Lavage de filtres <br/> résidentiel et commercial</p>
                      <div className="h-12  bg-green-1 flex items-center justify-center mt-9 space-x-5  px-4 cursor-pointer">
                        <div className="uppercase text-white text-sm font-medium ">DÉCOUVREZ CE SERVICE</div>
                        <div className="mt-2">
                          <Image src="/static/icons/right_arrow.svg" width={30} height={30} alt="right_arrow" />
                        </div>
                        
                      </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full  rounded-lg bg-100%   h-[640px]" style={{backgroundImage: 'url("/static/images/swiper3.png")'}}>
                  <div className="absolute left-[5%] top-1/2 -translate-y-1/2  w-8/12 text-left flex flex-col items-start">
                      <p className="text-4xl  font-medium text-white">Créez un compte commercial<br/> pour bénéficier d’escomptes <br/> exclusifs !</p>
                      <div className="h-12  bg-green-1 flex items-center justify-center mt-9 space-x-5  px-4 cursor-pointer">
                        <div className="uppercase text-white text-sm font-medium">OUVRIR UN COMPTE COMMERCIAL</div>
                        <div className="mt-2">
                          <Image src="/static/icons/right_arrow.svg" width={30} height={30} alt="right_arrow" />
                        </div>
                      </div>
                  </div>

                  <div className="absolute right-[5%] top-1/2 -translate-y-1/2 flex space-x-5">
                    <div className="text-base  text-black-2 text-right">Partenair <br/> eofficiel</div>
                    <div className="w-[100px] h-[64px] bg-100%" style={{backgroundImage: 'url("/static/images/swiper3_right.png")'}}></div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
         </div>
    )
}