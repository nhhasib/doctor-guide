import React from "react";
import blue1 from "../assets/images/blue1.png";
import blue2 from "../assets/images/blue2.png";
import orange1 from "../assets/images/orange1.png";
import orange2 from "../assets/images/orange2.png";
import img1 from "../assets/images/kisspng-physician-nursing-medicine-health-care-foreign-doctor-5a6b98c3c69386.png";
import img2 from "../assets/images/kisspng-physician-uniform-scrubs-white-coat-medicine-foreign-doctor-material-5a68c8b33322b6.png";
import Button from "./Button";
import { motion } from "framer-motion"

const CareNeedBanner = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 w-11/12 mx-auto my-10 relative">
      <div   className=" mt-16 lg:mt-48">
        <h1 className="font-bold text-4xl">Find The Care You Need</h1>
        <p className="my-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <Button text={"make appointment"}></Button>
      </div>
     
        <div className="">
                  <motion.img  animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }} className="absolute top-[400px] lg:top-20" src={orange1} alt="" />
                 <motion.img  animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }} className="absolute -bottom-[650px] lg:-bottom-[260px]" src={orange2} alt="" />
                  <img className="absolute top-[400px] lg:top-20 w-[407px] h-[618px]" src={img2} alt="" />
        </div>
        <div className="">
          <motion.img  animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }} className="absolute top-[1200px] lg:top-0" src={blue2} alt="" />
          <motion.img  animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }} className="absolute -bottom-[1524px] lg:-bottom-[350px]" src={blue1} alt="" />
            <img className="absolute top-[1100px] lg:top-0 lg:right-3 w-[479px] h-[792px] " src={img1} alt="" />
        </div>
      </div>
   
  );
};

export default CareNeedBanner;
