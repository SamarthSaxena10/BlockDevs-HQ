"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";




const testimonials = [
  
    {
      quote:
        "Excellent session on @solana by @_BlockDevs team, @0_x_Sam and @eth_ay32 hosted very well!! LFG 🚀",
      name: "Vaibhav Sharma",
      title: "@iamvaibhav_31",
    },
    {
      quote:
        "First session gone extremely well! 💯 All thanks to @_BlockDevs @0_x_Sam @eth_ay32",
      name: "Akshay Sinha",
      title: "@0xakshayyy",
    },
    {
      quote: "Excited to kick off @_BlockDevs's Cohort on @solana! Expertly hosted by @0_x_Sam and @eth_ay32. Fantastic start to the journey!",
      name: "Naman Mittal",
      title: "@namanmitttal",
    },
    {
      quote:
        "Today's lessons were 🔥 Dived into the @Solana command line tools and learned how to spin up a local node, deploy programs, interact with accounts, and more using the solana CLI. Powerful stuff for #SolaDev. @_BlockDevs @0_x_Sam @eth_ay32",
      name: "Chandan Tiwari",
      title: "@Chandan06369106",
    },
    {
      quote:
        "Hands-on @solana devnet wallet creation , balance fetching in @_BlockDevs cohort #web3‌‌ #solanablockchain #buildinginpublic",
      name: "Sushant Sharma",
      title: "@sushant100b",
    },
    {
      quote:
        "It was a great discussion with @0_x_Sam about the upcoming cohorts in @_BlockDevs and what will be happening in the future. #web3‌‌ #blockchain #SolanaFDG",
      name: "Aniket Raikar",
      title: "@AniketRaikar06",
    },
  ];

  export function InfiniteMovingCardsDemo() {
    return (

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
              <h1 className="text-white text-2xl text-center font-semibold mb-[40px]"> Testimonials </h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    );
  }


const Testimonial: React.FC = () => {
    return (
        <>
             <InfiniteMovingCardsDemo/>
        </>
    )
};

export default Testimonial;