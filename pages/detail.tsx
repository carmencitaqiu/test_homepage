import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
// import Contact from "../components/contact/Contact";
const ContactPage: NextPage = () => {
    
    return (
        <Layout>
            <div className="w-full">
              <div className="w-full h-[330px] bg-black"></div>
              <div className="mt-5 pl-2 pr-1">
                <div className="text-xl font-bold text-black">Goddess Maria</div>
                <div className="flex justify-end items-center">
                  <div className="w-8 h-8 rounded-full mr-2"></div>
                  <div className="text-base font-bold text-red-1">Fannings</div>
                </div>
                <p className="font-normal text-base text-black mt-2">You find yourself in a vast celestial landscape,with the radiant figure of Goddess Maria shining brightly beyond the sun. Her golden aura illuminates the surroundings casting a warm light on the ethereal clouds that float in the sky. </p>
              </div>
            </div>
        </Layout>
    )
}

export default ContactPage;

