
export default function Services() {
    return (
        <div className="mx-auto container flex  justify-between h-[500px] mt-20 mb-10">
            <div className="w-1/3">
                <div className="text-2xl text-black-5 tracking-wide">NOS SERVICE D’EXPERTS</div>
                <p className="text-6xl text-black-5">Service techniqueen filtration</p>
            </div>
            <div className="w-1/2">
                <div className="relative after:absolute after:w-full after:top-0 after:bg-black-3 after:h-0.5 flex items-center justify-between">
                    <div className="text-black-2 text-lg my-2">Optimisation et mise à niveau des systèmes de filtration</div>
                    <img className="w-18 h-10" src="/static/icons/expand.svg"/>
                </div>
                <div className="relative after:absolute after:w-full after:top-0 after:bg-black-3 after:h-0.5 flex items-center justify-between">
                    <div className="text-black-2 text-lg my-2">Optimisation de la qualité d’air</div>
                    <img className="w-18 h-10" src="/static/icons/expand.svg"/>
                </div>
                <div className="relative after:absolute after:w-full after:top-0 after:bg-black-3 after:h-0.5 flex items-center justify-between">
                    <div className="text-black-2 text-lg my-2">Contrôle d’odeurs</div>
                    <img className="w-18 h-10" src="/static/icons/expand.svg"/>
                </div>
                <div className="relative after:absolute after:w-full after:top-0 after:bg-black-3 after:h-0.5 flex items-center justify-between">
                    <div className="text-black-2 text-lg my-2">Mise à jour des systèmes de ventilation</div>
                    <img className="w-18 h-10" src="/static/icons/expand.svg"/>
                </div>
                <div className="relative after:absolute after:w-full after:top-0 after:bg-black-3 after:h-0.5 flex items-center justify-between">
                    <div className="text-black-2 text-lg my-2">Diminution des coûts d’entretien</div>
                    <img className="w-18 h-10" src="/static/icons/expand.svg"/>
                </div>
                <div className="relative after:absolute after:w-full after:top-0 after:bg-black-3 after:h-0.5 flex items-center justify-between before:absolute before:w-full before:bottom-0 before:bg-black-3 before:h-0.5 before:left-0">
                    <div className="text-black-2 text-lg my-2">Service de changement de filtres</div>
                    <img className="w-18 h-10" src="/static/icons/expand.svg"/>
                </div>
            </div>
        </div>
    )
}