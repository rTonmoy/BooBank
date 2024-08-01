import React from 'react'
import styles, { layout } from "../style";
import bill from "../assets/bill.png"
import google from "../assets/google.svg"
import apple from "../assets/apple.svg"

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} className='w-[100%] h-[100%] relative z-[5]' alt="" />
        <div className=' absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full
        white__gradient'/>
        <div className=' absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full
        pink__gradient'/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Quickly manage your <br className='sm:block hidden' /> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi assumenda quos quidem vel quo adipisci molestiae iusto!</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' alt="" />
          <img src={google} className='w-[128px] h-[42px] object-contain cursor-pointer' alt="" />
        </div>
      </div>
    </section>
  )
}

export default Billing