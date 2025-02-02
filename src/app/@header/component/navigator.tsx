'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import style from '@/app/header.nav.module.css'

export default function HeaderNavigator() {

  const pathName = usePathname();

  /** 0 : home, 1 : lectures, 2 : books , 3 : blogs, 4 : community, 5 : help */
  const [pathIndex, setPathIndex] = useState<number>(0);
  
  useEffect(() => {
    if(pathName.startsWith(`/lectures`)) {
      setPathIndex(1);
    } else if(pathName.startsWith(`/books`)) {
      setPathIndex(2);
    } else if(pathName.startsWith(`/blogs`)) {
      setPathIndex(3);
    } else if(pathName.startsWith(`/community`)) {
      setPathIndex(4);
    } else if(pathName.startsWith(`/help`)) {
      setPathIndex(5);
    } else {
      setPathIndex(0);
    }
  }, [pathName])

    return (
        <>
            <div className="flex justify-end">
              <div className="basis-1/6 flex justify-center">
                <Link href={`/lectures`}><span className={`text-gray-600 ${pathIndex === 1 ? style.active : ''}`}>Lectures</span></Link> 
              </div>
              <div className="basis-1/6 flex justify-center">
                <Link href={`/books`}><span className={`text-gray-600 ${pathIndex === 2 ? style.active : ''}`}>Books</span></Link>
              </div>
              <div className="basis-1/6 flex justify-center">
                <Link href={`/blogs`}><span className={`text-gray-600 ${pathIndex === 3 ? style.active : ''}`}>Blogs</span></Link>
              </div>
              <div className="basis-1/6 flex justify-center">
                <Link href={`/community`}><span className={`text-gray-600 ${pathIndex === 4 ? style.active : ''}`}>Community</span></Link>
              </div>
              <div className="basis-1/6 flex justify-center">
                <Link href={`/help`}><span className={`text-gray-600 ${pathIndex === 5 ? style.active : ''}`}>Help</span></Link>
              </div>
            </div>
        </>
    )
}