import React from 'react'
import Image from 'next/image'
import SocialAuthForm from '@/components/forms/SocialAuthForm'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex min-h-screen w-full items-center justify-center bg-auth-light dark:bg-auth-dark bg-cover bg-no-repeat px-4 '>

      <section className='light-border background-light800_dark_200 shadow-light100_dark100 min-w-full rounded-[10px] border
     px-8 py-10 gap-10 shadow-md sm:min-w-[450px] sm:px-8'>
        <div className='flex items-center justify-between gap-2'>
          <div className='space-y-2.5'>
            <h1 className='h2-bold text-dark100_light900'>Join DevFlow</h1>
            <p className='paragraph-regular text-dark500_light400 '>To get your questions answered</p>
          </div>

          <Image
            src='/images/site-logo.svg'
            alt='auth-light'
            width={50}
            height={50}
            className='object-contain'
          />
        </div>


        {children}
        <SocialAuthForm />
      </section>


    </main>
  )
}

export default AuthLayout
