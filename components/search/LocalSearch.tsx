"use client"
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { formUrlQuery, removeKeysFromUrlQuery } from '@/lib/url';
interface Props {
    route: string;
    imgSrc: string;
    placeholder: string;
    otherClasses?: string;
}

const LocalSearch = ({ route, imgSrc, placeholder, otherClasses }: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const query = searchParams.get('query');

    const [searchQuery, setSearchQuery] = useState(query || '');

    useEffect(() => {

        const delayDebounceFn = setTimeout(() => {

            if (searchQuery) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: 'query',
                    value: searchQuery
                })

                router.push(newUrl, { scroll: false });
            } else {
                if (pathname === route) {
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ["query"],
                    })

                    router.push(newUrl, { scroll: false });
                }
            }
        }, 300);
        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery, router, route, searchParams, pathname]);

    return (
        <div className={`background-light800_darkgradient gap-4 grow rounded-[10px]  px-4 flex min-h-[56px] items-center ${otherClasses}`}>
            <Image src={imgSrc} alt='search' className='cursor-pointer' width={24} height={24} />
            <Input
                type='text'
                value={searchQuery}
                placeholder={placeholder}
                className='border-none paragraph-regular no-focus placeholder-light-400 text-dark400_light700'
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                }}
            />
        </div>
    )
}


export default LocalSearch
