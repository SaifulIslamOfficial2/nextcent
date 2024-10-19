import Button from "./Button"
import {motion} from 'framer-motion';
import { fadeIn } from "./variants";


function NewsLetter() {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-[#F5F7FA] ">
        <div className="flex items-center justify-center lg:w-2/5 mx-auto">
                <motion.div
                 variants={fadeIn("left", 0.2)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{once: false , amount: 0.7}}
                className="text-center">
                <h5 className=" lg:text-4xl font-semibold lg:leading-snug  mb-4 text-slate-800 ">Pellentesque suscipit fringilla libero eu.</h5>
                <Button className="btn bg-green-500 rounded mt-4 px-3 py-2 text-white text-[1rem] hover:bg-slate-500 hover:translate-y-4 transition-all duration-100  ">Learn More</Button>
                </motion.div>
        </div>
    </div>
  )
}

export default NewsLetter