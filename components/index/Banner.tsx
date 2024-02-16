export default function Banner() {
   return (
        <div className="my-12 mx-auto container h-[420px] bg-100% relative" style={{backgroundImage: 'url("/static/images/banner.png")'}}>
            <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-2/5">
                <div className="text-4xl font-medium text-white">Des filtres pour <br/> l’industrie du cannabis</div>
                <div className="mt-6 bg-white w-48 h-[48px] flex items-center justify-between px-3">
                    <div className="text-black-2 text-sm">CONTACTEZ-NOUS</div>
                    <img src="/static/images/banner_arrow.svg" className="w-7 h-7"/>
                </div>
            </div>
        </div>
   )
}