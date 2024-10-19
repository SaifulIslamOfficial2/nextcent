/* eslint-disable no-unused-vars */
import cmp  from "../assets/icon/cmp1.png"
import cmp2  from "../assets/icon/cmp2.png"
import cmp3  from "../assets/icon/cmp3.png"
import cmp4  from "../assets/icon/cmp4.png"
import cmp5  from "../assets/icon/cmp5.png"
import cmp6  from "../assets/icon/cmp6.png"
import cmp7  from "../assets/icon/cmp7.png"

import {motion} from 'framer-motion';
import { fadeIn } from "./variants";



function Services() {






let services = [
    { id: 1, title : "Membership Organisations", description : "Our membership management software provides full automation of membership renewals and payments", image:"/src/assets/member1.png",
    },
    { id: 2, title : "National Associations", description : "Our membership management software provides full automation of membership renewals and payments", image:"/src/assets/member2.png",
    },
    { id: 3, title : "Clubs And Groups", description : "Our membership management software provides full automation of membership renewals and payments", image:"/src/assets/member3.png",
    },
]





  return (
    <div className="md:px-14 px-4 py-16  max-w-screen-2xl mx-auto">
        <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false , amount: 0.7}}
        
        className=" text-center my-8"> 
            <h2 className=" font-semibold text-[25px] text-gray-800 mb-2 ">Our Clients</h2>
            <p className="  text-base text-gray-500">We have been working with some Fortune 500+ clients</p>

            {/* company logo  */}
            <div className="flex flex-wrap justify-between gap-8 items-center mx-auto my-12">
                <img src={cmp} alt="" />
                <img src={cmp2} alt="" />
                <img src={cmp3} alt="" />
                <img src={cmp4} alt="" />
                <img src={cmp5} alt="" />
                <img src={cmp6} alt="" />
                <img src={cmp7} alt="" />
                
            </div>
        </motion.div>

        {/* card title  */}

        <motion.div
         variants={fadeIn("left", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false , amount: 0.7}}
        className=" mt-[20px] md:w-1/2 mx-auto text-center ">
            
        <h2 className=" w-[377px] mx-auto font-semibold text-[25px] text-gray-800 mb-2 ">Manage your entire community in a single system</h2>
            <p className="  text-base text-gray-500">Who is Nextcent suitable for?</p></motion.div>

          {/* card */}
          <div className=" mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                    {
                        services.map( services => <motion.div
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once: false , amount: 0.7}}
                        key={ services.id}>
                                <div className="">
                                    <div className=" px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4  hover:border-green-500 transition-all duration-200 justify-center items-center h-full">
                                       <div className="bg-[#E8F5E9] mb-4 w-10 h-10 rounded-tl-3xl rounded-br-3xl mx-auto ">
                                       <img  src={ services.image} alt="" className='-ml-2 w-7 h-7' />
                                       </div>
                                        <h1 className=" text-2xl font-bold px-2 mb-2 text-slate-800">{ services.title}</h1>
                                        <p className=" text-sm text-gray-600">{ services.description}</p>
                                    </div>
                                </div>
                        </motion.div>) 
                    }
            </div>


    </div>
  )
}

export default Services