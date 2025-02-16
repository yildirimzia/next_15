import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const SocialAuthForm = () => {
    const buttonClass = 'background-dark400_light900 body-medium text-dark200_light800 rounded-2 px-4 py-3.5'
    return (
        <div className='mt-10 flex flex-wrap gap-2.5'>
            <Button className={buttonClass}>
                <Image
                    src='/icons/github.svg'
                    alt='google'
                    width={20}
                    height={20}
                    className='invert-colors mr-2.5 object-cover' />
                Login with GitHub
            </Button>
            <Button className={buttonClass}>
                <Image
                    src='/icons/google.svg'
                    alt='google'
                    width={20}
                    height={20}
                    className='invert-colors mr-2.5 object-cover' />
                Login with Google
            </Button>
        </div>
    )
}

export default SocialAuthForm
