import React from "react";
import blue1 from "../assets/images/blue1.png";
import blue2 from "../assets/images/blue2.png";
import orange1 from "../assets/images/orange1.png";
import orange2 from "../assets/images/orange2.png";
import img1 from "../assets/images/kisspng-physician-nursing-medicine-health-care-foreign-doctor-5a6b98c3c69386.png";
import img2 from "../assets/images/kisspng-physician-uniform-scrubs-white-coat-medicine-foreign-doctor-material-5a68c8b33322b6.png";
import Button from "./Button";

const CareNeedBanner = () => {
  return (
    <div className="grid grid-cols-3 items-center gap-4 w-11/12 mx-auto my-10">
      {/* <div className="">
        <h1 className="font-bold text-4xl">Find The Care You Need</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <Button text={"make appointment"}></Button>
      </div> */}
     
        <div className="relative">
                  <img className="absolute top-20" src={orange1} alt="" />
                 <img className="absolute -bottom-[700px]" src={orange2} alt="" />
                  <img className="absolute top-20 w-[407px] h-[618px]" src={img2} alt="" />
        </div>
        <div className="relative">
          <img className="absolute top-0" src={blue2} alt="" />
          <img className="absolute -bottom-[792px]" src={blue1} alt="" />
            <img className="absolute w-[479px] h-[792px] " src={img1} alt="" />
        </div>
      </div>
   
  );
};

export default CareNeedBanner;
