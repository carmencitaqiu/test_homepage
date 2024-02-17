export default function Vous () {
    return (
        <div className="mx-auto container mb-24 h-[400px] rounded-4xl bg-black-2 px-10 py-6 flex ">
            <div className="bg-100% flex-1 h-full" style={{backgroundImage: 'url("/static/images/vous.png")'}}></div>
            <div className="flex-1 h-full flex flex-col justify-center px-10">
                <div className="text-6xl  text-white w-[80%]">Vous ne trouvez pas le bon filtre ?</div>
                <div className="cursor-pointer bg-white h-12 w-full mt-6 flex items-center justify-between px-4">
                    <div className="text-black-2 text-base uppercase ">CONTACTEZ-NOUS POUR DES VRAIS BONS CONSEILS</div>
                    <img src="/static/images/banner_arrow.svg" className="w-5 h-5"/>
                </div>
            </div>
        </div>
    )
}