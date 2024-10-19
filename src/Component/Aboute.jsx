import aboute1 from "../assets/aboute1.png"
import Button from "./Button"
import { MdGroups2,  } from "react-icons/md";
import { FaIdCard } from "react-icons/fa6";
import { FaHandMiddleFinger } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";

import {motion} from 'framer-motion';
import { fadeIn } from "./variants";


function Aboute() {
  return (
    <div>
        {/* Aboute state  */}
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center">
    {/* Image Section */}
    <motion.div
     variants={fadeIn("right", 0.2)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once: false , amount: 0.7}}
    
    className="text-center justify-center items-center md:w-1/2 sm:w-1/2 mb-8 md:mb-0">
      <img className="w-[230px] h-[210px] mx-auto" src={aboute1} alt="About Section" />
    </motion.div>

    {/* Text Content Section */}
    <motion.div
     variants={fadeIn("left", 0.2)}
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
             <div  className=" flex flex-col md:flex-row justify-between item-center gap-4">
                   
                       <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false , amount: 0.7}}
                       className="md:w-1/2 ">
                           <h3 className=" text-gray-800 mb-1 md:w-2/3 leading-snug  font-semibold text-3xl ">Helping a local </h3>
                           <h3 className=" text-green-500 font-semibold text-3xl leading-snug "> <span className="text-green-500">business reinvent itself</span></h3>
                           <p className=" text-[16px] text-gray-800 mt-2  leading-snug md:w-3/4 mb-8 ">We reached here with our hard work and dedication</p>
                       </motion.div>
                    

                {/* state  */}
               
                <motion.div
                 variants={fadeIn("left", 0.2)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{once: false , amount: 0.7}}
                
                className=" md:w-1/2 flex  flex-col sm:flex-row sm:items-center justify-around gap-12">
                    <div className=" space-y-8" >
                        <div className="flex items-center gap-4">
                            < FaHandMiddleFinger className=" text-[50px] text-green-500" />
                            <div>
                                <h3 className=" text-2xl font-semibold ">2,245,341</h3>
                                <p>Members</p>
                            </div> 
                        </div>

                        <div className="flex items-center gap-4">
                            <MdGroups2 className=" text-[50px] text-green-500" />
                            <div>
                                <h3 className=" text-2xl font-semibold ">2,245,341</h3>
                                <p>Members</p>
                            </div> 
                        </div>
                    </div>
                </motion.div>

                <motion.div
                 variants={fadeIn("left", 0.2)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{once: false , amount: 0.7}}
                
                className=" md:w-1/2 flex flex-col sm:flex-row sm:items-center justify-around gap-12">
                    <div className=" space-y-8" >
                        <div className="flex items-center gap-4">
                            <FaLayerGroup className=" text-[50px] text-green-500" />
                            <div>
                                <h3 className=" text-2xl font-semibold ">2,245,341</h3>
                                <p>Members</p>
                            </div> 
                        </div>

                        <div className="flex items-center gap-4">
                            <FaIdCard className=" text-[50px] text-green-500" />
                            <div>
                                <h3 className=" text-2xl font-semibold ">2,245,341</h3>
                                <p>Members</p>
                            </div> 
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    </div>
  )
}

export default Aboute