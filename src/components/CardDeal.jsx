import React from 'react'
import styles, { layout } from "../style";
import card from "../assets/card.png"
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Get a finer card deal <br className='sm:block hidden' /> in a short distance</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi assumenda quos quidem vel quo adipisci molestiae iusto.</p>
      <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal