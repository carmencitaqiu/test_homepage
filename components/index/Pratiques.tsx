export default function Pratiques () {
    return (
        <div className="mx-auto container mt-10 flex flex-col items-center mb-28">
            <div className="uppercase text-xl text-black-2 font-normal">Blogue</div>
            <div className="text-[48px] text-black-2 mb-20">Informations pratiques</div>
            <div className="grid grid-cols-3 w-full  space-x-4 mb-16">
                <div  className="h-[420px] flex flex-col">
                    <div className="h-[55%] w-full bg-100%" style={{backgroundImage: 'url("/static/images/pratiques/pratiques1.png")'}}>
                    </div>
                    <div className="flex-1 bg-green-1 text-white pt-5 pl-8">
                        <div className="text-sm">11 janvier 2024</div>
                        <div className="text-base font-medium mt-3">Lorem ipsum dolor almet</div>
                        <p className="w-7/8 text-xs mt-2">Integer laoreet vehicula risus, at imperdiet risus tempor a. Sed arcu neque, dictum id.</p>
                        <div className="mt-4 w-8 h-8 bg-black flex items-center justify-center rounded-full"></div>
                    </div>
                </div>
                <div  className="h-[420px] flex flex-col">
                    <div className="h-[55%] w-full bg-100%" style={{backgroundImage: 'url("/static/images/pratiques/pratiques1.png")'}}>
                    </div>
                    <div className="flex-1 bg-white-3 text-black pt-5 pl-8">
                        <div className="text-sm">11 janvier 2024</div>
                        <div className="text-base font-medium mt-3">Lorem ipsum dolor almet</div>
                        <p className="w-7/8 text-xs mt-2">Integer laoreet vehicula risus, at imperdiet risus tempor a. Sed arcu neque, dictum id.</p>
                        <div className="mt-4 w-8 h-8 bg-black flex items-center justify-center rounded-full"></div>
                    </div>
                </div>
                <div  className="h-[420px] flex flex-col">
                    <div className="h-[55%] w-full bg-100%" style={{backgroundImage: 'url("/static/images/pratiques/pratiques1.png")'}}>
                    </div>
                    <div className="flex-1 bg-white-3 text-black pt-5 pl-8">
                        <div className="text-sm">11 janvier 2024</div>
                        <div className="text-base font-medium mt-3">Lorem ipsum dolor almet</div>
                        <p className="w-7/8 text-xs mt-2">Integer laoreet vehicula risus, at imperdiet risus tempor a. Sed arcu neque, dictum id.</p>
                        <div className="mt-4 w-8 h-8 bg-black flex items-center justify-center rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="bg-black-2 w-[248px] h-[64px] rounded-lg text-white flex items-center justify-center space-x-2 cursor-pointer">
                <div>Voir toutes les nouvelles</div>
                <img src="/static/images/banner_arrow.svg" className="w-7 h-7"/>
            </div>
        </div>
    )
}