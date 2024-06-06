import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-900 via-black to-black text-white">
      <div className="flex-grow flex flex-col justify-center items-center text-center pt-32">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white">
            Powerful for developers. Fast for everyone.
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Solana is a blockchain built for mass adoption. It's a
            high-performance network utilized for a range of use cases,
            including finance, NFTs, payments, and gaming. Solana operates as a
            single global state machine and is open, interoperable, and
            decentralized.
          </p>
          <div className="mt-6">
            <Link href="https://soldevs.vercel.app/">
              <button className="px-6 py-3 text-lg font-medium text-white bg-purple-700 rounded-lg">
                START BUILDING
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-white">
              Solana Account Model
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              On Solana, all data is stored in what are referred to as
              "accounts”. The way data is organized on Solana resembles a
              key-value store, where each entry in the database is called an
              "account".
            </p>
            <Link href="https://chain.link/education/cross-chain">
              <button className="mt-6 px-6 py-3 text-lg font-medium text-white bg-purple-700 rounded-lg">
                Learn Solana Accounts
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
            <img
              src="https://th.bing.com/th/id/OIP.G-yw-zKFlg0Qfkwu7RRVGAHaD4?w=333&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
              alt="Chainlink CCIP diagram"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 order-2 md:order-1">
            <img
              src="https://th.bing.com/th/id/OIP.I6MiAFJqG9l4idCLKsv1GgHaEK?rs=1&pid=ImgDetMain"
              alt="Chainlink VRF"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2 md:ml-12">
            <h2 className="text-3xl font-semibold text-white">
              Transactions and Instructions
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              On Solana, we send transactions to interactions with the network.
              Transactions include one or more instructions, each representing a
              specific operation to be processed. The execution logic for
              instructions is stored on programs deployed to the Solana network,
              where each program stores its own set of instructions.
            </p>
            <button className="mt-6 px-6 py-3 text-lg font-medium text-white bg-purple-700 rounded-lg">
              Learn Txns and instructions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
