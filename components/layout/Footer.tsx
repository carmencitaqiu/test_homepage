
export default function Footer() {
    return (
        <div className="w-full bg-white pt-20 pb-10">
            <div className="mx-auto container flex space-x-10">
                <div className="">
                <div className=" w-[220px] h-[80px] bg-100% mb-4" style={{backgroundImage: 'url("/static/images/logo_footer.png")'}}>
                </div>
                <p>3075 boul. Wilfrid HamelLocal <br/> 105, Québec (QC)<br/>G1P 4C6, Canada <br/>T : (418) 476-1277<br/>C : contact@alphafiltration.ca</p>
                </div>
                <div className="flex-1 flex space-x-4">
                <div className="text-base  text-black-2 text-right">Partenair <br/> eofficiel</div>
                    <div className="w-[120px] h-[64px] bg-100%" style={{backgroundImage: 'url("/static/images/swiper3_right.png")'}}></div>
                </div>
                <div className="">
                    <div style={{color: 'rgba(50,59,75,1)'}} className="text-base mb-8">Alpha Filtration</div>
                    <div style={{color: 'rgba(93, 106, 131, 1)'}} className="text-sm">Accueil</div>
                    <div style={{color: 'rgba(93, 106, 131, 1)'}} className="text-sm">À propos</div>
                    <div style={{color: 'rgba(93, 106, 131, 1)'}} className="text-sm">Produits</div>
                    <div style={{color: 'rgba(93, 106, 131, 1)'}} className="text-sm">Infos pratiques</div>
                </div>
                <div className="">
                    <div style={{color: 'rgba(50,59,75,1)'}} className="text-base mb-8">Produits</div>
                    <div style={{color: 'rgba(93, 106, 131, 1)'}} className="text-sm">Accueil</div>
                    <div style={{color: 'rgba(93, 106, 131, 1)'}} className="text-sm">À propos</div>
                    <div style={{color: 'rgba(93, 106, 131, 1)'}} className="text-sm">Produits</div>
                    <div style={{color: 'rgba(93, 106, 131, 1)'}} className="text-sm">Infos pratiques</div>
                </div>

               
                <div className="flex-1">
                    <div style={{color: 'rgba(50,59,75,1)'}} className="text-[rgba(50,59,75,1)] text-base mb-8">Informations</div>
                    <div style={{color: 'rgba(93, 106, 131, 1)'}} className="text-sm">Politique de retour et de livraison</div>
                    <div style={{color: 'rgba(93, 106, 131, 1)'}} className="text-sm">Politique de confidentialité</div>
                    <div style={{color: 'rgba(93, 106, 131, 1)'}} className="text-sm">Conditions générales de vente</div>
                </div>
            </div>
        </div>
    )
}