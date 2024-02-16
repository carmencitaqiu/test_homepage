import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import dynamic from 'next/dynamic'
import Layout from "../components/layout/Layout";
import Hero from "../components/index/Hero";
import Products from "../components/index/Products";
import Intro from "../components/index/Intro";
import Solutions from "../components/index/Solutions";
import Banner from "../components/index/Banner";
import Services from "../components/index/Services";
import Optimiser from "../components/index/Optimiser";
import Pratiques from "../components/index/Pratiques";
import Vous from "../components/index/Vous";
import Contact from "../components/index/Contact";
const Home: NextPage = () => {

  return (
    <Layout>
      <div className={`w-full min-h-screen`}>
         <Hero />
         <Products />
         <Intro />
         <Solutions />
         <Banner />
         <Services />
         <Optimiser />
         <Pratiques />
         <Vous />
         <Contact />
      </div>
    </Layout>
  );
};

export default Home;
