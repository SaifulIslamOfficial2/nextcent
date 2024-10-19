/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import logo from '../assets/logo.png'
import MyLi from "./MyLi";
import Button from "./Button";
import { FaXmark , FaBars } from "react-icons/fa6";


function Navbar() {

    let [menuOpen , setmenuOpen] = useState(false);
    let [staiky , setStaiky] = useState(false);
  
//  set tooggle menu 

let setTogglemenu = ()=> {
    setmenuOpen(!menuOpen )
}

    useEffect( ()=> {
        let handleScroll = ()=>{

            if(window.scrollY > 100){
                setStaiky(true);
            }else {
                setStaiky(false);
            }

        };
        window.addEventListener('scroll', handleScroll)
        return ()=> {
            window.addEventListener('scroll', handleScroll)
        }
    });

//  navItems arry 
 
let navItems = [
    {link:'home', path: 'home'},
    {link:'Features', path: 'Features'},
    {link:'Community', path: 'Community'},
    {link:'Blog', path: 'Blog'},
    {link:'Pricing', path: 'Pricing'},
    {link:'FAQ', path: 'Faq'},
];

  return (
    <header className=" w-full bg-white md:bg-transparent top-0 left-0 right-0 fixed">
        <nav className={`lg:px-14 p-4 ${staiky ? "stiky top-0 left-0 right-0 border-b bg-white duration-300": ""}`}>
            <div className=" justify-between text-base flex gap-8 items-center">
                <a className=" font-semibold text-2xl flex items-center space-x-3" href=""><img className=" w-10 items-center inline-block" src= {logo} alt="" /><span className="text-[#263238]">NEXCENT</span></a>

                 <ul className=" space-x-12 hidden md:flex  ">
                       <MyLi className="text-D_Grey text-[16px]  block hover:text-green-500 font-semibold">Home</MyLi>
                       <MyLi className="text-D_Grey text-[16px] block hover:text-green-500 font-semibold">Community</MyLi>
                       <MyLi id="blog" className="text-D_Grey text-[16px] block hover:text-green-500 font-semibold">Blog</MyLi>
                       <MyLi className="text-D_Grey text-[16px] block hover:text-green-500 font-semibold">Pricing</MyLi>
                       <MyLi className="text-D_Grey text-[16px] block hover:text-green-500 font-semibold">Features</MyLi>
                </ul>

                <div className=" items-center space-x-12 hidden lg:flex ">
                        <a className=" hover:text-green-500 text-D_Grey hidden lg:flex items-center text-2xl" href="">login</a>
                        <Button className=" bg-[#4CAF4F] py-2 px-5 text-2xl hover:bg-slate-400 rounded-sm text-white">Sing Now </Button>  
                </div>
        {/* MENU BUTTON FOR ONLY MOBILE */}
                    <div className=" md:hidden ">
                            <button onClick={setTogglemenu} className=" focus:outline-none focus:bg-gray-500">
                              {
                                menuOpen ? (<FaXmark className=" w-6 h-6"/>): (<FaBars className=" w-6 h-6 "/>)
                              }
                            </button>
                    </div>


              </div>
                
          
        </nav>
        {/* nav items for mobile device */}
        <div className={`space-y-4 px-4 mt-16 bg-green-500 py-7 ${menuOpen ? "block fixed top-0 left-0 right-0": "hidden"} `}>
             <MyLi className="text-white text-[16px]  block hover:text-green-500 font-semibold">Home</MyLi>
             <MyLi  className="text-white text-[16px] block hover:text-green-500 font-semibold">Community</MyLi>
             <MyLi id="blog" className="text-white text-[16px] block hover:text-green-500 font-semibold">Blog</MyLi>
             <MyLi className="text-white text-[16px] block hover:text-green-500 font-semibold">Pricing</MyLi>
             <MyLi className="text-white text-[16px] block hover:text-green-500 font-semibold">Features</MyLi>                          
        </div>
    </header>
  )
}

export default Navbar