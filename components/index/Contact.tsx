import styles from "./index.module.scss";
export default function Contact() {
    return (
        <div className="w-full h-[640px] flex" >
            <div className="w-[32%] bg-100%" style={{backgroundImage: 'url("/static/images/contact.png")'}}></div>
            <div className="flex-1  bg-white-2 pt-16 pl-16 pr-28">
                <div className="text-black-2 text-5xl">Contactez-nous</div>
                <div className="mt-16  mb-5" >
                    <div className="flex space-x-4 w-full">
                        <div className="flex-1">
                            <div className="text-lg text-black">Type de demande</div>
                            <input className={`flex-1 h-8 ${styles.cInput} text-black text-base font-medium w-full`}/>
                        </div>
                        <div className="flex-1">
                            <div className="text-lg text-black">Courriel *</div>
                            <input className={`flex-1 h-8 ${styles.cInput} text-black text-base font-medium w-full`}/>
                        </div>
                    </div>
                </div>

                <div className="mt-16  mb-5" >
                    <div className="flex space-x-4 w-full">
                        <div className="flex-1">
                            <div className="text-lg text-black">Prénom, Nom * </div>
                            <input className={`flex-1 h-8 ${styles.cInput} text-black text-base font-medium w-full`}/>
                        </div>
                        <div className="flex-1">
                            <div className="text-lg text-black">Téléphone *</div>
                            <input className={`flex-1 h-8 ${styles.cInput} text-black text-base font-medium w-full`}/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 mb-5" >
                    <div className="text-lg text-black">Message*</div>
                    <textarea  className={`flex-1 h-24 ${styles.cInput} text-black text-base font-medium w-full`}></textarea>
                </div>
                <div className="bg-black-2 w-[200px] h-12 text-white flex items-center justify-center space-x-2 cursor-pointer">SOUMETTRE</div>
            </div>
        </div>
    )
}