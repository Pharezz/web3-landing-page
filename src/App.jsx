import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import imgs from "/src/assets/Auto Layout Horizontal.svg";
import bluePunk from "/src/assets/image.svg";
import punk1 from "/src/assets/image (1).svg";
import punk2 from "/src/assets/frame (1).svg";
import punk3 from "/src/assets/frame.svg";
import punk4 from "/src/assets/frame (2).svg";
import punk5 from "/src/assets/frame (3).svg";
import punk6 from "/src/assets/image (2).svg";
import wolfIcon from "/src/assets/image (3).svg";
import diamondIcon from "/src/assets/image (4).svg";
import { Github, Twitter } from "lucide-react";
import Card from "./components/Card";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const App = () => {
  const slideRef = useRef(null);
  const sliderRef = useRef(null);

  return (
    <div className="min-h-screen w-full overflow-hidden text-gray-100 bg-gray-200">
      <Navbar />

      {/* hero section */}

      <section 
        className={` pt-20 bg-black`}
      >
        <div className="text-center md:max-w-6xl mx-auto max-w-md">
          <h1 className="text-3xl font-semibold">
            The project that inspired the modern CryptoArt movement
          </h1>
          <h3 className="text-xs my-5 ">
            10,000 unique collectible characters with proof of ownership stored
            on the Ethereum blockchain.
          </h3>

          <button className="text-xs text-black bg-white py-3 px-5 rounded-3xl cursor-pointer hover:bg-black hover:text-white hover:border hover:border-gray-800 transition-all duration-300 ease-in-out">
            Mint <span className="font-bold">now</span>
          </button>
        </div>
        <img src={imgs} alt="nft imgs" className="pt-15" />
      </section>

      <section className="pt-20 bg-black">
        <div className="md:max-w-6xl mx-auto max-w-md">
          <h1 className="text-center mb-10 text-xl font-bold">Featured In</h1>
          <div className="grid grid-cols-1 gap-10  md:grid-cols-3 md:mx-0">
            <Card
              title="Mashable"
              text="This ethereum-based project could change how we think about digital art"
            />
            <Card
              title="Mashable"
              text="CryptoKitties, CryptoPunks and the birth of a cottage industry
"
            />
            <Card
              title="Mashable"
              text="‘Obviously, we had no idea it was going to get here,’ say the guys who made the first NFT
"
            />
          </div>
        </div>
      </section>

      <section className="bg-black rounded-b-3xl pb-15 pt-20 ">
        <div className="md:max-w-6xl mx-auto max-w-md">
          <div className="grid grid-cols-1 gap-10  md:grid-cols-2 md:gap-40">
            <h1 className="text-2xl font-bold">Meet The Punks</h1>
            <div className="">
              <p className=" text-sm md:text-xs">
                The CryptoPunks are 24x24 pixel art images, generated
                algorithmically. Most are punky-looking guys and girls, but
                there are a few rarer types mixed in: Apes, Zombies and even the
                odd Alien. Every punk has their own profile page that shows
                their attributes as well as their ownership/for-sale status.
              </p>
              <div className="flex gap-5 mt-5">
                <button
                  className="text-sm text-black bg-white py-2 px-6
                 rounded-3xl cursor-pointer hover:bg-black hover:text-white hover:border hover:border-gray-800 transition-all duration-300 ease-in-out"
                >
                  Buy a punk
                </button>
                <button className="text-sm border-gray-800 py-2 px-6 rounded-3xl border cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out ">
                  View full collection
                </button>
              </div>
            </div>
          </div>
          <div className="pt-20 grid md:grid-cols-2 grid-cols-1 md:gap-30 gap-10">
            <div className="flex flex-col gap-5 w-full md:max-w-sm">
              <div className="border border-gray-800 rounded-3xl p-8 bg-[#03759788]">
                <p>
                  Punks with a blue background are not for sale and have no
                  current bids.
                </p>
              </div>
              <div className="border border-gray-800 rounded-3xl p-8">
                <p>
                  Punks with a red background are available for sale by their
                  owner.
                </p>
              </div>
              <div className="border border-gray-800 rounded-3xl p-8">
                <p>Punks with a purple background have an active bid on them</p>
              </div>
            </div>

            <img src={bluePunk} alt="blue punk img" className="w-full" />
          </div>
        </div>
      </section>

      <section className="pt-20 text-black pb-15">
        <div className="md:max-w-6xl max-w-md mx-auto">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">
              Biggest Sales
            </h1>
            <button className="border  border-gray-400 px-3 py-2 rounded-2xl font-semibold text-gray-900 mr-auto md:mr-0 cursor-pointer hover:bg-black hover:text-white hover:border hover:border-gray-800 transition-all duration-300 ease-in-out">
              View All
            </button>
          </div>
          <div
            ref={slideRef}
            className="flex justify-between overflow-x-hidden scroll-smooth gap-10 pt-10"
          >
            <div className="flex flex-col gap-5 ">
              <img src={punk1} alt="punk1 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
            <div className="flex flex-col gap-5 ">
              <img src={punk2} alt="punk2 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <img src={punk3} alt="punk3 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
            <div className="flex flex-col gap-5 ">
              <img src={punk5} alt="punk1 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
            <div className="flex flex-col gap-5 ">
              <img src={punk6} alt="punk1 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
            <div className="flex flex-col gap-5 ">
              <img src={punk3} alt="punk1 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
            <div className="flex flex-col gap-5 ">
              <img src={punk5} alt="punk1 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
            <div className="flex flex-col gap-5 ">
              <img src={punk1} alt="punk1 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
            <div className="flex flex-col gap-5 ">
              <img src={punk4} alt="punk1 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
          </div>
          <div className="flex gap-3 mt-10">
            <button onClick={() => (slideRef.current.scrollLeft -= 300)}>
              <CircleArrowLeft size={30} className="text-gray-500" />
            </button>
            <button onClick={() => (slideRef.current.scrollLeft += 300)}>
              <CircleArrowRight size={30} className="text-gray-500" />
            </button>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center pt-15">
            <h1 className="text-2xl font-semibold text-gray-800">
              Recent Transactions
            </h1>
            <button className="border border-gray-400 px-3 py-2 rounded-2xl font-semibold text-gray-900 mr-auto md:mr-0 cursor-pointer hover:bg-black hover:text-white hover:border hover:border-gray-800 transition-all duration-300 ease-in-out">
              View All
            </button>
          </div>
          <div
            ref={sliderRef}
            className="flex justify-between gap-10 pt-10 overflow-x-hidden scroll-smooth"
          >
            <div className="flex flex-col gap-5 ">
              <img src={punk4} alt="punk1 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <img src={punk5} alt="punk2 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <img src={punk6} alt="punk3 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
            <div className="flex flex-col gap-5 ">
              <img src={punk2} alt="punk1 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
            <div className="flex flex-col gap-5 ">
              <img src={punk3} alt="punk1 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
            <div className="flex flex-col gap-5 ">
              <img src={punk1} alt="punk1 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
            <div className="flex flex-col gap-5 ">
              <img src={punk2} alt="punk1 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
            <div className="flex flex-col gap-5 ">
              <img src={punk6} alt="punk1 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
            <div className="flex flex-col gap-5 ">
              <img src={punk4} alt="punk1 img" />
              <span className="flex flex-col gap-3">
                <p className="font-bold">#35,000</p>
                <p className="text-sm">5.2k(65M)</p>
                <p className="text-xs">March 2, 2024</p>
              </span>
            </div>
          </div>
          <div className="flex gap-3 mt-10">
            <button onClick={() => (sliderRef.current.scrollLeft -= 300)}>
              <CircleArrowLeft size={30} className="text-gray-500" />
            </button>
            <button onClick={() => (sliderRef.current.scrollLeft += 300)}>
              <CircleArrowRight size={30} className="text-gray-500" />
            </button>
          </div>
        </div>
      </section>

      <section className="pt-20 bg-black rounded-t-3xl">
        <div className="max-w-md md:max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <h1 className="text-2xl font-bold">How do I get a Punk</h1>
            <div>
              <div className="flex gap-10">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-gray-500 flex items-center justify-center rounded-full h-10 w-10 border">
                    1
                  </span>
                  <div className="w-[1px] h-50 bg-gray-800 mb-2"></div>
                </div>
                <div className="flex flex-col gap-4">
                  <img src={wolfIcon} alt="wolf icon" width={45} />
                  <h1 className="font-bold">Download and install MetaMsask</h1>
                  <p className="text-xs">
                    Download and install a Chrome browser plugin called
                    MetaMask. This will allow websites (that you authorise)
                    access to your Ethereum account.
                  </p>
                  <button className="text-sm border p-2 border-gray-700 rounded-full px-5 mr-auto">
                    Download MetMask
                  </button>
                </div>
              </div>

              <div className="flex gap-10">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-gray-500 flex items-center justify-center rounded-full h-10 w-10 border ">
                    2
                  </span>
                  <div className="w-[1px] h-30 bg-gray-800 mb-2"></div>
                </div>
                <div className="flex flex-col gap-3">
                  <img src={diamondIcon} alt="diamond icon" width={45} />
                  <h1 className="font-bold">Buy some Etherium</h1>
                  <p className="text-xs">
                    If you made a new account, buy some Ethereum. The MetaMask
                    plugin has a button that will allow you to buy Ether from
                    Coinbase.
                  </p>
                </div>
              </div>

              <div className="flex gap-10 items-center">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-gray-500 flex items-center justify-center rounded-full h-10 w-10 border">
                    3
                  </span>
                </div>

                <p className="text-xs">
                  If you made a new account, buy some Ethereum. The MetaMask
                  plugin has a button that will allow you to buy Ether from
                  Coinbase.
                </p>
              </div>
            </div>
          </div>

          <div className="py-40">
            <h1 className="text-2xl font-bold mb-15">Details and FAQs</h1>
            <hr className="text-gray-800 mb-5" />
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 mb-10">
              <p className="font-bold text-sm">
                Where are the images for the punks stored?
              </p>
              <p className="text-xs">
                When originally released, the actual images of the punks were
                too large to store on the blockchain, so we took a hash of the
                composite image of all the punks and embeded it into the
                contract. You can verify that the punks being managed by the
                Ethereum contract are the True Official Genuine CryptoPunks™ by
                calculating an SHA256 hash on the cryptopunks image and
                comparing it to the hash stored in the contract.Since then, due
                to some clever compression ideas and some help from friends of
                the punks we have managed to put the entire image and attribute
                data fully on chain. You can read more about the mechanisms and
                details of the process in the announcement blog post.
              </p>
            </div>
            <hr className="text-gray-800 mb-5" />
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 mb-10">
              <p className="font-bold text-sm">
                Are the punks an ERC-721 token?
              </p>
              <p className="text-xs">
                No. The CryptoPunks pre-date the ERC-721 standard and are a
                custom contract, that means it doesn't comply with any
                standards. They are almost an ERC20 token. We support the
                methods that provide your balance so you can watch CryptoPunks
                as a token in your wallet and see how many you own. None of the
                other methods are the same since you're not transferring a
                simple balance, but need to reference which specific Punk you
                want to work with.
              </p>
            </div>
            <hr className="text-gray-800 mb-5" />
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 mb-10">
              <p className="font-bold text-sm">
                Where does the market data on this site come from?
              </p>
              <p className="text-xs">
                The prices, bids and sales you see on this site are loaded from
                the Cryptopunks contract on the Ethereum blockchain. Because the
                Cryptopunks pre-date the ERC-721 standard (and all third party
                NFT marketplaces) we also needed to write a market so the punks
                could be transacted. We have no control over the contract
                governing this market, and have no access to any additional data
                beyond what the blockchain provides. In fact anyone else could
                write a web front end for it.
              </p>
            </div>
            <hr className="text-gray-800 mb-5" />
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 mb-10">
              <p className="font-bold text-sm">
                Do you charge any fees for transactions?
              </p>
              <p className="text-xs">
                No. We charge no fees for Cryptopunks transacted through the
                built-in market beyond the ones charged by Ethereum (gas).The
                contract source and more technical details are available on
                Github.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10 items-center md:flex-row md:justify-between pb-15">
            <h1 className="font-bold text-2xl md:text-xl">CryptoPunks</h1>
            <span className="flex flex-col items-center md:flex-row gap-5 my-3 md:my-0">
              <p>Buy a Punk</p>
              <p>View full Colletion</p>
            </span>
            <span className="flex gap-5">
              <Twitter size={25} className="fill-white cursor-pointer" />
              <Github size={25} className="fill-white  cursor-pointer" />
            </span>
          </div>

          <footer>
            <hr className="text-gray-800 pb-5" />

            <div className="flex flex-col md:flex-row gap-5 items-center justify-center pb-10">
              <p>&copy;2024 CryptoPunks All rights reservred.</p>
              <a href="">Privacy Policy</a>
              <a href="">Terms of use</a>
              <p>Cookies settings</p>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default App;
