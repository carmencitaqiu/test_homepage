export default function Optimiser() {
    return (
        <div className="w-full h-[563px] flex">
            <div className="flex-1 bg-green-1 relative px-[5%] flex flex-col justify-center">
                <div className="mx-auto">
                    <div className="text-[62px] text-white">Optimiser la filtration de vos systèmes de ventilation </div>
                    <p className="text-[28px] text-white">Que ce soit pour les résidences, les commerces ou l’industrie lourde, vous pouvez magasiner en ligne parmi notre vaste de gamme de produits. </p>
                    <div className="mt-6 bg-white w-40 h-[48px] flex items-center justify-between px-3">
                    <div className="text-green-1 text-sm">LIRE L’ARTICLE</div>
                    <img src="/static/images/banner_arrow.svg" className="w-7 h-7"/>
                </div>
                </div>
            </div>
            <div className="w-4/12 bg-100%" style={{backgroundImage: 'url("/static/images/optimiser.png")'}}>


            </div>
        </div>
    )
}