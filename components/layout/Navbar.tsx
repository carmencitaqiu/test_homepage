
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from "next/image";
import styles from "./index.module.scss";
interface NavbarItemProps {
  name: string,
  linkUrl: string
};

export default function Navbar() {
  const router = useRouter();
  const pathname = router.asPath
  console.log('pathname*****' + pathname)

  return (
    <div className="w-full">
    <div
      className="bg-green-1"
    >
      <div className="mx-auto container flex items-center justify-between relative py-5 text-white">
        <div className="flex items-center text-lg font-medium ">
          <div className="relative after:contents-[''] after:absolute after:w-0.5 after:h-1/2 after:bg-white after:right-0 after:top-1/2 after:-translate-y-1/2 px-2">Résidentiel</div>
          <div className="relative after:contents-[''] after:absolute after:w-0.5 after:h-1/2 after:bg-white after:right-0 after:top-1/2 after:-translate-y-1/2 px-2">Commercial</div>
          <div className="relative px-2">Industriel</div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-4">
            <Image src="/static/images/user.svg" width={20} height={20} alt="user" />
            <div className="flex items-center space-x-1">
              <div className="">Se connecter</div>
              <div>/</div>
              <div>Créer un compte</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Image src="/static/images/cart.svg" width={28} height={23} alt="cart" />
            <div>0.00$</div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white ">
      <div className="mx-auto container flex items-center justify-between py-4">
        <div className=" w-[100px] h-[48px] bg-100%" style={{backgroundImage: 'url("/static/images/logo.png")'}}>
        </div>
        <div className="flex items-center flex-1">
            <div className="flex items-center space-x-4 text-green-1 text-sm  font-medium">
              <Link href="/">Accueil</Link>
              <Link href="/">À propos</Link>
              <Link href="/">Services</Link>
              <Link href="/">Produits</Link>
              <Link href="/">Marques</Link>
              <Link href="/">Fabrication sur mesure</Link>
            </div>
            <div className="flex items-center  space-x-2 ml-4">
              <div className="text-green-1 text-lg font-medium">FR</div>
              <div className="cursor-pointer">
                <Image src="/static/images/dropdown.svg" width={14} height={12} alt="dropdown" />
              </div>
            </div>
            <div className="border-b border-solid border-green-1 flex-1 ml-6 h-10 flex items-center space-x-4">
              <Image src="/static/images/search.svg" width={24} height={24} alt="search" />
              <input className={`flex-1 h-full ${styles.cInput} text-green-1 text-lg font-medium`} placeholder="Rechercher"/>
            </div>
            <div className="ml-2 cursor-pointer h-[50px] w-[150px] flex items-center justify-center text-white bg-green-1  text-base font-medium rounded-xl">
              Contactez-nous
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}


