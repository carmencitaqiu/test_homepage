
export default function Footer() {
    return (
        <div>
             <div className="w-full bg-white pt-20 pb-10" >
                <div className="mx-auto container flex space-x-10">
                    <div className="">
                    <div className=" w-[220px] h-[80px] bg-100% mb-4" style={{backgroundImage: 'url("/static/images/logo_footer.png")'}}>
                    </div>
                    <p className="text-sm text-black">3075 boul. Wilfrid HamelLocal <br/> 105, Québec (QC)<br/>G1P 4C6, Canada <br/>T : (418) 476-1277<br/>C : contact@alphafiltration.ca</p>
                    </div>
                    <div className="flex-1 flex space-x-4">
                    <div className="text-base  text-black-2 text-right">Partenair <br/> eofficiel</div>
                        <div className="w-[140px] h-[54px] bg-100%" style={{backgroundImage: 'url("/static/images/swiper3_right.png")'}}></div>
                    </div>
                    <div className="">
                        <div  className="text-base mb-6 text-gray-1">Alpha Filtration</div>
                        <div  className="text-sm text-gray-2 mb-2">Accueil</div>
                        <div  className="text-sm text-gray-2 mb-2">À propos</div>
                        <div  className="text-sm text-gray-2 mb-2">Produits</div>
                        <div  className="text-sm text-gray-2 mb-2">Infos pratiques</div>
                    </div>
                    <div className="">
                        <div  className="text-base mb-6 text-gray-1">Produits</div>
                        <div  className="text-sm text-gray-2 mb-2">Lorem ipsum</div>
                        <div  className="text-sm text-gray-2 mb-2">Lorem ipsum</div>
                        <div  className="text-sm text-gray-2 mb-2">Lorem ipsum</div>
                        <div  className="text-sm text-gray-2 mb-2">Lorem ipsum</div>
                    </div>

                
                    <div className="flex-1">
                        <div  className="text-base mb-6 text-gray-1">Informations</div>
                        <div  className="text-sm text-gray-2 mb-2">Politique de retour et de livraison</div>
                        <div  className="text-sm text-gray-2 mb-2">Politique de confidentialité</div>
                        <div  className="text-sm text-gray-2 mb-2">Conditions générales de vente</div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white-3 py-9">
                <div className="mx-auto container">
                    <div className="text-xs text-gray-2">© Alpha Solutions Industrielles. Tous droits réservés, 2024.</div>
                </div>
            </div>
        </div>
       
    )
}