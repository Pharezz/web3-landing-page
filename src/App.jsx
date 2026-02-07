import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import { Github, Twitter } from "lucide-react";
import Card from "./components/Card";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const App = () => {
  const slideRef = useRef(null);
  const sliderRef = useRef(null);

  return (
    <div className="min-h-screen w-full overflow-hidden text-gray-100 bg-gray-200">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 bg-black">
        <div className="text-center md:max-w-6xl mx-auto max-w-md">
          <h1 className="text-3xl font-semibold">
            The project that inspired the modern CryptoArt movement
          </h1>
          <h3 className="text-xs my-5">
            10,000 unique collectible characters with proof of ownership stored
            on the Ethereum blockchain.
          </h3>

          <button className="text-xs text-black bg-white py-3 px-5 rounded-3xl hover:bg-black hover:text-white hover:border hover:border-gray-800 transition-all">
            Mint <span className="font-bold">now</span>
          </button>
        </div>

        <img
          src="/Auto Layout Horizontal.svg"
          alt="nft imgs"
          className="pt-15"
        />
      </section>

      {/* Featured */}
      <section className="pt-20 bg-black">
        <div className="md:max-w-6xl mx-auto max-w-md">
          <h1 className="text-center mb-10 text-xl font-bold">Featured In</h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <Card
              title="Mashable"
              text="This ethereum-based project could change how we think about digital art"
            />
            <Card
              title="Mashable"
              text="CryptoKitties, CryptoPunks and the birth of a cottage industry"
            />
            <Card
              title="Mashable"
              text="‘Obviously, we had no idea it was going to get here,’ say the guys who made the first NFT"
            />
          </div>
        </div>
      </section>

      {/* Meet the Punks */}
      <section className="bg-black rounded-b-3xl pb-15 pt-20">
        <div className="md:max-w-6xl mx-auto max-w-md">
          <div className="grid md:grid-cols-2 gap-40">
            <h1 className="text-2xl font-bold">Meet The Punks</h1>
            <p className="text-sm md:text-xs">
              The CryptoPunks are 24x24 pixel art images, generated algorithmically.
            </p>
          </div>

          <div className="pt-20 grid md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-5">
              <div className="border border-gray-800 rounded-3xl p-8 bg-[#03759788]">
                Punks with a blue background are not for sale.
              </div>
              <div className="border border-gray-800 rounded-3xl p-8">
                Punks with a red background are available for sale.
              </div>
              <div className="border border-gray-800 rounded-3xl p-8">
                Punks with a purple background have an active bid.
              </div>
            </div>

            <img src="/image.svg" alt="blue punk" />
          </div>
        </div>
      </section>

      {/* Biggest Sales */}
      <section className="pt-20 text-black pb-15">
        <div className="md:max-w-6xl max-w-md mx-auto">
          <div
            ref={slideRef}
            className="flex gap-10 overflow-x-hidden pt-10 scroll-smooth"
          >
            {[
              "/image (1).svg",
              "/frame (1).svg",
              "/frame.svg",
              "/frame (2).svg",
              "/frame (3).svg",
              "/image (2).svg",
            ].map((img, i) => (
              <div key={i} className="flex flex-col gap-5">
                <img src={img} alt="punk" />
                <span>
                  <p className="font-bold">#35,000</p>
                  <p className="text-sm">5.2k (65M)</p>
                  <p className="text-xs">March 2, 2024</p>
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-10">
            <button onClick={() => (slideRef.current.scrollLeft -= 300)}>
              <CircleArrowLeft size={30} />
            </button>
            <button onClick={() => (slideRef.current.scrollLeft += 300)}>
              <CircleArrowRight size={30} />
            </button>
          </div>
        </div>
      </section>

      {/* How to get a Punk */}
      <section className="pt-20 bg-black rounded-t-3xl">
        <div className="max-w-md md:max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <h1 className="text-2xl font-bold">How do I get a Punk</h1>

            <div className="flex gap-10">
              <img src="/image (3).svg" alt="wolf icon" width={45} />
              <div>
                <h1 className="font-bold">Install MetaMask</h1>
                <p className="text-xs">
                  Install MetaMask to access your Ethereum account.
                </p>
              </div>
            </div>

            <div className="flex gap-10">
              <img src="/image (4).svg" alt="diamond icon" width={45} />
              <div>
                <h1 className="font-bold">Buy Ethereum</h1>
                <p className="text-xs">
                  Buy ETH directly through MetaMask or Coinbase.
                </p>
              </div>
            </div>
          </div>

          <footer className="pt-20 text-center pb-10">
            <div className="flex justify-center gap-5">
              <Twitter />
              <Github />
            </div>
            <p className="text-xs pt-5">&copy;2024 CryptoPunks</p>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default App;
