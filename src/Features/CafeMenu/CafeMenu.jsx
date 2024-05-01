import React from 'react'
import TopMenu from './TopMenu';
import Coffee from './Coffee';
import Hot from './Hot';
import Damnoosh from './Damnoosh';
import MilkShake from './MilkShake';
import Smoothie from './Smoothie';
import IceCoffee from './IceCoffee';
import Cake from './Cake';
import Vafel from './Vafel';
import Makatel from './Makatel';
import CustomBreadcrumb from '@/UI/CustomBreadcrumb';


const CafeMenu = () => {
  return (
    <>
    <section className='container relative min-h-screen mt-6'>
    <CustomBreadcrumb hrefTow="" textTow=" کافه رستوران" />
        {/* Top menu */}
     <TopMenu />
     <Coffee />
     <Hot />
     <Damnoosh />
     <MilkShake />
     <Smoothie />
     <IceCoffee />
     <Cake />
     <Vafel />
     <Makatel />
    </section>
      </>
  )
}

export default CafeMenu
