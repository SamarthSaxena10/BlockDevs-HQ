import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="bg-white-100 py-20 my-7">
        <div className="max-w-5xl mx-auto px-6 md:flex md:items-center md:justify-between">
          <div className="text-left w-full md:w-1/2">
            <h1 className="text-5xl font-bold text-pink-500">
              Explore Solana blockchain
            </h1>
            <p className="mt-6 text-lg text-black">
            Solana is a blockchain built for mass adoption. It's a high performance network that is utilized for a range of use cases, including finance, 
            NFTs, payments, and gaming. Solana operates as a single global state machine, and is open, interoperable and decentralized.
            </p>
          </div>
          <div className="hidden md:block md:w-1/2 md:ml-12">
            <img
              src="https://th.bing.com/th/id/OIP.oWuxd9u3AqAqNgD2HqVHtgAAAA?rs=1&pid=ImgDetMain"
              alt="Chainlink"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-pink-500">
            Solana Account Model
            </h2>
            <p className="mt-4 text-lg text-black">
            On Solana, all data is stored in what are referred to as "accounts”. The way data is organized on Solana resembles a key-value store, where each entry in the database is called an "account".
            </p>

            <Link href="https://chain.link/education/cross-chain">
              <button className="mt-6 px-6 py-3 text-lg font-medium text-white bg-pink-500 rounded-lg">
                Learn Solana Accounts
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
            <img
              src="https://th.bing.com/th/id/OIP.G-yw-zKFlg0Qfkwu7RRVGAHaD4?w=333&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
              alt="Chainlink CCIP diagram"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 order-2 md:order-1">
            <img
              src="https://th.bing.com/th/id/OIP.I6MiAFJqG9l4idCLKsv1GgHaEK?rs=1&pid=ImgDetMain"
              alt="Chainlink VRF"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2 md:ml-12">
            <h2 className="text-3xl font-semibold text-pink-500">Transactions and Instructions</h2>
            <p className="mt-4 text-lg text-black">
            On Solana, we send transactions to interactions with the network. Transactions include one or more instructions, 
            each representing a specific operation to be processed.
             The execution logic for instructions is stored on programs deployed to the Solana network, 
             where each program stores its own set of instructions.
            </p>
            <button className="mt-6 px-6 py-3 text-lg font-medium text-white bg-pink-500 rounded-lg">
              Learn Txns and instructions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
