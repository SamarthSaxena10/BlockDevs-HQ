"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { EvervaultCard, Icon } from "../ui/evervault-card";
import Footer from "../Footer/Footer";

const Header: React.FC = () => (
  <LampContainer>
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 text-center"
    >
      <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Explore Blockchains <br /> & Protocols
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
        Discover the latest advancements in blockchain technology covering all
        the way from protocols to Cross-Chain.
      </p>
    </motion.div>
  </LampContainer>
);

const items = [
  {
    title: "Chainlink CCIP",
    description:
      "A secure interoperability protocol for powering token transfers and sending arbitrary messages cross-chain. You can use CCIP to transfer data, tokens, or both data and tokens across chains.",
    link: "#",
  },
  {
    title: "VRF",
    description:
      "Chainlink VRF provides cryptographically secure randomness for your blockchain-based applications. Randomness is very difficult to generate on blockchains. The solution to this issue is Chainlink VRF.",
    link: "#",
  },
];

const ChainlinkCard: React.FC = () => (
  <CardContainer className="inter-var ml-[50px]">
    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        Chainlink
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
      >
        An oracle network based decentralized blockchain built on Ethereum.
      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src="https://assets-global.website-files.com/5f6b7190899f41fb70882d08/651a02392cf2f40b253c6025_hexagon-3d.svg"
          height={1000}
          width={1000}
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      <div className="flex justify-between items-center mt-20">
        <Link href="/Protocols/Chainlink" legacyBehavior>
          <a className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Let's get started
          </a>
        </Link>
      </div>
    </CardBody>
  </CardContainer>
);


const SolanaCard: React.FC = () => (
  <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
    <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
    <EvervaultCard text="Solana" />
    <h2 className="dark:text-white text-black mt-4 text-sm font-light">
      Hover over this card to explore and learn about Solana.
    </h2>
    <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
      <a href="/Protocols/Solana">  Lets get started</a>
    </p>
  </div>
);


const MonadCard: React.FC = () => (
  <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
    <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
    <EvervaultCard text="Monad" />
    <h2 className="dark:text-white text-black mt-4 text-sm font-light">
    Hover over this card to explore and learn about Monad.
    </h2>
    <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
      <a href="">  Coming Soon</a>
    </p>
  </div>
);

const Chainlink: React.FC = () => (
  <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
    <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
    <EvervaultCard text="Chainlink" />
    <h2 className="dark:text-white text-black mt-4 text-sm font-light">
    Hover over this card to explore and learn about Chainlink.
    </h2>
    <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
      <a href="/Protocols/Chainlink">  Lets get started</a>
    </p>
  </div>
);

const Uniswap: React.FC = () => (
  <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
    <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
    <EvervaultCard text="Uniswap" />
    <h2 className="dark:text-white text-black mt-4 text-sm font-light">
    Hover over this card to explore and learn about Uniswap.
    </h2>
    <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
    <a href="">  Coming Soon</a>
    </p>
  </div>
);


const Wormhole: React.FC = () => (
  <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
    <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
    <EvervaultCard text="Wormhole" />
    <h2 className="dark:text-white text-black mt-4 text-sm font-light">
    Hover over this card to explore and learn about Wormhole.
    </h2>
    <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
    <a href="">  Coming Soon</a>
    </p>
  </div>
);


const Canto: React.FC = () => (
  <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
    <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
    <EvervaultCard text="Canto" />
    <h2 className="dark:text-white text-black mt-4 text-sm font-light">
    Hover over this card to explore and learn about Canto Protocol.
    </h2>
    <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
    <a href="">  Coming Soon</a>
    </p>
  </div>
);



const Blockchains: React.FC = () => {
  return (
    <div>
      <Header />

     <div className="">
      <div className="flex justify-between items-center mx-auto bg-black gap-x-2">
        <Chainlink/>
        <SolanaCard/> 
        <MonadCard />
      </div>

      <div className="flex justify-between items-center mx-auto bg-black gap-x-2 mt-[30px] py-[50px]">  
       <Uniswap/>
        <Wormhole/>
        <Canto/>
      </div>
      </div>
     
     <div>
      <Footer/>
     </div>

    </div>
  );
};

export default Blockchains;
