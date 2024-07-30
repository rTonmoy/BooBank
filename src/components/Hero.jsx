import React from "react";
import styles from "../style";
import banner from "../assets/banner.png";
import discount from "../assets/discount.svg";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} className="w-[32px] h-[32px] " alt="" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">30%</span>  Discount for {""}
            <span className="text-white">3 Month</span>  Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">Trusted<br className="sm:block hidden" />  {" "}
          <span className="text-gradient">Banking For</span>  {" "}
            </h1>

            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted/>
            </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">Modern Lives.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil delectus itaque ducimus et animi, non quidem quam minima fuga? Lorem ipsum sit amet.</p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img className="w-[100%] h-[100%] relative z-[5]" src={banner} alt="" />
        <div className=" absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className=" absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 pink__gradient"/>
        <div className=" absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
        <div className="absolute w-[90px] h-[90px] rounded-full bg-blue-gradient top-0 left-0"/>
        <div className="absolute w-[30px] h-[30px] rounded-full bg-blue-gradient top-[345px] left-[105px]"/>
        <div className="absolute w-[60px] h-[60px] rounded-full bg-blue-gradient top-[280px] left-[380px]"/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  );
};

export default Hero;
