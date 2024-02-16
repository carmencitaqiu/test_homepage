
export default function Footer() {
    return (
        <div className="w-full bg-white pt-20 pb-10">
            <div className="mx-auto container flex space-x-12">
                <div className="flex-1">
                <div className=" w-[160px] h-[100px] bg-100%" style={{backgroundImage: 'url("/static/images/logo.png")'}}>
                </div>
                <p>3075 boul. Wilfrid HamelLocal <br/> 105, Québec (QC)<br/>G1P 4C6, Canada <br/>T : (418) 476-1277<br/>C : contact@alphafiltration.ca</p>
                </div>
                <div className="flex-1 flex space-x-4">
                <div className="text-base  text-black-2 text-right">Partenair <br/> eofficiel</div>
                    <div className="w-[100px] h-[64px] bg-100%" style={{backgroundImage: 'url("/static/images/swiper3_right.png")'}}></div>
                </div>
                <div className="flex-1">
                    <div className="text-[rgba(50,59,75,1)] text-base mb-8">Alpha Filtration</div>
                    <div className="text-[rgba(93, 106, 131, 1)] text-sm">Accueil</div>
                    <div className="text-[rgba(93, 106, 131, 1)] text-sm">À propos</div>
                    <div className="text-[rgba(93, 106, 131, 1)] text-sm">Produits</div>
                    <div className="text-[rgba(93, 106, 131, 1)] text-sm">Infos pratiques</div>
                </div>
                <div className="flex-1">
                    <div className="text-[rgba(50,59,75,1)] text-base mb-8">Produits</div>
                    <div className="text-[rgba(93, 106, 131, 1)] text-sm">Accueil</div>
                    <div className="text-[rgba(93, 106, 131, 1)] text-sm">À propos</div>
                    <div className="text-[rgba(93, 106, 131, 1)] text-sm">Produits</div>
                    <div className="text-[rgba(93, 106, 131, 1)] text-sm">Infos pratiques</div>
                </div>
                <div className="flex-1">
                    <div className="text-[rgba(50,59,75,1)] text-base mb-8">Informations</div>
                    <div className="text-[rgba(93, 106, 131, 1)] text-sm">Accueil</div>
                    <div className="text-[rgba(93, 106, 131, 1)] text-sm">À propos</div>
                    <div className="text-[rgba(93, 106, 131, 1)] text-sm">Produits</div>
                    <div className="text-[rgba(93, 106, 131, 1)] text-sm">Infos pratiques</div>
                </div>
            </div>
        </div>
    )
}