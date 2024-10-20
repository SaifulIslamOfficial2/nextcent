/* eslint-disable react/no-unescaped-entities */
import { FaArrowRightLong } from "react-icons/fa6";
import blog1 from "../assets/blog1.jpg"
import blog2 from "../assets/blog2.jpg"
import blog3 from "../assets/blog3.jpg"
// animation
import {motion} from 'framer-motion';
import { fadeIn } from "./variants";

function Blog() {


    let blogs = [
        {id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: blog1},
        {id: 2, title: "Creating Streamlined Safeguarding Processes with OneRen", image: blog2},
        {id: 3, title: "Creating Streamlined Safeguarding Processes with OneRen", image:blog3},
    ]

  return (
    <div  className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12"  htmlFor="blog">
        <motion.div
         variants={fadeIn("up", 0.1)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false , amount: 0.7}}
        
        className="text-center md:w-1/2 mx-auto w-[209px]">
             <h2 className=" text-4xl font-semibold mb-4 text-slate-800 ">Caring is the new marketing</h2>
             <p className="md:w-3/4 text-sm mb-8 mx-auto">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and's more</p>
        </motion.div>
        {/* all blogs */}
        <motion.div
         variants={fadeIn("up", 0.1)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false , amount: 0.7}}
         
        className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between items-center gap-10 ">
            {
                blogs.map(blogs => <div key={blogs.id} className="mx-auto mb-12 cursor-pointer relative">
                        <img className="rounded-lg hover:scale-95 transition-all duration-200" src={blogs.image} alt="" />
                        <div className=" px-4 py-8 text-center shadow-lg rounded-md bg-white md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                            <h2 className="mb-3 font-semibold ">{blogs.title}</h2>
                            <div className="flex items-center justify-center gap-2">
                                <a className=" text-bold text-green-500 hover:text-gray-600" href="">Readmore </a>
                                <FaArrowRightLong className=" text-green-500 hover:text-gray-600" />
                            </div>
                        </div>
                </div>)
            }
        </motion.div>
    
    </div>
  )
}

export default Blog