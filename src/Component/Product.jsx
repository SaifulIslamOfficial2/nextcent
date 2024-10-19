import Button from "./Button"
import product from "../assets/product.png"
import cmp  from "../assets/icon/cmp1.png"
import cmp2  from "../assets/icon/cmp2.png"
import cmp3  from "../assets/icon/cmp3.png"
import cmp4  from "../assets/icon/cmp4.png"
import cmp5  from "../assets/icon/cmp5.png"
import cmp6  from "../assets/icon/cmp6.png"
import cmp7  from "../assets/icon/cmp7.png"
import mas from "../assets/mas.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
// animation

import {motion} from 'framer-motion';
import { fadeIn } from "./variants";

// 

function Product() {
  return (
    <div>
    {/* Aboute state  */}
    <div className="px-4 lg:px-14 max-w-screen-2xl  mx-auto my-8">
  <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
    {/* Image Section */}
    <motion.div
     variants={fadeIn("up", 0.2)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once: false , amount: 0.7}}
    className="text-center justify-center items-center md:w-1/2 sm:w-1/2 mb-8 md:mb-0">
      <img className=" hover:scale-95 mx-auto" src={product} alt="About Section" />
    </motion.div>

    {/* Text Content Section */}
    <motion.div
     variants={fadeIn("up", 0.2)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once: false , amount: 0.7}}

    className="md:w-1/2 ml-auto sm:w-1/2">
      <h2 className="text-4xl font-semibold md:w-4/5 mb-4 text-slate-800">
        How to design your site footer like we did
      </h2>
      <p className="md:w-3/4 text-sm mb-8">
        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
      </p>
      <Button className="btn bg-green-500 rounded mt-4 px-3 py-2 text-white text-[1rem] hover:bg-slate-500 hover:translate-y-4 transition-all duration-100">
        Learn More
      </Button>
    </motion.div>
  </div>
</div>

    {/* company state  */}
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-green-50 py-16">
         <div  className=" flex flex-col md:flex-row justify-between item-center gap-8">
               
            <motion.div
             variants={fadeIn("left", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false , amount: 0.7}}

            className="md:w-1/3 items-center justify-center text-center "><img src={mas} alt="" /></motion.div>
        {/*  state */}
            <motion.div
             variants={fadeIn("right", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false , amount: 0.7}}
            className=" md:w-2/3">
                <div>
                    <p className="md:w-4/5 text-sm  mb-4 ">
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <h5 className=" font-semibold text-green-500 mb-2  text-xl ">Tim Smith</h5>
                    <p className=" text-base mb-8">British Dragon Boat Racing Association</p>
                    <div>
                        <div className=" flex items-center gap-8 flex-wrap">
                             <img src={cmp} alt="" />
                             <img src={cmp2} alt="" />
                            <img src={cmp3} alt="" />
                            <img src={cmp4} alt="" />
                            <img src={cmp5} alt="" />
                            <img src={cmp6} alt="" />
                            <img src={cmp7} alt="" />
                            <div className="flex items-center gap-2">
                                <a className=" text-bold text-green-500 hover:text-gray-600" href="">Meet all customers </a>
                                <FaArrowRightLong className=" text-green-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
</div>
  )
}

export default Product