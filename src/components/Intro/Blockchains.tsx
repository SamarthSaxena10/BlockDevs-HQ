"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import Footer from "../Footer/Footer";
import Link from "next/link";
import Testimonial from "../Testimonal/Testimonial";

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
      <h1 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-white md:text-5xl">
        Explore Protocols
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
        Discover the latest advancements in blockchain technology covering all
        the way from protocols to Cross-Chain.
      </p>
    </motion.div>
  </LampContainer>
);

interface CardProps {
  text: string;
  link: string;
  target?: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ text, link, target, imageUrl }) => (
  <Link href={link} passHref legacyBehavior>
    <a
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      <div className="relative border border-gray-200 dark:border-gray-700 flex flex-col justify-center items-center p-4 h-48 w-full sm:w-60 mx-auto rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
        {text !== "Solana" && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Coming Soon
          </span>
        )}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={text}
            className="h-24 w-24 mb-4 object-contain"
          />
        )}
        <h2 className="font-semibold text-gray-900 dark:text-white text-xl">
          {text}
        </h2>
      </div>
    </a>
  </Link>
);

const Blockchains: React.FC = () => {
  return (
    <div>
      <Header />
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        id="explore-protocols"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Explore Blockchains and Protocols
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Card
            text="Solana"
            link="https://solanaxdevs.vercel.app/"
            target="_blank"
            imageUrl="https://solana.com/_next/static/media/logotype.e4df684f.svg"
          />
          <Card
            text="Wormhole"
            link="#"
            imageUrl="https://images.ctfassets.net/n8aw1cra6v98/2057wAXk6apiGi4vfTeC2u/9e200f5dfebaf6bb113c879243cf4508/wormwhole.svg?w=384&q=100"
          />
          <Card
            text="Monad"
            link="#"
            imageUrl="https://assets-global.website-files.com/647f71a77a2f4691b4fa23a7/647f71a77a2f4691b4fa23cf_monad-horizontal-logo-inverted-rgb.svg"
          />
          {/* <Card
            text="Chainlink"
            link="#"
            imageUrl="https://assets-global.website-files.com/5f6b7190899f41fb70882d08/5f760a499b56c47b8fa74fbb_chainlink-logo.svg"
          /> */}
          <Card
            text="Aptos"
            link="#"
            imageUrl="https://res.coinpaper.com/coinpaper/Aptos_mark_BLK_02443605a1.png"
          />
          <Card
            text="Sui"
            link="#"
            imageUrl="https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/65690e5e73e9e2a416e3502f_sui-mark.svg"
          />
        </div>

      </div>

      <div>
      <Testimonial/>
      <Footer />
      </div>
    </div>
  );
};

export default Blockchains;
