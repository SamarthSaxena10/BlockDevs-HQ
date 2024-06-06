"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { EvervaultCard, Icon } from "../ui/evervault-card";
import Footer from "../Footer/Footer";
import Link from "next/link";

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

const Card: React.FC<{ text: string; link: string }> = ({ text, link }) => (
  <Link href={link}>
    <div className="border border-gray-200 dark:border-gray-700 flex flex-col justify-between p-4 h-40 w-full sm:w-60 mx-auto rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
      <div>
        <h2 className="font-semibold text-gray-900 dark:text-white text-xl">
          {text}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Hover over this card to explore and learn about {text}.
        </p>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
        <Icon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
      </div>
    </div>
  </Link>
);

const Blockchains: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Explore Blockchains and Protocols
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Card text="Chainlink" link="/Protocols/Chainlink" />
          <Card text="Solana" link="/Protocols/Solana" />
          <Card text="Monad" link="#" />
          <Card text="Wormhole" link="#" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blockchains;
