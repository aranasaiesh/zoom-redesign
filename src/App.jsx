import { RxHamburgerMenu } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { RiGovernmentFill } from "react-icons/ri";
import { GiHealthNormal } from "react-icons/gi";
import { MdPrecisionManufacturing } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";

import Card from "./assets/Card";

function App() {
  return (
    <div className="flex flex-col">
      <nav className="flex flex-row sticky gap-20">
        <button className="p-6 m-4 text-zoom-blue text-5xl font-bold">
          Zoom
        </button>
        <div className="hidden md:block">
          <ul className="flex p-4 m-6 text-center w-full gap-6 text-xl">
            <li>
              <button className="text-stone-600 hover:underline">
                Products
              </button>
            </li>
            <li>
              <button className="text-stone-600 hover:underline">
                Solutions
              </button>
            </li>
            <li>
              <button className="text-stone-600 hover:underline">
                Resources
              </button>
            </li>
            <li>
              <button className="text-stone-600 hover:underline">
                Plans & Pricing
              </button>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:space-x-4 md:pl-52 md:mt-10 m-2">
          <button className="text-md border-zoom-blue text-zoom-blue border rounded-lg h-12 p-2">
            Contact
          </button>
          <button className="bg-zoom-blue text-md text-white rounded-lg h-12 p-2">
            Sign up
          </button>
        </div>
        <nav className="block text-3xl p-14 stick md:hidden">
          <button>
            <RxHamburgerMenu />
          </button>
        </nav>
      </nav>
      <main>
        <div className="md:flex md:flex-row">
          <div className="flex flex-col text-left p-12 md:flex md:flex-col md:justify-center md:gap-2">
            <h1 className="m-2 font-md text-2xl">One platform to</h1>
            <code className="m-2 text-blue-400 text-2xl font-extrabold">
              stay in touch.
            </code>
            <button className="flex justify-center mt-12 p-2 ml-2  bg-zoom-blue w-32 rounded-md text-white text-sm text-left hover:animate-pulse md:p-2 md:m-2 md:h-10">
              Plans & pricing
            </button>
            <button className="flex justify-center mt-12 p-2 ml-2 border border-zoom-blue w-32 rounded-md text-zoom-blue hover:animate-pulse text-sm text-left md:p-2 md:m-2 md:h-10">
              Sign up, it's free.
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:pl-40">
            <img
              src="gallery-view.png"
              alt="gallery view"
              className="flex ml-8 md:h-96 md:w-auto"
            />
            <img
              src="zoomMobile.png"
              alt="zoomMobile"
              className="flex ml-40 h-68 w-52 md:h-96 md:w-42"
            />
          </div>
        </div>

        <div className="bg-zoom-dark-blue items-center p-2 m-4 flex flex-col w-full md:flex-row md:w-full">
          <img
            src={"./public/zoomWheel.png"}
            className="h-72 w-72 md:h-auto md:w-auto"
          />
          <div className="flex flex-col p-12 m-4">
            <h1 className=" text-blue-300 text-3xl font-extrabold p-2">
              Make work less work
            </h1>
            <p className=" text-blue-300 p-2">
              Securely connect and collaborate so you can work better together.
              Simple to manage and delightful to use, Zoom powers the modern
              workforce.
            </p>
            <p>
              <button className=" text-blue-200 p-2 font-extrabold hover:underline">
                Discover the Possibillities
              </button>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col p-10 gap-8 text-gray-600">
            <h1 className="text-xl font-bold">
              Powering organizations across industries and geographies
            </h1>
            <h2 className="text-lg">
              Zoom helps consolidate communications, connect people, and
              collaborate better together in the boardroom, classroom, operating
              room, and everywhere in between.
            </h2>
            <button className="text-zoom-dark-blue pr-24 font-bold hover:underline text-left">
              Explore Industry Solutions
            </button>
          </div>
          <div className="flex flex-col md:flex-col md:p-2 md:w-42 md:h-42">
            <button>
              <Card icon={<FaGraduationCap />} title={"Education"} />
            </button>
            <button>
              <Card icon={<BsBank />} title={"Financial Services"} />
            </button>
            <button>
              <Card icon={<RiGovernmentFill />} title={"Government"} />
            </button>
          </div>
          <div className="flex flex-col md:flex-col md:p-2 md:w-42">
            <button>
              <Card icon={<GiHealthNormal />} title={"Healthcare"} />
            </button>
            <button>
              <Card
                icon={<MdPrecisionManufacturing />}
                title={"Manufacturing"}
              />
            </button>
            <button>
              <Card icon={<GiPriceTag />} title={"Retail"} />
            </button>
          </div>
        </div>
      </main>
      <footer>
        <ul className="flex flex-col p-4 text-blue-300 gap-2 bg-zoom-dark-blue w-full">
          <li>
            <button className="underline hover:text-white">Contact</button>
          </li>
          <li>
            <button className="underline hover:text-white">About us</button>
          </li>
          <li>
            <button className="underline hover:text-white">
              Terms & rights
            </button>
          </li>
          <li>
            <button className="underline hover:text-white">
              How to videos
            </button>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
