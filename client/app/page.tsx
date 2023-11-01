'use client';

import Image from 'next/image'
import logoMadeiranit from '../public/logo_madeiranit.png'
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [passworld, setPassword] = useState('')

  const handleLogin = (e: Event) => {
    router.push('/dashboard')
  }

  return (
    <>
      <div className='bg-primary h-screen w-screen lg:w-1/3 sm:w-screen flex flex-col justify-center items-center'>
        <Image
          src={ logoMadeiranit }
          alt='Logo Madeiranit'
          width={210}
          height={75}
        />
        <br />
        <span className='text-white mb-8 mt-10 text-xl font-medium'>Faça seu login</span>
        <div className='flex flex-col gap-3 w-[320px]'>
          <input
            type='text'
            className='rounded-lg h-12 bg-[#9AE793]'
          />
          <input
            type='password'
            className='rounded-lg h-12 bg-[#9AE793]'
          />
        </div>
        <button onClick={handleLogin} className='mt-12 bg-[#EAEAEA] w-36 h-10 rounded-lg text-primary text-sm font-extrabold'>Entrar</button>
      </div>
      <div>

      </div>
    </>
  )
}
