import { Button } from '@/components/ui/button'
import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-7xl font-bold mt-20'>Island</h1>
        <p>A simple island component for react</p>
        <br />
        <div className='flex flex-row gap-5'>
        <Button className='font-bold'>Move your mouse downward</Button>
        <Button variant={'secondary'}>Repository</Button>
        </div>
        <br />
    </div>
  )
}

export default Hero
