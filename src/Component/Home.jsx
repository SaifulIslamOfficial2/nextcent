 
import { Carousel,  } from "flowbite-react";
import banner from "../assets/banner-1.png"
import Button from "./Button";


function Home() {
  return (
    <div className=" bg-slate-200 ">
        <div className="px-4 lg:px-14 max-w-screen-2xl min-h-screen h-screen mx-auto ">
        <Carousel className="w-full mx-auto">

        <div className=" my-28 md:my-8 py-12 md:flex-row-reverse flex-col flex  gap-12 justify-between items-center justify-center ">
            {/* image */}
          <div className=" mx-auto">
              <img src={banner} alt="" />
          </div>

          {/* hero text */}

          <div className="md:w-1/2 mr-auto ">
                <h1 className="text-green-500 mb-2 md-w-3/4 leading-snug font-semibold text-[52px]">SAIFUL ISLAM</h1>
                <h1 className=" text-gray-800 font-semibold text-[52px] leading-snug ">Frontend Developer</h1>
                <p className=" text-gray-800 mt-2  text-[16px] leading-snug ">Where to grow your business as a photographer: site or social media?</p>
                <Button className="btn bg-green-500 rounded mt-4 px-3 py-2 text-white text-[1rem] hover:bg-slate-500 hover:translate-y-4 transition-all duration-100  ">Register</Button>
          </div>
        </div>
        <div className=" my-28 md:my-8 py-12 md:flex-row-reverse flex-col flex  gap-12 justify-between items-center justify-center ">
            {/* image */}
          <div className=" mx-auto">
              <img src={banner} alt="" />
          </div>

          {/* hero text */}

          <div className="md:w-1/2 mr-auto ">
                <h1 className=" text-gray-800 mb-2 md-w-3/4 leading-snug font-semibold text-[52px]">Lessons and insights</h1>
                <h1 className=" text-green-500 font-semibold text-[52px] leading-snug "> from 8 years</h1>
                <p className=" text-gray-800 mt-2  text-[16px] leading-snug ">Where to grow your business as a photographer: site or social media?</p>
                <Button className="btn bg-green-500 rounded mt-4 px-3 py-2 text-white text-[1rem] hover:bg-slate-500 hover:translate-y-4 transition-all duration-100  ">Register</Button>
          </div>
        </div>
        <div className=" my-28 md:my-8 py-12 md:flex-row-reverse flex-col flex  gap-12 justify-between items-center justify-center ">
            {/* image */}
          <div className=" mx-auto">
              <img src={banner} alt="" />
          </div>

          {/* hero text */}

          <div className="md:w-1/2 mr-auto ">
                <h1 className=" text-gray-800 mb-2 md-w-3/4 leading-snug font-semibold text-[52px]">Lessons and insights</h1>
                <h1 className=" text-green-500 font-semibold text-[52px] leading-snug "> from 8 years</h1>
                <p className=" text-gray-800 mt-2  text-[16px] leading-snug ">Where to grow your business as a photographer: site or social media?</p>
                <Button className="btn bg-green-500 rounded mt-4 px-3 py-2 text-white text-[1rem] hover:bg-slate-500 hover:translate-y-4 transition-all duration-100  ">Register</Button>
          </div>
        </div>
      </Carousel>
        </div>
    </div>
    
  );
}

export default Home;
