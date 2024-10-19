import logo from '../assets/logo.png'
import { Footer } from "flowbite-react";
import {  BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
// animation
import {motion} from 'framer-motion';
import { fadeIn } from "./variants";

function Myfooter() {
  return (
    <div>

<Footer>
      <motion.div
       variants={fadeIn("up", 0.1)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once: false , amount: 0.7}}
       
      className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
          <a className=" font-semibold text-2xl flex items-center mb-2 space-x-3" href=""><img className=" w-10 items-center inline-block" src= {logo} alt="" /><span className="text-black">NEXCENT</span></a>
            <Footer.LinkGroup col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <p className='text-[14px] text-white'>Copyright by Saiful islam 2024</p>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
           
          </div>
        </div>
      </motion.div>
    </Footer>

    </div>
  )
}

export default Myfooter